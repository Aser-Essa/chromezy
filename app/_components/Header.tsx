import NavLinks from "./NavLinks";
import SideNavLinks from "./SideNavLinks";
import SearchHeader from "./SearchHeader";
import Logo from "./Logo";
import HeaderBtns from "./HeaderBtns";

function Header() {
  return (
    <div className="fixed left-0 top-0 z-[2000] flex h-16 w-screen items-center text-nowrap bg-[#0D101A] px-20 py-2 max-lg:px-10 max-sm:px-6">
      <div className="flex h-full w-full items-center gap-8 max-lg:gap-3 max-sm:gap-2">
        <Logo />
        <SearchHeader />
        <SideNavLinks />
        <NavLinks />
        <HeaderBtns />
      </div>
    </div>
  );
}

export default Header;
