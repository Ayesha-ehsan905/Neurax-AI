"use client";
import { useEffect, useRef } from "react";
import { PredictiveMarketIcon } from "./icon";

function AnimatedGrid() {
  const containerRef = useRef(null);
  const containerRefBottom = useRef(null);
  const animateSliding = (
    container: HTMLElement,
    direction: "left" | "right"
  ) => {
    let offset = 0;
    const speed = 0.5;
    const step = () => {
      offset += speed;
      if (direction === "left") {
        container.style.transform = `translateX(-${offset}px)`;
      } else {
        container.style.transform = `translateX(${offset}px)`;
      }
      if (offset > container.offsetWidth) offset = 0; // Reset once the container width is exceeded
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const containerTop = containerRef.current;
    const containerBottom = containerRefBottom.current;
    if (!containerTop || !containerBottom) return;
    animateSliding(containerTop, "left");
    animateSliding(containerBottom, "right");
  }, []);
  const renderBoxes = () => {
    return Array.from({ length: 5 }, (_, idx) => (
      <div key={idx} className="relative">
        <svg
          width="29"
          height="30"
          viewBox="0 0 29 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-0.5"
            y="0.5"
            width="27.6855"
            height="27.6855"
            rx="3.5"
            transform="matrix(-1 0 0 1 27.9458 0.550171)"
            fill="#1A1A1A"
          />
          <rect
            x="-0.5"
            y="0.5"
            width="27.6855"
            height="27.6855"
            rx="3.5"
            transform="matrix(-1 0 0 1 27.9458 0.550171)"
            stroke="#303030"
          />
          <rect x="-0.5" y="0.5" width="27.6855" height="27.6855" rx="3.5" />
        </svg>
      </div>
    ));
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center  max-w-[200px] overflow-hidden">
      {/* Center SVG with pulsating blue glow */}
      <div className="absolute z-10">
        <PredictiveMarketIcon />
      </div>
      {/* Sliding boxes */}
      <div
        ref={containerRef}
        className="flex gap-5 absolute top-[10%] left-0 transition-transform ease-linear will-change-transform"
      >
        {renderBoxes()}
      </div>
      <div
        ref={containerRefBottom}
        className="flex gap-5 absolute bottom-[10%] left-0 transition-transform ease-linear will-change-transform"
      >
        {renderBoxes()}
      </div>
    </div>
  );
}
export default AnimatedGrid;
