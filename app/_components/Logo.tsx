import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/#Home"}>
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
    </Link>
  );
}
