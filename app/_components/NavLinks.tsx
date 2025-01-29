import Link from "next/link";

function NavLinks() {
  return (
    <ul className="flex h-full items-center gap-8 border-b border-[#ffffff1a] px-4 font-inter text-xs font-medium max-[1140px]:gap-6 max-[870px]:gap-4 max-[810px]:gap-3 max-md:hidden max-sm:hidden">
      <li>
        <Link href={""}>Home</Link>
      </li>
      <li>
        <Link href={""}>Explore AI</Link>
      </li>
      <li>
        <Link href={""}>Services</Link>
      </li>
      <li>
        <Link href={""}>E-commerce</Link>
      </li>
      <li>
        <Link href={""}>Products</Link>
      </li>
      <li>
        <Link href={""}>Blogs</Link>
      </li>
    </ul>
  );
}

export default NavLinks;
