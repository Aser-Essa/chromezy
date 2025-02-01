"use client";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

function SideNavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 60) {
      handleClose();
    }
  };

  function handleclickNav() {
    handleClose();
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflowY = "auto";
  }, [setIsOpen]);

  return (
    <>
      <FaBars className="hidden w-6 max-sm:inline-block" onClick={handleOpen} />
      <>
        <div
          className="flying-menu fixed top-0 z-[1000000000000] h-full w-[92%] bg-[#00000033] transition-all"
          style={{ left: isOpen ? 0 : "-100%" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClickCapture={() => setIsOpen(true)}
        >
          <div className="absolute left-0 top-0 h-full w-full bg-[#1a1f32] p-6">
            <div className="flex items-center justify-between">
              <Link
                href={"/"}
                className="relative h-[26px] w-[128px] max-lg:h-5 max-lg:w-[100px]"
              >
                <Image
                  src={"/logo.png"}
                  fill
                  alt="icon"
                  priority
                  quality={100}
                  className="object-cover"
                />
              </Link>
              <div className="relative z-[100000]" onClick={handleClose}>
                <IoCloseOutline className="text-black-shade-4 h-6 w-6" />
              </div>
            </div>
            <div className="my-4 flex h-[46px] items-center gap-2 border-b border-[#ffffff6c] px-4 pl-0">
              <FiSearch className="min-h-4 min-w-4 text-[#ffffff99]" />
              <input
                type="text"
                placeholder="Search"
                className="placeholder:text-black-shade-4 h-full w-full bg-transparent placeholder:font-inter placeholder:text-sm focus:outline-none"
              />
            </div>
            <ul className="font-inter text-sm font-medium text-[#ffffff99]">
              <li>
                <Link
                  href={"#Home"}
                  className="flex items-center justify-between border-b border-[#ffffff0d] py-4"
                  onClick={handleclickNav}
                >
                  <p>Home</p>
                  <IoIosArrowForward className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href={"#ExploreAI"}
                  className="flex items-center justify-between border-b border-[#ffffff0d] py-4"
                  onClick={handleclickNav}
                >
                  <p>Explore AI</p>
                  <IoIosArrowForward className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href={"#Services"}
                  className="flex items-center justify-between border-b border-[#ffffff0d] py-4"
                  onClick={handleclickNav}
                >
                  <p>Services</p>
                  <IoIosArrowForward className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="flex items-center justify-between border-b border-[#ffffff0d] py-4"
                  onClick={handleclickNav}
                >
                  <p>E-commerce</p>
                  <IoIosArrowForward className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href={"#Products"}
                  className="flex items-center justify-between border-b border-[#ffffff0d] py-4"
                  onClick={handleclickNav}
                >
                  <p>Products</p>
                  <IoIosArrowForward className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href={"#Blogs"}
                  className="flex items-center justify-between py-4"
                  onClick={handleclickNav}
                >
                  <p>Blogs</p>
                  <IoIosArrowForward className="h-4 w-4" />
                </Link>
              </li>
            </ul>
            <div className="absolute bottom-6 flex items-center gap-4">
              <Image
                src={"/facebook.png"}
                width={30}
                height={30}
                alt="facebook"
              />
              <Image
                src={"/instagram.png"}
                width={30}
                height={30}
                alt="instagram"
              />
              <Image
                src={"/linkedin.png"}
                width={30}
                height={30}
                alt="linkedin"
              />
            </div>
          </div>
        </div>
        <div
          className="fixed inset-0 right-0 top-0 z-[10000] bg-[#00000052]"
          style={{
            display: isOpen ? "block" : "none",
          }}
          onClick={handleClose}
        ></div>
      </>
    </>
  );
}

export default SideNavLinks;
