import { TOKENOMICS_DATA } from "@/utilis/constant";
import Container from "./Container";

const Tokenomics = () => {
  return (
    <Container>
      <div
        className="flex flex-col items-center justify-center mt-[280px] gap-4 mx-4"
        id="solutions"
      >
        <span className="text-[24px] md:text-[40px] font-medium text-center font-esbuild">
          Tokenomics
        </span>
        <span className="text-[14px] font-normal leading-[130%] tracking-[4%] text-center text-white">
          Powering AI-driven crypto trading with efficient token utility and
          sustainable growth
        </span>
      </div>

      <div className="flex justify-center mt-[64px] mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-6">
          {TOKENOMICS_DATA.map((tokenomics, index) => (
            <div
              key={index}
              className="max-w-[530px] flex-1 bg-blackDarker text-white p-4 rounded-xl shadow-lg border border-darkCharcoal"
            >
              <div className="flex flex-col gap-4 ">
                <div>{tokenomics.icon}</div>
                <h3 className="text-[18px] text-white font-semibold  leading-[120%]">
                  {tokenomics.title}
                </h3>
                <p className="text-[14px] text-white font-normal leading-[120%]  tracking-[4%]">
                  {tokenomics.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Tokenomics;
