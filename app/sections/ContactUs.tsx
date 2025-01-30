import Image from "next/image";
import React from "react";
import ContactUsForm from "../_components/ContactUsForm";

export default function ContactUs() {
  return (
    <div className="min-h-[760px] w-full px-[60px] py-20 pb-[160px] max-md:px-6 max-sm:py-14">
      <div className="relative flex h-full w-full items-center overflow-hidden rounded-[80px] bg-[#AACFFE] max-md:flex-col max-md:rounded-[30px]">
        <div className="relative h-[760px] w-[70%] max-md:h-[450px] max-md:w-full">
          <Image
            src={"/ContactUsBG.png"}
            fill
            alt="ContactUs"
            className="object-cover"
          />
          <div className="relative top-[85px] mx-auto flex w-[75%] flex-col items-center justify-center space-y-6 p-4 text-center max-md:top-0 max-md:h-full">
            <div className="relative h-[max(120px,20.85vw)] w-[max(120px,20.85vw)]">
              <Image
                src={"/character.png"}
                fill
                alt="ContactUsCharacter"
                className="object-contain"
              />
            </div>
            <div className="relative space-y-2">
              <p className="text-[40px] font-bold max-sm:text-[32px]">
                Contact Us
              </p>
              <p className="text-sm">
                Talk with us to know how we can make you a part of a thriving
                digital landscape
              </p>
            </div>
            <div className="h-[120px] w-full max-w-[420px] rounded-xl bg-[#5FAD8C] p-5 max-md:w-[135%]">
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
          </div>
        </div>
        <div className="relative right-[50px] min-h-[638px] w-[35.35%] space-y-5 overflow-hidden rounded-[20px] bg-[#DBEBFF] px-10 py-[50px] max-[850px]:w-[40%] max-md:right-0 max-md:m-10 max-md:w-[86%] max-md:p-6 max-sm:mx-0">
          <p className="text-2xl font-semibold leading-5 text-[#141517]">
            Let&apos;s talk!
          </p>
          <ContactUsForm />
          <Image
            src={"/mailBG.png"}
            width={160}
            height={160}
            alt="mail"
            className="absolute right-[-52px] top-[-52px]"
          />
        </div>
      </div>
    </div>
  );
}
