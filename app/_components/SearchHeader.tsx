import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchHeader() {
  return (
    <>
      <div className="flex h-full items-center gap-2 max-sm:hidden">
        <FiSearch className="min-h-4 min-w-4 text-white" />
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full bg-transparent text-sm outline-none placeholder:text-xs placeholder:text-[rgb(255,255,255,60%)] max-[1140px]:hidden"
        />
      </div>
    </>
  );
}
