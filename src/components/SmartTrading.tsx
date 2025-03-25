import React from "react";
import { SMART_TRADING } from "@/utilis/constant";
import Button from "./sections/Button";
import Container from "./Container";

const SmartTrading = () => {
  return (
    <Container>
      <div className="mt-[300px] mx-[16px] lg:mx-[200px]" id="product">
        <div className="flex justify-center flex-col items-center gap-4">
          <h1 className="text-[24px] font-medium  text-center font-esbuild md:text-[40px]">
            The Future of AI-Powered Crypto Trading is Here
          </h1>
          <p className="text-[16px] md:text-[14px] text-center font-normal">
            NeuraX AI leverages cutting-edge machine learning, predictive
            analytics, and real-time automation to optimize your trading
            strategy, enhance decision-making, and minimize risks in the
            volatile crypto market.
          </p>
        </div>
        <div className="max-w-6xl mx-0 mt-[60px] md:mx-auto md:p-4 ">
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            {SMART_TRADING.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-[12px] bg-blackDarker p-4  border border-darkCharcoal  overflow-hidden flex-1 max-w-[340x]  "
                >
                  <div className="flex flex-row gap-4 justify-between h-full ">
                    <div className="flex flex-col gap-4 h-full justify-between">
                      {item.svg}

                      <div className="flex items-center gap-2 flex-row">
                        <h3 className="text-[16px] text-white font-normal mb-1 max-w-[270px] tracking-[4%]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div>{item.icon}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button text="Start Trading Smarter" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SmartTrading;
