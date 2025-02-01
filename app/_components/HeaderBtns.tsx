import Link from "next/link";
import React from "react";

export default function HeaderBtns() {
  return (
    <>
      <div className="ml-auto flex items-center gap-8 max-lg:gap-4">
        <Link href={""} className="text-xs font-medium">
          About Us
        </Link>
        <Link
          href={"#ContactUS"}
          className="h-full w-[115px] text-nowrap rounded-[100px] bg-[#4380FF] px-5 py-2.5 text-sm font-medium max-lg:w-fit max-lg:px-2.5 max-lg:text-xs"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}
