import Button from "./sections/Button";
import HeroSectionAnimation from "./sections/HeroSectionAnimation";

const HeroSection = () => {
  return (
    <HeroSectionAnimation>
      {/* Hero content */}
      <div className="absolute inset-x-0 pt-12 w-full px-4">
        <div className="mx-auto max-w-[800px]">
          <h1 className="text-[56px] text-center font-medium mb-4 ">
            The Future of AI-Powered Crypto Trading is Here
          </h1>
          <p className="leading-[100%] text-center text-[14px]">
            Precision Trading Assistant Driven by Advanced Machine Learning
          </p>
        </div>
        <div className="flex justify-center pt-6 gap-4">
          <Button />
          <Button />
        </div>
      </div>
    </HeroSectionAnimation>
  );
};

export default HeroSection;
