"use client";

import { TASKS } from "@/utilis/constant";
import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./sections/Button";
import Image from "next/image";

const CIRCLE_SIZE =
  typeof window !== "undefined"
    ? parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--circle-size"
        )
      )
    : 24;
const TaskProgressBar = () => {
  const steps = [1, 2, 3, 4]; // Number of circles
  const totalTime = 60; // Total time in seconds
  const intervalTime = totalTime / steps.length; // Time per step

  const [currentTask, setCurrentTask] = useState(0);
  const [textFade, setTextFade] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState<number[]>(
    new Array(steps.length).fill(0)
  ); // Store progress per step

  useEffect(() => {
    if (progress[activeStep] >= 100) {
      if (activeStep < steps.length - 1) {
        setTimeout(() => {
          setTextFade(true); // Fade out before updating task
          setTimeout(() => {
            setCurrentTask(activeStep + 1);
            setTextFade(false); // Fade in new task
          }, 400);
        }, 200);

        setActiveStep((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTextFade(true);
          setTimeout(() => {
            setCurrentTask(0);
            setTextFade(false);
          }, 400);
        }, 200);

        setActiveStep(0);
        setProgress(new Array(steps.length).fill(0)); // Reset progress
      }
    }
  }, [progress, activeStep, steps.length]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const updatedProgress = [...prevProgress];
        if (updatedProgress[activeStep] < 100) {
          updatedProgress[activeStep] += 2; // Gradually fill border
        }
        return updatedProgress;
      });
    }, (intervalTime * 1000) / 50);

    return () => clearInterval(progressInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  return (
    <>
      <Container>
        <div className="flex flex-wrap items-center justify-center  mt-[320px] mx-4 md:mx-0 ">
          {steps.map((_, index) => {
            const radius = CIRCLE_SIZE / 2 - 4; // Adjust circle radius based on size
            const circumference = 2 * Math.PI * radius;
            const offset = circumference * ((100 - progress[index]) / 100);
            const strokeWidth = 2;
            const glowOpacity = Math.min(progress[index] / 100, 0.5);
            const glowBlur = Math.max((progress[index] / 100) * 12, 3);

            return (
              <div key={index} className="relative flex items-center">
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute rounded-full transition-all duration-300"
                    style={{
                      width: CIRCLE_SIZE,
                      height: CIRCLE_SIZE,
                      backgroundImage:
                        "linear-gradient(360deg, #16E390 0%, #3A4ADB 100%)",
                      filter: `blur(${glowBlur}px)`,
                      opacity: glowOpacity,
                    }}
                  />

                  <svg
                    width={CIRCLE_SIZE}
                    height={CIRCLE_SIZE}
                    viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
                    className="relative"
                  >
                    <circle
                      cx={CIRCLE_SIZE / 2}
                      cy={CIRCLE_SIZE / 2}
                      r={radius}
                      stroke="#202020"
                      strokeWidth={strokeWidth}
                      fill="none"
                    />
                    <circle
                      cx={CIRCLE_SIZE / 2}
                      cy={CIRCLE_SIZE / 2}
                      r={radius}
                      stroke="#16E390"
                      strokeWidth={strokeWidth}
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                  </svg>
                </div>

                {index < steps.length - 1 && (
                  <>
                    <div className=" hidden md:flex items-center -ml-0.5">
                      {[1, 2, 3, 4, 5, 6, 7].map((dash) => (
                        <div
                          key={dash}
                          className="h-1 w-[6px] sm:w-[8px] rounded-full transition-all duration-300 mx-1"
                          style={{
                            backgroundColor:
                              progress[index] >= 100 ? "#3A4ADB" : "#202020",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex md:hidden items-center -ml-0.5">
                      {[1, 2, 3, 4, 5].map((dash) => (
                        <div
                          key={dash}
                          className="h-1 w-[6px] sm:w-[8px] rounded-full transition-all duration-300 mx-1"
                          style={{
                            backgroundColor:
                              progress[index] >= 100 ? "#3A4ADB" : "#202020",
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center flex-col gap-4 mt-[64px] mx-4 md:mx-0 ">
          <span
            className={`text-[24px] md:text-[40px] font-esbuild font-medium  transition-opacity duration-500 ${
              textFade ? "opacity-0" : "opacity-100"
            }`}
          >
            {TASKS[currentTask].title}
          </span>

          <p
            className={`max-w-3xl text-center text-[16px] md:text-[14px] leading-[1.3] transition-opacity duration-500 tracking-[4%]  text-white ${
              textFade ? "opacity-0" : "opacity-100"
            }`}
          >
            {TASKS[currentTask].description}
          </p>
          <div className="mt-[40px]">
            <Button width="w-[190px]" text="Learn More" />
          </div>
        </div>
      </Container>
      {/* images */}
      <div className="relative " style={{ overflowX: "clip" }}>
        <div className="absolute  top-[-40px] left-[-10%] rounded-[80px] rotate-[45deg] opacity-[0.64] w-[100px] h-[200px]  z-10 bg-linear-(--image-gradient) blur-[78px] md:w-[400px] md:h-[300px] md:blur-[200px]" />
        <div className="absolute  top-[-40px] right-[-10%] rounded-[80px] rotate-[90deg] opacity-[0.64] w-[100px] h-[200px] z-10 bg-linear-(--image-gradient) blur-[78px] overflow-hidden md:w-[400px] md:h-[450px] md:blur-[200px] " />
      </div>
      <div className="flex flex-row justify-between pt-[40px] gap-[60px]">
        <Image
          src="/images/ai_agent1.png"
          alt="Right Image"
          width={660}
          height={430}
          className="w-[40%] sm:w-[40%]  object-contain"
          // className="absolute left-0 top-[34px] bottom-0 w-[650] max-w-none"
        />
        <Image
          src="/images/ai_agent.png"
          alt="Left Image"
          width={660}
          height={430}
          className=" sm:w-[40%] w-[40%] object-contain"
          // className="absolute  top-[34px] right-0 bottom-0 w-[650] max-w-none"
        />
      </div>
    </>
  );
};

export default TaskProgressBar;
