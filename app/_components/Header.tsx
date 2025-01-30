import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import SideNavLinks from "./SideNavLinks";

function Header() {
  return (
    <div className="fixed left-0 top-0 z-[2000] flex h-16 w-screen items-center text-nowrap bg-[#0D101A] px-20 py-2 max-lg:px-10 max-sm:px-6">
      <div className="flex h-full w-full items-center gap-8 max-lg:gap-3 max-sm:gap-2">
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
        <div className="flex h-full items-center gap-2 max-sm:hidden">
          <FiSearch className="min-h-4 min-w-4 text-white" />
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full bg-transparent text-sm outline-none placeholder:text-xs placeholder:text-[rgb(255,255,255,60%)] max-[1140px]:hidden"
          />
        </div>
        <SideNavLinks />
        <NavLinks />
        <div className="ml-auto flex items-center gap-8 max-lg:gap-4">
          <Link href={""} className="text-xs font-medium">
            About Us
          </Link>
          <Link
            href={""}
            className="h-full w-[115px] text-nowrap rounded-[100px] bg-[#4380FF] px-5 py-2.5 text-sm font-medium max-lg:w-fit max-lg:px-2.5 max-lg:text-xs"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
