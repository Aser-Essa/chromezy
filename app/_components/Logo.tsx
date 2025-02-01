import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <>
      <div className="relative h-[26px] w-[128px] max-lg:h-5 max-lg:w-[100px]">
        <Image
          src={"/logo.png"}
          fill
          alt="icon"
          priority
          quality={100}
          className="object-cover"
        />
      </div>
    </>
  );
}
