import Image from "next/image";
import React from "react";
// AACFFE
export default function ContactUs() {
  return (
    <div className="min-h-[760px] w-full px-[60px] py-20">
      <div className="relative h-full w-full overflow-hidden rounded-[80px] bg-[#AACFFE]">
        <div className="relative h-[760px] w-[63%]">
          <Image
            src={"/ContactUsBG.png"}
            fill
            alt="ContactUs"
            className="object-cover"
          />
          <div className="relative top-[85px] mx-auto flex w-[60%] flex-col items-center justify-center space-y-6 p-4 text-center">
            <div className="relative h-[20.7vw] w-[20.85vw]">
              <Image
                src={"/character.png"}
                fill
                alt="ContactUsCharacter"
                className="object-cover"
              />
            </div>
            <div className="relative space-y-2">
              <p className="text-[40px] font-bold">Contact Us</p>
              <p className="text-sm">
                Talk with us to know how we can make you a part of a thriving
                digital landscape
              </p>
            </div>
            <div className="h-[120px] w-full max-w-[420px] rounded-xl bg-[#5FAD8C]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
