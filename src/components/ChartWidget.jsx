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
    const element = containerRef.current;
    const isIOSSafari = /iP(ad|od|hone)/i.test(window.navigator.userAgent) &&
                       /WebKit/i.test(window.navigator.userAgent) &&
                       !/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent);

    if (!isFullscreen) {
      if (isIOSSafari) {
        // iOS Safari specific handling
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';
        element.style.width = '100%';
        element.style.height = '100dvh'; // dynamic viewport height
        element.style.zIndex = '9999';
        element.style.backgroundColor = 'rgb(6, 30, 36)';
        document.body.style.position = 'fixed';
        document.body.style.overflow = 'hidden';
        
        // Force reflow for iOS
        window.scrollTo(0, 0);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      } else {
        // Standard fullscreen API
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        }
      }
      setIsFullscreen(true);
    } else {
      if (isIOSSafari) {
        // Reset iOS Safari specific styles
        element.style.position = '';
        element.style.top = '';
        element.style.left = '';
        element.style.width = '';
        element.style.height = '';
        element.style.zIndex = '';
        element.style.backgroundColor = '';
        document.body.style.position = '';
        document.body.style.overflow = '';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!(
        document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      setIsFullscreen(isFs);
      document.body.style.overflow = isFs ? 'hidden' : 'auto';
    };

    // Add all vendor prefix event listeners
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
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
      const containerHeight = chartContainerRef.current.clientHeight - 56; // subtract toolbar height
      chart.current?.applyOptions({ 
        height: containerHeight,
        layout: {
          background: { color: 'rgb(6, 30, 36)' },
          textColor: 'rgb(203, 221, 225)',
          padding: { top: 10, bottom: 10 }
        }
      });
    };

    chart.current = createChart(chartContainerRef.current, {
      layout: {
        background: { color: 'rgb(6, 30, 36)' },
        textColor: 'rgb(203, 221, 225)',
        padding: { top: 10, bottom: 10 }
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
      className={`flex flex-col w-full relative ${
        isFullscreen 
          ? 'fixed inset-0 min-h-screen overflow-hidden z-50 bg-[rgb(6,30,36)]' 
          : 'h-full'
      }`}
      style={isFullscreen ? { height: '100dvh' } : {}}
    >
      <div 
        className={`${
          isFullscreen ? 'h-[48px] sticky top-0' : 'h-[48px]'
        } bg-bgDark2 border-b border-bgDark3 flex flex-wrap justify-between items-center w-full z-10`}
      >
        <div className="flex gap-1 sm:gap-2 flex-wrap">
          {['1m', '5m', '15m', '1h', '4h', '1d'].map(tf => (
            <button
              key={tf}
              onClick={() => changeTimeframe(tf)}
              className={`px-2 sm:px-3 py-1 text-sm sm:text-base rounded ${
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
          className="px-2 sm:px-3 py-1 bg-bgDark3 text-primaryText text-sm sm:text-base rounded hover:bg-bgDark4 flex items-center gap-1 ml-2 select-none touch-manipulation"
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>

      <div 
        className={`w-full bg-[rgb(6,30,36)] ${
          isFullscreen 
            ? 'h-[calc(100dvh-48px)]' // subtract toolbar height
            : 'h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]'
        }`} 
        ref={chartContainerRef}
      />
    </div>
  );
};

export default ChartWidget;
