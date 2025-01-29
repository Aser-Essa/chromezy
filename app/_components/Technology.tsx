import Image from "next/image";
import React from "react";

type TechnologyProps = {
  image?: string;
  text: string;
};

export default function Technology({ image, text }: TechnologyProps) {
  return (
    <>
      <div className="flex h-9 items-center gap-[6px] rounded-lg border border-[#1314161a] bg-[#ffffff1a] py-2 pl-3 pr-4">
        {image && <Image src={`/${image}`} width={20} height={20} alt="Icon" />}
        <p className="font-inter text-sm font-semibold">{text}</p>
      </div>
    </>
  );
}
