"use client";

import { OUR_JOURNEY } from "@/utilis/constant";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { BulletIcon } from "./icon";

const OurJourney = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 mt-[160px]">
        <span className="text-[24px] md:text-[40px] font-medium font-esbuild">
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

  return (
    <section ref={targetRef} className="relative h-[150vh]">
      {/* Sticky container for scrolling */}
      <div className="sticky top-[20%] flex h-screen items-center overflow-hidden">
        {/* Labels above the progress bar */}
        <div className="absolute top-[21%] left-[-15%] w-[20%] h-[40%] bg-linear-(--image-gradient) z-60 blur-[100px] opacity-[0.4]" />
        <div className="absolute top-[21%] right-[-15%] w-[20%] h-[40%] bg-linear-(--image-gradient) z-60 blur-[100px] opacity-[0.4]" />
        <div
          className="absolute  left-[10%] "
          style={{ top: "calc(15% - 32px)" }}
        >
          <motion.div style={{ x }} className="flex gap-[165px]">
            {OUR_JOURNEY.map((card) => (
              <div
                key={card.id}
                style={{ width: `${cardWidth}px`, textAlign: "center" }}
              >
                <div
                  className={`flex items-center gap-2 ${
                    card.id == 6 ? "ml-[80px] sm:ml-0" : ""
                  }`}
                >
                  <BulletIcon />
                  <span className="text-[14px] font-normal leading-[120%] text-white whitespace-nowrap">
                    Phase {card.id}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar positioned above the cards */}
        <div className="absolute top-[20%] left-1/2   w-[80%] h-2 bg-darkCharcoal6B z-50 -translate-x-1/2 -translate-y-1/2 rounded-[12px]">
          <motion.div
            style={{
              width: progressWidth,
              height: "100%",
              borderRadius: "12px",
              background: "linear-gradient(-260deg, #16E390 0%, #3A4ADB 100%)",
            }}
          />
        </div>

        {/* Horizontal Scrolling Cards */}
        <motion.div
          style={{ x, top: "calc(22% + 40px)" }}
          className="flex gap-[165px] lg:gap-[120px] px-6 absolute "
        >
          {OUR_JOURNEY.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              cardWidth={cardWidth}
              isFirst={index == 0}
              isLast={index == 5}
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
  isLast,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  card: any;
  cardWidth: number;
  isFirst: boolean;
  isLast: boolean;
}) => {
  console.log(isLast);
  return (
    <div
      className={`group relative overflow-hidden bg-blackDarker text-white rounded-xl shadow-lg border border-darkCharcoal  ${
        isFirst ? "2xl:ml-[120px] md:ml-[80px]" : ""
      } ${isLast ? "ml-[80px] " : ""}`}
      style={{
        width: `${cardWidth}px`,
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

export default OurJourney;
