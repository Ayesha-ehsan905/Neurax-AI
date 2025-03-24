"use client";

import { TASKS } from "@/utilis/constant";
import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./sections/Button";
import Image from "next/image";

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
        <div className="flex flex-wrap items-center justify-center mt-[320px]">
          {steps.map((_, index) => {
            const radius = 16;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference * ((100 - progress[index]) / 100);
            const circleSize = "w-10 h-10 sm:w-12 sm:h-12";
            const strokeWidth = 4;
            const glowOpacity = Math.min(progress[index] / 100, 0.5);
            const glowBlur = Math.max((progress[index] / 100) * 12, 3);
            const glowSize = "w-10 h-10 sm:w-12 sm:h-12";

            return (
              <div key={index} className="relative flex items-center">
                <div className="relative flex items-center justify-center">
                  <div
                    className={`absolute rounded-full transition-all duration-300 ${glowSize}`}
                    style={{
                      backgroundImage:
                        "linear-gradient(360deg, #16E390 0%, #3A4ADB 100%)",
                      filter: `blur(${glowBlur}px)`,
                      opacity: glowOpacity,
                    }}
                  />

                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className={`relative ${circleSize}`}
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r={radius}
                      stroke="#202020"
                      strokeWidth={strokeWidth}
                      fill="none"
                    />
                    <circle
                      cx="20"
                      cy="20"
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
                  <div className="flex items-center -ml-0.5">
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
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center flex-col mt-[64px]">
          <span
            className={`text-[40px] font-esbuild font-medium mb-4 transition-opacity duration-500 ${
              textFade ? "opacity-0" : "opacity-100"
            }`}
          >
            {TASKS[currentTask].title}
          </span>

          <p
            className={`max-w-3xl text-center text-[14px] leading-[1.3] transition-opacity duration-500 tracking-[4%]  text-white ${
              textFade ? "opacity-0" : "opacity-100"
            }`}
          >
            {TASKS[currentTask].description}
          </p>
          <div className="mt-[40px]">
            <Button width="190px" text="Learn More" />
          </div>
        </div>
      </Container>
      {/* images */}
      <div className="relative ">
        <div className="absolute  top-[-40px] left-[-8%] rounded-[80px] rotate-[45deg] opacity-[0.64] w-[400px] h-[300px] z-10 bg-linear-(--image-gradient) blur-[200px]" />
        <div className="absolute right-[-8%]  top-[-40px] w-[400px]  rounded-[80px] h-[450px] rotate-[90deg] opacity-[0.64] z-10 bg-linear-(--image-gradient) blur-[200px] overflow-hidden" />
      </div>
      <div className="flex flex-row justify-between pt-[40px]">
        <Image
          src="/images/ai_agent1.png"
          alt="Right Image"
          width={660}
          height={510}
          className="max-w-full sm:w-[40%] w-[80%] object-contain"
          // className="absolute left-0 top-[34px] bottom-0 w-[650] max-w-none"
        />
        <Image
          src="/images/ai_agent.png"
          alt="Left Image"
          width={660}
          height={500}
          className="max-w-full sm:w-[40%] w-[80%] object-contain"
          // className="absolute  top-[34px] right-0 bottom-0 w-[650] max-w-none"
        />
      </div>
    </>
  );
};

export default TaskProgressBar;
