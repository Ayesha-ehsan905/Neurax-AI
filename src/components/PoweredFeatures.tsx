import React from "react";
import Container from "./Container";
import { FEATURES } from "@/utilis/constant";

const PoweredFeatures = () => {
  return (
    <Container>
      <div
        className="flex flex-col items-center justify-center mt-[300px] gap-4 mx-4 sm:mx-6"
        id="features"
      >
        <span className="text-[24px] font-medium font-esbuild text-center md:text-[40px]">
          AI-Powered Features
        </span>
        <span className="text-[16px] md:text-[14px] font-normal leading-[1.3] tracking-[4%] text-center">
          Cutting-edge machine learning technology designed to transform your
          trading experience and maximize returns through intelligent automation
          and predictive insights.
        </span>
      </div>

      <div className="flex justify-center mt-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="w-[310px] xs:w-[370px] sm:w-[530px] bg-blackDarker text-white p-4 rounded-xl shadow-lg border border-darkCharcoal"
            >
              <div className="flex flex-row gap-4 h-full justify-center items-center sm:justify-start basis-1/2  sm:items-stretch">
                <div className="flex flex-col gap-4 w-full sm:w-[270px] justify-center items-center sm:justify-normal sm:items-stretch">
                  <div className="bg-[#16E3901F] rounded-[40px] w-fit">
                    <span className="text-caribbeanGreen text-[12px] font-medium px-4 py-2">
                      {feature.tag}
                    </span>
                  </div>
                  <div className="flex flex-col h-full justify-between gap-4 sm:gap-0">
                    <h3 className="text-[16px] md:text-[20px] font-semibold  leading-[120%] text-center sm:text-left">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] md:text-[14px] text-white font-normal leading-[120%]  tracking-[4%] text-center sm:text-left max-w-[700px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block basis-1/2">{feature.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PoweredFeatures;
