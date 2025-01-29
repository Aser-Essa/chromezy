import React from "react";
import Image from "next/image";

export default function Details() {
  return (
    <>
      <div className="h-fit space-y-4">
        <div className="space-y-2">
          <Image src={"/logo.png"} width={200} height={41} alt="Logo" />
          <p className="w-[298px] pl-[46px] text-xs text-[#ffffff99]">
            Not just about software & Product development; we&apos;re your tech
            partners, crafting modern digital solutions for next-gen excellence!
          </p>
        </div>
        <div className="flex items-center space-x-3 pl-[46px] text-xs text-[#ffffffcc]">
          <p>Terms</p>
          <p>|</p>
          <p>Privacy</p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={"/bluephone.png"}
            width={20}
            height={20}
            alt="bluephone"
          />
          <p className="font-semibold">+1 315 308 0901</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src={"/bluemail.png"} width={20} height={20} alt="bluephone" />
          <p className="font-semibold">sales@chromezy.com</p>
        </div>
      </div>
    </>
  );
}
