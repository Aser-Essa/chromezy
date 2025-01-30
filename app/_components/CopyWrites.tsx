import Image from "next/image";
import React from "react";

export default function CopyWrites() {
  return (
    <>
      <div className="mt-20 flex h-20 w-full items-center justify-between text-nowrap border-t border-[#ffffff0d] text-xs text-[#ffffff99] max-lg:h-auto max-lg:flex-col max-lg:justify-center max-lg:gap-5 max-md:mt-12 max-md:py-4 max-sm:mb-1">
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
    </>
  );
}
