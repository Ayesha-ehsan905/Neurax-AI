import React from "react";
import Container from "./Container";
import { ADVANTAGES } from "@/utilis/constant";
import Button from "./sections/Button";

const AIAdvantages = () => {
  return (
    <Container>
      <div
        className="mt-[280px] mx-4  flex flex-col items-center justify-center"
        id="product"
      >
        <div className="flex justify-center flex-col items-center gap-4">
          <h1 className=" text-[24px] sm:text-[40px] font-medium font-esbuild text-center">
            The Ultimate AI Trading Advantage{" "}
          </h1>
          <p className="text-[16px] md:text-[14px] text-center font-normal ">
            Powered by next-generation machine learning
          </p>
        </div>
        <div className="px-0 sm:px-4 py-4 mt-[60px]">
          <div className="flex flex-col md:flex-row flex-wrap gap-[20px]">
            {ADVANTAGES.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-[12px] bg-blackDarker p-4  border border-darkCharcoal  overflow-hidden flex-1 max-w-[350x]  "
                >
                  <div className="flex flex-col gap-4 justify-between h-full w-full ">
                    <div>{item.icon}</div>
                    <div>
                      <h3 className="text-[18px] text-white font-semibold  leading-[120%]  tracking-[4%]">
                        {item.title}
                      </h3>
                    </div>
                    <p className=" text-[16px] md:text-[14px] font-normal leading-[120%] tracking-[4%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button text="Experience the NeuraX Difference" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AIAdvantages;
