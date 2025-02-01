import Image from "next/image";
import Link from "next/link";
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
            <Link
              href={"https://www.facebook.com/profile.php?id=100004553357437"}
              target="_blank"
            >
              <Image
                src={"/facebook.png"}
                width={24}
                height={24}
                alt="facebook"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/asser_essa_/"}
              target="_blank"
            >
              <Image
                src={"/instagram.png"}
                width={24}
                height={24}
                alt="instagram"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/asser-essa-a03407341/"}
              target="_blank"
            >
              <Image
                src={"/linkedin.png"}
                width={24}
                height={24}
                alt="linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
