import React from "react";
import GoTopAnimation from "./GoTopAnimation";
import Image from "next/image";

export default function ContactUsInfo() {
  return (
    <>
      <GoTopAnimation idx={0} startNumber={0} delay={0.3}>
        <div className="relative mt-6 space-y-2">
          <p className="text-[40px] font-bold max-sm:text-[32px]">Contact Us</p>
          <p className="text-sm">
            Talk with us to know how we can make you a part of a thriving
            digital landscape
          </p>
        </div>
        <div className="mx-auto mt-6 h-[120px] w-full max-w-[420px] rounded-xl bg-[#5FAD8C] p-5 max-md:w-[135%] max-sm:w-full">
          <div className="flex items-center justify-between border-b border-[#0000001a] pb-4">
            <div className="flex items-center gap-2">
              <Image src={"/phone.png"} width={24} height={24} alt="mail" />
              <p className="text-xs">Phone</p>
            </div>
            <p className="font-semibold">+1 315 308 0901</p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              <Image src={"/mail.png"} width={24} height={24} alt="mail" />
              <p className="text-xs">Email</p>
            </div>
            <p className="font-semibold">sales@chromezy.com</p>
          </div>
        </div>
      </GoTopAnimation>
    </>
  );
}
