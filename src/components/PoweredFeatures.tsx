import React from "react";
import Container from "./Container";
import { FEATURES } from "@/utilis/constant";

const PoweredFeatures = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center mt-[300px] gap-4">
        <span className="text-[50px] font-medium">Powered Features</span>
        <span className="text-[14px] font-normal leading-[1.3] tracking-[4%]">
          Cutting-edge machine learning technology designed to transform your
          trading experience and maximize returns through intelligent automation
          and predictive insights.
        </span>
      </div>

      <div className="flex justify-center mt-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="w-[530px] bg-blackDarker text-white p-4 rounded-xl shadow-lg border border-darkCharcoal"
            >
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-4  w-[270px]">
                  <div className="bg-[#16E3901F] rounded-[40px] w-fit">
                    <span className="text-caribbeanGreen text-[12px] font-medium px-4 py-2">
                      {feature.tag}
                    </span>
                  </div>
                  <div className="flex flex-col h-full justify-between ">
                    <h3 className="text-[20px] font-semibold  leading-[120%]">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] text-white font-normal leading-[120%]  tracking-[4%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div>{feature.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PoweredFeatures;
