"use client";
import React, { useState, useEffect } from "react";
import { NavMenu } from "./Navbar";
import Button from "./sections/Button";
import { scrollToElement } from "@/utilis/functions";

interface MobileMenuProps {
  visible?: boolean;
  onDismissMobileMenu: () => void;
}

const MobileNavbar = ({ visible, onDismissMobileMenu }: MobileMenuProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10); // Start animation after render
    } else {
      setIsAnimating(false);
      document.body.style.overflow = "";
      setTimeout(() => setShouldRender(false), 500); // Matches animation duration
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isAnimating ? "opacity-50" : "opacity-0"
        }`}
        onClick={onDismissMobileMenu}
      ></div>

      {/* Menu Container */}
      <div
        className={`bg-VampireBlack border border-darkCharcoal backdrop-blur-[80px] flex flex-col justify-between p-5 w-[90%]  h-[80%] rounded-2xl shadow-lg transform transition-transform duration-500 ${
          isAnimating
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-5 items-center mb-5 mt-6">
          {NavMenu.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.id}`}
              className="hover:text-caribbeanGreen transition"
              onClick={(e) => {
                onDismissMobileMenu();
                scrollToElement(e, menu.id);
              }}
            >
              {menu.label}
            </a>
          ))}
        </nav>
        <Button text="Get Started" width="w-full" />
      </div>
    </div>
  );
};

export default MobileNavbar;
