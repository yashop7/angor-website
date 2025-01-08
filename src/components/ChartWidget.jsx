import { useEffect, useRef, useState, useCallback } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';

const ChartWidget = () => {
  const chartContainerRef = useRef(null);
  const containerRef = useRef(null);
  const chart = useRef(null);
  const candleSeries = useRef(null);
  const resizeObserver = useRef(null);
  const [timeframe, setTimeframe] = useState('1h');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const changeTimeframe = useCallback(async (newTimeframe) => {
    setTimeframe(newTimeframe);
    try {
      const response = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${newTimeframe}&limit=1000`
      );
      const data = await response.json();
      const candleData = data.map(d => ({
        time: d[0] / 1000,
        open: parseFloat(d[1]),
        high: parseFloat(d[2]),
        low: parseFloat(d[3]),
        close: parseFloat(d[4]),
      }));
      
      candleSeries.current.setData(candleData);
    } catch (error) {
      console.error('Failed to fetch timeframe data:', error);
    }
  }, []);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const updateChartHeight = () => {
      const containerHeight = chartContainerRef.current.clientHeight;
      chart.current?.applyOptions({ height: containerHeight });
    };

    chart.current = createChart(chartContainerRef.current, {
      layout: {
        background: { color: 'rgb(6, 30, 36)' },
        textColor: 'rgb(203, 221, 225)',
      },
      grid: {
        vertLines: { color: 'rgba(255, 255, 255, 0.07)' },
        horzLines: { color: 'rgba(255, 255, 255, 0.07)' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderColor: 'rgba(255, 255, 255, 0.1)',
      },
      timeScale: {
        borderColor: 'rgba(255, 255, 255, 0.1)',
        timeVisible: true,
        secondsVisible: false,
      },
    });

    // Update height when fullscreen changes
    updateChartHeight();

    candleSeries.current = chart.current.addCandlestickSeries({
      upColor: 'rgb(8, 108, 129)',
      downColor: 'rgb(203, 221, 225)',
      borderUpColor: 'rgb(8, 108, 129)',
      borderDownColor: 'rgb(203, 221, 225)',
      wickUpColor: 'rgb(8, 108, 129)',
      wickDownColor: 'rgb(203, 221, 225)',
    });

    // Initial data fetch
    fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=1000')
      .then(response => response.json())
      .then(data => {
        const candleData = data.map(d => ({
          time: d[0] / 1000,
          open: parseFloat(d[1]),
          high: parseFloat(d[2]),
          low: parseFloat(d[3]),
          close: parseFloat(d[4]),
        }));
        candleSeries.current.setData(candleData);
      });

    // WebSocket connection
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const candle = data.k;
      candleSeries.current.update({
        time: candle.t / 1000,
        open: parseFloat(candle.o),
        high: parseFloat(candle.h),
        low: parseFloat(candle.l),
        close: parseFloat(candle.c),
      });
    };

    // Resize observer
    resizeObserver.current = new ResizeObserver(() => {
      if (!chart.current) return;
      const newRect = chartContainerRef.current.getBoundingClientRect();
      chart.current.applyOptions({ 
        width: newRect.width,
        height: newRect.height
      });
    });
    
    resizeObserver.current.observe(chartContainerRef.current);

    return () => {
      ws.close();
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      if (chart.current) {
        chart.current.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`flex flex-col w-full ${isFullscreen ? 'h-screen' : 'h-full'}`}
    >
      <div className="p-2 bg-bgDark2 border-b border-bgDark3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex gap-2 flex-wrap">
          {['1m', '5m', '15m', '1h', '4h', '1d'].map(tf => (
            <button
              key={tf}
              onClick={() => changeTimeframe(tf)}
              className={`px-3 py-1 rounded ${
                timeframe === tf
                  ? 'bg-primary text-white'
                  : 'bg-bgDark3 text-primaryText hover:bg-bgDark4'
              }`}
            >
              {tf.toUpperCase()}
            </button>
          ))}
        </div>
        
        <button
          onClick={toggleFullscreen}
          className="px-3 py-1 bg-bgDark3 text-primaryText rounded hover:bg-bgDark4 flex items-center gap-1"
        >
         
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>

      <div 
        className={`w-full bg-[rgb(6,30,36)] ${
          isFullscreen ? 'flex-1' : 'h-[700px]'
        }`} 
        ref={chartContainerRef}
      />
    </div>
  );
};

export default ChartWidget;
