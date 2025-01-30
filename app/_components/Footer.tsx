import React from "react";
import Details from "./Details";
import NavLists from "./NavLists";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[468px] space-y-20 bg-[#080A12] px-[120px] pt-[64px] max-lg:px-14 max-md:h-auto max-md:space-y-12">
      <div className="flex h-[244px] items-center justify-between max-md:h-auto max-md:flex-col max-md:gap-12">
        <Details />
        <NavLists />
      </div>
      <div className="flex h-20 w-full items-center justify-between text-nowrap border-t border-[#ffffff0d] text-xs text-[#ffffff99] max-lg:h-auto max-lg:flex-col max-lg:justify-center max-lg:gap-5 max-md:py-4">
        <div className="flex items-center gap-3 max-sm:flex-col">
          <p>Copyright &copy; 2024</p>
          <p className="max-sm:hidden">|</p>
          <p>Chromezy, All Rights Reserved</p>
          <p className="max-sm:hidden">|</p>
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
              alt="instagram"
            />

            <Image
              src={"/linkedin.png"}
              width={24}
              height={24}
              alt="linkedin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
