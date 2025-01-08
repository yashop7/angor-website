import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import ChartWidget from "./ChartWidget";

const BtcPriceWidget = () => {
  const [price, setPrice] = useState("Loading...");
  const [change, setChange] = useState("Loading...");
  const [changeColor, setChangeColor] = useState("#fff");
  const priceRef = useRef(null);
  const previousPrice = useRef(null);
  const wsRef = useRef(null);

  const MAX_RECONNECT_ATTEMPTS = 5;
  const reconnectAttemptsRef = useRef(0);
  
  const fetchPriceData = async () => {
    try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
      const data = await response.json();
      
      const currentPrice = parseFloat(data.lastPrice).toFixed(2);
      const priceChangePercent = parseFloat(data.priceChangePercent).toFixed(2);
      
      setPrice(`$${currentPrice}`);
      setChange(`24h Change: ${priceChangePercent}%`);
      setChangeColor(priceChangePercent >= 0 ? "#27ae60" : "#e74c3c");
      previousPrice.current = currentPrice;
      animatePrice();
    } catch (error) {
      console.error('Failed to fetch price data:', error);
    }
  };

  const animatePrice = useCallback(() => {
    if (priceRef.current) {
      gsap.fromTo(
        priceRef.current,
        { scale: 1.1, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, []);

  const initializeWebSocket = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close();
    }

    try {
      const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@ticker");
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("WebSocket connection opened");
        reconnectAttemptsRef.current = 0; // Reset counter on successful connection
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          const currentPrice = parseFloat(data.c).toFixed(2);
          const priceChangePercent = parseFloat(data.P).toFixed(2);

          if (previousPrice.current !== currentPrice) {
            setPrice(`$${currentPrice}`);
            setChange(`24h Change: ${priceChangePercent}%`);
            setChangeColor(priceChangePercent >= 0 ? "#27ae60" : "#e74c3c");
            previousPrice.current = currentPrice;
            animatePrice();
          }
        } catch (error) {
          console.error('Error processing WebSocket message:', error);
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        fetchPriceData(); // Fallback to REST API on error
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed");
        if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
          reconnectAttemptsRef.current++;
          console.log(`Reconnecting... Attempt ${reconnectAttemptsRef.current}`);
          setTimeout(initializeWebSocket, 2000 * reconnectAttemptsRef.current);
        } else {
          console.log('Max reconnection attempts reached. Falling back to REST API');
          // Set up polling fallback
          const intervalId = setInterval(fetchPriceData, 5000);
          return () => clearInterval(intervalId);
        }
      };

      return ws;
    } catch (error) {
      console.error('Failed to initialize WebSocket:', error);
      fetchPriceData();
    }
  }, [animatePrice]);

  useEffect(() => {
    fetchPriceData(); // Initial price fetch
    const ws = initializeWebSocket();

    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [initializeWebSocket]);

  return (
    <div className="flex flex-col items-center w-full gap-6">
      <div className="text-center">
        <div
          ref={priceRef}
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold transition-colors duration-500"
          style={{ color: changeColor }}
        >
          {price}
        </div>
        <div
          className="text-lg md:text-xl lg:text-2xl mt-2"
          style={{ color: changeColor }}
        >
          {change}
        </div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 mb-20">
        <div className="w-full bg-bgDark1 rounded-lg shadow-xl overflow-hidden">
          <ChartWidget />
        </div>
      </div>
    </div>
  );
};

export default BtcPriceWidget;
