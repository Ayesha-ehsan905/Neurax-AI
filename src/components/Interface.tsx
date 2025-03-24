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
        <div className=" flex flex-row  pt-4 justify-between">
          <div className="pl-[80px] py-[80px]">
            <div className="flex flex-col justify-center w-[430px]  gap-4">
              <span className="text-[40px] text-white font-esbuild font-medium">
                Intuitive Interface, Powerful Intelligence
              </span>
              <span className=" leading-[130%] text-[14px] text-white tracking-[4%]">
                Our streamlined dashboard brings together all NeuraX AI features
                in one intuitive interface, making advanced trading accessible
                to everyone from beginners to professional traders.
              </span>
            </div>
            <button className=" w-[160px]  mt-6 py-[9px] rounded-full  bg-caribbeanGreen cursor-pointer">
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
