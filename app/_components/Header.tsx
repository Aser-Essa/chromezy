import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import NavLinks from "./NavLinks";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed left-0 top-0 z-[1000000] flex h-16 w-screen items-center bg-[#0D101A] px-20 py-2 max-sm:px-5">
      <div className="flex h-full w-full items-center gap-8">
        <Image src={"/logo.png"} width={128} height={26} alt="icon" priority />
        <div className="flex h-full items-center gap-2 max-sm:hidden">
          <FiSearch className="h-4 w-4 text-white" />
          <input
            type="text"
            placeholder="Search"
            className="h-full bg-transparent text-sm outline-none placeholder:text-xs placeholder:text-[rgb(255,255,255,60%)]"
          />
        </div>
        <NavLinks />
        <div className="ml-auto flex items-center gap-8">
          <Link href={""} className="text-xs font-medium">
            About Us
          </Link>
          <Link
            href={""}
            className="h-full w-[115px] text-nowrap rounded-[100px] bg-[#4380FF] px-5 py-2.5 text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
