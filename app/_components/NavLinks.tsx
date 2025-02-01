"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavLinks() {
  const [hash, setHash] = useState("");

  function handleclickNav(nav: string) {
    setHash(nav);
  }

  useEffect(() => {}, [hash]);

  return (
    <ul className="flex h-full items-center gap-8 border-b border-[#ffffff1a] px-4 font-inter text-xs font-medium max-[1140px]:gap-6 max-[870px]:gap-4 max-[810px]:gap-3 max-md:hidden max-sm:hidden">
      <li
        className={`relative top-[1.5px] flex h-full items-center border-[#fff] ${hash === "Home" || hash === "" ? "active" : ""}`}
        onClick={() => handleclickNav("Home")}
      >
        <Link href={"#Home"}>Home</Link>
      </li>
      <li
        className={`relative top-[1.5px] flex h-full items-center ${hash === "ExploreAI" ? "active" : ""}`}
        onClick={() => handleclickNav("ExploreAI")}
      >
        <Link href={"#ExploreAI"}>Explore AI</Link>
      </li>
      <li
        className={`relative top-[1.5px] flex h-full items-center ${hash === "Services" ? "active" : ""}`}
        onClick={() => handleclickNav("Services")}
      >
        <Link href={"#Services"}>Services</Link>
      </li>
      <li
        className={`relative top-[1.5px] flex h-full items-center ${hash === "E-commerce" ? "active" : ""}`}
        onClick={() => handleclickNav("E-commerce")}
      >
        <Link href={""}>E-commerce</Link>
      </li>
      <li
        className={`relative top-[1.5px] flex h-full items-center ${hash === "Products" ? "active" : ""}`}
        onClick={() => handleclickNav("Products")}
      >
        <Link href={"#Products"}>Products</Link>
      </li>
      <li
        className={`relative top-[1.5px] flex h-full items-center ${hash === "Blogs" ? "active" : ""}`}
        onClick={() => handleclickNav("Blogs")}
      >
        <Link href={"#Blogs"}>Blogs</Link>
      </li>
    </ul>
  );
}

export default NavLinks;
