import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const BtcPriceWidget = () => {
  const [price, setPrice] = useState("Loading...");
  const [change, setChange] = useState("Loading...");
  const [changeColor, setChangeColor] = useState("#fff");
  const priceRef = useRef(null);
  const previousPrice = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@ticker");

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const currentPrice = parseFloat(data.c).toFixed(2);
      const priceChangePercent = parseFloat(data.P).toFixed(2);

      if (previousPrice.current !== currentPrice) {
        gsap.fromTo(
          priceRef.current,
          { scale: 1.2, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" }
        );

        setPrice(`$${currentPrice}`);
        setChange(`24h Change: ${priceChangePercent}%`);

        setChangeColor(priceChangePercent >= 0 ? "#27ae60" : "#e74c3c");

        previousPrice.current = currentPrice;
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed. Reconnecting...");
      setTimeout(() => {
        initializeWebSocket();
      }, 1000);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-24 md:mb-48 lg:mb-48 text-white">
      <div
        ref={priceRef}
        className="text-4xl md:text-6xl lg:text-8xl font-extrabold transition-colors duration-500"
        style={{ color: changeColor }}
      >
        {price}
      </div>
      <div
        className="text-lg md:text-xl lg:text-2xl mt-2 md:mt-3 lg:mt-4"
        style={{ color: changeColor }}
      >
        {change}
      </div>
    </div>
  );
};

export default BtcPriceWidget;
