import React from "react";
import Container from "./Container";
import { AIInterfaceIcon, PlayIcon } from "./icon";

const Interface = () => {
  return (
    // /images/chat_ai.png
    <div
      className="bg-[url('/images/bg-img.png')] bg-no-repeat bg-cover bg-center "
      id="resources"
    >
      <Container>
        <div className=" flex flex-row  pt-4  justify-center lg:justify-between">
          <div className="pl-[16px] pr-[16px] md:pl-[80px]  py-[80px]">
            <div className="flex flex-col justify-center max-w-[430px] flex-1  gap-4">
              <span className="text-[20px] md:text-[40px] text-white font-esbuild font-medium text-center md:text-left">
                Intuitive Interface, Powerful Intelligence
              </span>
              <span className=" leading-[130%] text-[16px] md:text-[14px] text-white tracking-[4%] text-center md:text-left">
                Our streamlined dashboard brings together all NeuraX AI features
                in one intuitive interface, making advanced trading accessible
                to everyone from beginners to professional traders.
              </span>
            </div>
            <button className=" w-[160px]  mt-6 py-[9px] rounded-full  bg-caribbeanGreen cursor-pointer  mx-auto md:mx-0 flex justify-center">
              <div className="flex flex-row justify-center items-center  gap-2 ">
                <PlayIcon />
                <span className="text-[14px] font-medium text-VampireBlack">
                  Demo
                </span>
              </div>
            </button>
          </div>
          <AIInterfaceIcon />
        </div>
      </Container>
    </div>
  );
};

export default Interface;
