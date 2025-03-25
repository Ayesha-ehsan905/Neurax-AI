"use client";

import React, { useState } from "react";
import LogoIcon from "./icon/LogoIcon";
import Container from "./Container";
import {
  GithubIcon,
  TelegramIcon,
  TwitterIcon,
  OpenMenuIcon,
  CloseMenuIcon,
} from "./icon";
import Button from "./sections/Button";
import MobileNavbar from "./MobileNavbar";
import { scrollToElement } from "@/utilis/functions";
export const NavMenu = [
  { id: "product", label: "Product" },
  { id: "solutions", label: "Solutions" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "resources", label: "Resources" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className=" hidden lg:flex justify-center items-center bg-radial-(--border-gradient) py-4 ">
        <Container>
          <span className="text-[14px] text-white">
            NeuraX AI processes millions of market signals per second for
            real-time trading insights. See how it compares to traditional
            platforms →
          </span>
        </Container>
      </div>
      <div className="hidden lg:block h-[2px]  bg-linear-(--border-linear) w-full" />
      <Container>
        <div className="mx-[20px] md:mx-[40px] lg:mx-[80px]">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <LogoIcon />

              <div className=" hidden lg:flex items-center gap-6 pl-4 lg:pl-12">
                {NavMenu.map((item) => (
                  <span
                    onClick={(e) => scrollToElement(e, item.id)}
                    key={item.id}
                    className="text-[16px] text-lightGray font-normal hover:text-white  hover:cursor-pointer"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="block m-0 lg:hidden">
              <div
                className={
                  " transition-opacity duration-[1500ms] cursor-pointer"
                }
                onClick={() => setShowMenu(!showMenu)}
              >
                {showMenu ? <CloseMenuIcon /> : <OpenMenuIcon />}
              </div>
              <MobileNavbar
                visible={showMenu}
                onDismissMobileMenu={() => setShowMenu(false)}
              />
            </div>
            <div className="hidden lg:flex gap-4">
              <div className="flex items-center gap-4">
                <GithubIcon />
                <TwitterIcon />
                <TelegramIcon />
              </div>
              <Button />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
