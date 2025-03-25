import React from "react";
import Container from "./Container";
import Button from "./sections/Button";
import { LogoWhite } from "./icon";
import { MENU_DATA } from "@/utilis/constant";
const Footer = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center gap-4 mx-4 md:mx-0  py-12">
          <div className=" flex flex-col mt-[160px] gap-4 max-w-[1100px] mx-auto">
            <p className="text-[24px] md:text-[40px] font-medium leading-[130%] tracking-[4%] text-center text-white font-esbuild">
              Join The NeuraX AI Revolution Today{" "}
            </p>
            <p className="text-[16px] md:text-[14px] font-normal leading-[130%] tracking-[4%] text-center text-white">
              Whether you&apos;re a professional trader, investor, or crypto
              enthusiast, our technology ensures seamless, data-driven decision-
              making that maximizes profitability in any market condition.
            </p>
          </div>
          <div className="flex justify-center md:flex-row flex-col pt-6 gap-4">
            <Button
              text="Create Your Account"
              width="w-full"
              className="h-[48px] md:h-[32px]"
            />
            <button className=" px-6 py-3 md:py-0 rounded-full  transition-all duration-300 group  bg-white hover:bg-gray hover:cursor-pointer">
              <span className="text-[14px] font-medium text-VampireBlack text-center">
                Contact Our Team
              </span>
            </button>
          </div>
        </div>
      </Container>

      <div className="lg:bg-radial-(--footer-gradient)">
        <Container>
          <div className="max-w-[1100px] flex flex-col justify-center mx-auto">
            <div className=" flex flex-col md:flex-row  gap-[180px] mt-[120px] justify-around h-full px-4 md:px-0 ">
              <div className="flex flex-col justify-start  md:justify-between">
                <div className="flex justify-center md:justify-start mb-8 md:mb-0">
                  <LogoWhite />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[16px] font-normal text-white">
                    Sign up for our newsletter
                  </span>
                  <div className="flex flex-row gap-4 justify-between  items-center flex-1 max-w-[414px] h-[40px] rounded-full border border-[#FFFFFF3D]">
                    <div className=" pl-4">Email Address</div>
                    <div className="py-[4px] px-[6px]">
                      <Button text="Sumbit" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-row gap-[64px] flex-wrap px-4 md:px-0">
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
            <div className="mt-4 flex flex-col justify-center items-center gap-[28px] md:flex-row md:justify-between md:items-stretch">
              <span className="text-[14px]">
                © 2025 NeuraX AI. All Rights Reserved
              </span>
              <div className="flex flex-row gap-4 cursor-default">
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
      </div>
    </>
  );
};

export default Footer;
