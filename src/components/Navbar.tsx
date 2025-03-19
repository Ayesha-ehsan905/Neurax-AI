import React from "react";
import LogoIcon from "./icon/LogoIcon";
import Container from "./Container";
import { GithubIcon, TelegramIcon, TwitterIcon } from "./icon";
export const NavMenu = [
  { id: "product", label: "Product" },
  { id: "pricing", label: "Solutions" },
  { id: "about", label: "Features" },
  { id: "contact", label: "Pricing" },
  { id: "contact", label: "Resources" },
];

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-radial-(--border-gradient) py-4 ">
        <Container>
          <span className="text-[14px] text-white  ">
            NeuraX AI processes millions of market signals per second for
            real-time trading insights. See how it compares to traditional
            platforms →
          </span>
        </Container>
      </div>
      <div className="h-[2px]  bg-linear-(--border-linear)" />
      <Container>
        <div className="mx-[80px]">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <LogoIcon />
              <div className="flex items-center gap-6 pl-12">
                {NavMenu.map((item) => (
                  <span
                    key={item.id}
                    className="text-[16px] text-lightGray font-normal hover:text-white  hover:cursor-pointer"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-4">
                <GithubIcon />
                <TwitterIcon />
                <TelegramIcon />
              </div>
              <button className="bg-palatinateBlue  px-6 py-2 rounded-full text-[14px] font-medium text-white hover:bg-royalBlue transition-colors duration-200 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
