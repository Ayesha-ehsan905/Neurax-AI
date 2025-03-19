"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

type Dot = {
  id: string;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
};

const HeroSectionAnimation = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [dots, setDots] = useState<Dot[]>([]);
  const requestRef = useRef<number | null>(null);
  const dotRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Initialize the grid
  const initializeGrid = useCallback(() => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const spacing = 30; // Space between dots
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);

    setDots(
      Array.from({ length: rows * cols }, (_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        return {
          id: `${row}-${col}`,
          x: col * spacing + spacing / 2,
          y: row * spacing + spacing / 2,
          originalX: col * spacing + spacing / 2,
          originalY: row * spacing + spacing / 2,
        };
      })
    );
  }, []);

  useEffect(() => {
    initializeGrid();
    window.addEventListener("resize", initializeGrid);

    return () => {
      window.removeEventListener("resize", initializeGrid);
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
    };
  }, [initializeGrid]);

  // Animation loop
  useEffect(() => {
    const animateDots = () => {
      const { x: mouseX, y: mouseY } = mousePositionRef.current;
      const maxDistance = 150;

      for (const dot of dots) {
        const dotElement = dotRefs.current[dot.id];
        if (!dotElement) continue;

        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / maxDistance);

        if (influence > 0) {
          // const g = Math.floor(255 * (1 - influence));
          // const b = Math.floor(255 * (1 - influence));
          const opacity = influence * 0.3 + 0.2; // Ensures min opacity
          dotElement.style.backgroundColor = `#16E390`;
          dotElement.style.opacity = opacity.toString();

          dotElement.style.transition = "background-color 0.05s linear";
        } else {
          dotElement.style.backgroundColor = "#FFFFFF1F";
          dotElement.style.opacity = ".5";
          dotElement.style.transition = "background-color 0.2s ease-out";
        }
      }

      requestRef.current = requestAnimationFrame(animateDots);
    };

    if (dots.length > 0) {
      requestRef.current = requestAnimationFrame(animateDots);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [dots]);

  // Handle mouse movement - update position immediately
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      mousePositionRef.current = { x: e.clientX - left, y: e.clientY - top };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[85vh] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          ref={(el) => {
            if (el) dotRefs.current[dot?.id] = el;
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: dot.originalX,
            top: dot.originalY,
            width: 5,
            height: 5,
            willChange: "background-color",
          }}
        />
      ))}

      {/* Hero content */}
      {children}
    </div>
  );
};

export default HeroSectionAnimation;
