import React, { useEffect } from 'react';
import gsap from 'gsap';

const ChartAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo("#bar1", { scale: 0, backgroundColor: "#ff6f61" }, { scale: 1, duration: 1, backgroundColor: "#009fb5", ease: "elastic.out(1, 0.5)" });
      gsap.fromTo("#bar2", { scale: 0, backgroundColor: "#ffb74d" }, { scale: 1, duration: 1.2, backgroundColor: "#00768a", ease: "elastic.out(1, 0.5)", delay: 0.3 });
      gsap.fromTo("#bar3", { scale: 0, backgroundColor: "#81c784" }, { scale: 1, duration: 1.4, backgroundColor: "#005b6f", ease: "elastic.out(1, 0.5)", delay: 0.6 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="chart-container flex gap-4 p-4">
        <div className="bar" id="bar1" style={{ width: '80px', height: '80px', color: '#fff', textAlign: 'center', padding: '10px' }}>Section 1</div>
        <div className="bar" id="bar2" style={{ width: '80px', height: '80px', color: '#fff', textAlign: 'center', padding: '10px' }}>Section 2</div>
        <div className="bar" id="bar3" style={{ width: '80px', height: '80px', color: '#fff', textAlign: 'center', padding: '10px' }}>Section 3</div>
      </div>
    </div>
  );
};

export default ChartAnimation;
