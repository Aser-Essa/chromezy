import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function NavLists() {
  return (
    <div className="flex h-fit w-[456px] justify-between gap-20 text-nowrap font-inter text-sm text-[#ffffff99] max-lg:gap-12 max-md:w-full max-md:justify-center">
      <ul className="w-[max(160px,14.65vw)]">
        <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
          <p>Home</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>

        <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
          <p>About Us</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>

        <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
          <p>Career</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>

        <li className="flex items-center justify-between py-4">
          <p>Case Study</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>
        <li className="mt-2 flex items-center justify-between py-2.5">
          <p className="text-xl font-semibold text-white">Join the Team</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>
      </ul>
      <ul className="w-[max(160px,14.65vw)]">
        <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
          <p>AI</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>

        <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
          <p>MVP</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>

        <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
          <p>SaaS</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>

        <li className="flex items-center justify-between py-4">
          <p>E-commerce</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>
        <li className="mt-2 flex items-center justify-between py-2.5">
          <p className="text-xl font-semibold text-[#4380FF]">Work with us</p>
          <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
        </li>
      </ul>
    </div>
  );
}
