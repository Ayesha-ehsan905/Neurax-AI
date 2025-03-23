"use client";

import { OUR_JOURNEY } from "@/utilis/constant";
import { motion, useTransform, useScroll } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";

const Example = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 mt-[160px]">
        <span className="text-[40px] font-medium font-esbuild">
          Our Journey
        </span>
        <span className="text-[16px] font-normal leading-[120%]">
          Lorem ipsum orem ipsum dolor sit amet uing
        </span>
      </div>
      <div>
        <HorizontalScrollCarousel />
      </div>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const cardWidth = 280; // Fixed card width
  const gap = 165; // Space between cards
  const totalWidth = OUR_JOURNEY.length * (cardWidth + gap);
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const maxOffset = -(totalWidth - viewportWidth); // Prevent cropping last cards

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${maxOffset}px`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // **State to track visible phase numbers**
  const [visiblePhases, setVisiblePhases] = useState<number[]>([]);

  useEffect(() => {
    const updateVisiblePhases = () => {
      const scrollX = parseFloat(x.get()); // Get current scroll value
      const phaseNumbers: number[] = [];

      OUR_JOURNEY.forEach((_, index) => {
        const cardStart = index * (cardWidth + gap);
        const cardEnd = cardStart + cardWidth;

        // Check if card is fully in view
        if (cardStart >= -scrollX && cardEnd <= viewportWidth - scrollX) {
          phaseNumbers.push(index + 1);
        }
      });

      setVisiblePhases(phaseNumbers);
    };

    const unsubscribeX = x.on("change", updateVisiblePhases);
    return () => unsubscribeX();
  }, [x]);

  return (
    <section ref={targetRef} className="relative h-[150vh]">
      {/* Sticky container for scrolling */}
      <div className="sticky top-[20%] flex h-screen items-center overflow-hidden">
        {/* Phase Numbers Above Progress Bar */}

        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[80%] flex justify-between text-white text-lg font-bold z-50">
          {visiblePhases.map((item, idx) => (
            <span key={idx} className="text-center w-[50px]">
              Phase {item}
            </span>
          ))}
        </div>

        {/* Progress Bar positioned above the cards */}
        <div className="absolute top-[20%] left-1/2 w-[80%] h-2 bg-gray-500 z-50 -translate-x-1/2 -translate-y-1/2 rounded-[12px]">
          <motion.div
            style={{
              width: progressWidth,
              background: "linear-gradient( 360deg, #16E390 0%, #3A4ADB 100%)",
            }}
            className="h-full bg-red-500 rounded-[12px]"
          />
        </div>

        {/* Horizontal Scrolling Cards */}
        <motion.div style={{ x }} className="flex gap-[165px] px-6">
          {OUR_JOURNEY.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              cardWidth={cardWidth}
              isFirst={index == 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  card,
  cardWidth,
  isFirst,
}: {
  card: any;
  cardWidth: number;
  isFirst: boolean;
}) => {
  return (
    <div
      className="group relative overflow-hidden bg-blackDarker text-white rounded-xl shadow-lg border border-darkCharcoal"
      style={{
        width: `${cardWidth}px`,
        marginLeft: isFirst ? "80px" : "0px",
      }}
    >
      <div className="flex flex-col gap-4 p-4 h-full">
        <span>{card.icon}</span>
        <h3 className="text-[20px] font-normal font-esbuild text-white leading-[100%]">
          {card.title}
        </h3>
        <ul className="list-disc ml-5 pl-2">
          {card.items.map((item: string, index: number) => (
            <li key={index} className="text-[14px] font-normal leading-[140%]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Example;
