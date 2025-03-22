import Button from "./sections/Button";
import HeroSectionAnimation from "./sections/HeroSectionAnimation";
import Image from "next/image";

const HeroSection = () => {
  return (
    <HeroSectionAnimation>
      {/* Hero content */}
      <div className="absolute inset-x-0 pt-12 w-full px-4">
        <div className="mx-auto max-w-[800px]">
          <h1 className="text-[56px] text-center font-medium mb-4 font-esbuild text-white">
            The Future of AI-Powered Crypto Trading is Here
          </h1>
          <p className="leading-[100%] text-center text-[14px] text-white">
            Precision Trading Assistant Driven by Advanced Machine Learning
          </p>
        </div>
        <div className="flex justify-center pt-6 gap-4">
          <Button width="160px" />
          <button className=" px-6  rounded-full  transition-all duration-300 group bg-white hover:bg-gray hover:cursor-pointer">
            <span className="text-[14px] font-medium text-VampireBlack">
              Explore Features
            </span>
          </button>
        </div>
        <div className="flex justify-center mt-16 gap-4">
          <Image
            src="/images/chat_ai.png"
            alt="hero-image"
            width={505}
            height={463}
            className="h-[463px] w-[525px]" // Tailwind ensures it stays 450px
            // style={{ height: "463px", width: "525px !important" }} // Ensure height in inline styles as fallback
          />
        </div>
      </div>
    </HeroSectionAnimation>
  );
};

export default HeroSection;
