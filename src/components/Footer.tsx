import React from "react";
import Container from "./Container";
import Button from "./sections/Button";
import { LogoWhite } from "./icon";
import { MENU_DATA } from "@/utilis/constant";
const Footer = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center gap-4  max-w-[1100px] mx-auto py-12">
        <div className=" mt-[160px] gap-4">
          <p className="text-[50px] font-medium leading-[130%] tracking-[4%] text-center text-white font-esbuild">
            Join The NeuraX AI Revolution Today{" "}
          </p>
          <p className="text-[14px] font-normal leading-[130%] tracking-[4%] text-center text-white">
            Whether you&apos;re a professional trader, investor, or crypto
            enthusiast, our technology ensures seamless, data-driven decision-
            making that maximizes profitability in any market condition.
          </p>
        </div>
        <div className="flex justify-center pt-6 gap-4">
          <Button text="Create Your Account" />
          <button className=" px-6  rounded-full  transition-all duration-300 group  bg-white hover:bg-gray hover:cursor-pointer">
            <span className="text-[14px] font-medium text-VampireBlack text-center">
              Contact Our Team
            </span>
          </button>
        </div>

        <div className=" flex flex-row  gap-[180px] mt-[120px] justify-around h-full">
          <div className="flex flex-col justify-between">
            <div>
              <LogoWhite />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[16px] font-normal text-white">
                Sign up for our newsletter
              </span>
              <div className="flex flex-row gap-4 justify-between  items-center w-[414px] h-[40px] rounded-full border border-[#FFFFFF3D]">
                <div className=" pl-4">Email Address</div>
                <div className="py-[4px] px-[6px]">
                  <Button text="Sumbit" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-[64px]">
            {MENU_DATA.map((section, index) => (
              <div key={index} className="flex flex-col gap-6">
                <span className="text-[16px] font-medium text-white font-esbuild">
                  {section.title}
                </span>
                {section.links.map((link, linkIndex) => (
                  <span
                    key={linkIndex}
                    className=" text-grayish text-[16px] hover:text-white hover:cursor-pointer "
                  >
                    {link}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[40px] border border-gray33" />
        <div className="mt-4 flex flex-row justify-between">
          <span className="text-[14px]">
            © 2025 NeuraX AI. All Rights Reserved
          </span>
          <div className="flex fex-row gap-4 cursor-default">
            <span className="text-[14px] text-white hover:text-caribbeanGreen ">
              Security
            </span>
            <span className="text-[14px] text-white hover:text-caribbeanGreen">
              Privacy Policy
            </span>
            <span className="text-[14px] text-white hover:text-caribbeanGreen">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
