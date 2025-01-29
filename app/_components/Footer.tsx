import React from "react";
import Details from "./Details";
import NavLists from "./NavLists";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[468px] space-y-20 bg-[#080A12] px-[120px] pt-[64px]">
      <div className="flex h-[244px] items-center justify-between">
        <Details />
        <NavLists />
      </div>
      <div className="flex h-20 w-full items-center justify-between border-t border-[#ffffff0d] text-xs text-[#ffffff99]">
        <div className="flex items-center gap-3">
          <p>Copyright &copy; 2024</p>
          <p>|</p>
          <p>Chromezy, All Rights Reserved</p>
          <p>|</p>
          <p>
            Designed by <u>PairaLabs</u>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <p>Connect with us:</p>
          <div className="flex items-center gap-4">
            <Image
              src={"/facebook.png"}
              width={24}
              height={24}
              alt="facebook"
            />

            <Image
              src={"/instagram.png"}
              width={24}
              height={24}
              alt="facebook"
            />

            <Image
              src={"/linkedin.png"}
              width={24}
              height={24}
              alt="facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
