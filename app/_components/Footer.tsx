import React from "react";
import Details from "./Details";
import NavLists from "./NavLists";
import CopyWrites from "./CopyWrites";

export default function Footer() {
  return (
    <>
      <div className="h-[468px] bg-[#080A12] px-[120px] pt-[64px] max-lg:px-14 max-md:h-auto">
        <div className="flex h-[244px] items-center justify-between max-md:h-auto max-md:flex-col max-md:gap-12">
          <Details />
          <NavLists />
        </div>
        <CopyWrites />
      </div>
    </>
  );
}
