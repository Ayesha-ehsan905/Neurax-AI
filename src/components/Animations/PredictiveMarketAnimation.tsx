"use client";

import { useEffect, useRef } from "react";
import { PredictiveMarketIcon } from "../icon";

function PredictiveMarketAnimation() {
  const containerRefTop = useRef<HTMLDivElement>(null);
  const containerRefBottom = useRef<HTMLDivElement>(null);

  const animateSliding = (
    container: HTMLElement,
    direction: "left" | "right"
  ) => {
    const scrollWidth = container.scrollWidth / 2;
    let offset = direction === "left" ? 0 : -scrollWidth; // Bottom starts offscreen
    const speed = 0.5;

    const step = () => {
      if (direction === "left") {
        offset -= speed;
        if (Math.abs(offset) >= scrollWidth) {
          offset = 0;
        }
      } else {
        offset += speed;
        if (offset >= 0) {
          offset = -scrollWidth;
        }
      }

      container.style.transform = `translateX(${offset}px)`;

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (containerRefTop.current && containerRefBottom.current) {
      animateSliding(containerRefTop.current, "left");
      animateSliding(containerRefBottom.current, "right");
    }
  }, []);

  const renderBoxes = () => {
    const singleSet = Array.from({ length: 5 }, (_, idx) => (
      <div key={idx} className="relative shrink-0">
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
        </svg>
      </div>
    ));
    //to remove the deuplicate key warning, we can use the index of the map function
    const duplicatedSet = singleSet.map((box, idx) => (
      // clone with new key
      <div key={idx + 5}>{box.props.children}</div>
    ));

    return [...singleSet, ...duplicatedSet];

    // return [...singleSet, ...singleSet];
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center max-w-[200px] overflow-hidden">
      {/* Center SVG Icon */}
      <div className="absolute z-10">
        <PredictiveMarketIcon />
      </div>

      {/* Top Row: Right to Left */}
      <div
        ref={containerRefTop}
        className="flex absolute top-[10%] left-0 gap-5 will-change-transform"
      >
        {renderBoxes()}
      </div>

      {/* Bottom Row: Left to Right */}
      <div
        ref={containerRefBottom}
        className="flex absolute bottom-[10%] left-0 gap-5 will-change-transform"
      >
        {renderBoxes()}
      </div>
    </div>
  );
}

export default PredictiveMarketAnimation;
