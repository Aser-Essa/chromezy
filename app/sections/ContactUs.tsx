import Image from "next/image";
import React from "react";
import ContactUsForm from "../_components/ContactUsForm";

export default function ContactUs() {
  return (
    <div className="min-h-[760px] w-full px-[60px] py-20 pb-[160px]">
      <div className="relative flex h-full w-full items-center overflow-hidden rounded-[80px] bg-[#AACFFE]">
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
            <div className="h-[120px] w-full max-w-[420px] rounded-xl bg-[#5FAD8C] p-5">
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
        <div className="absolute right-[60px] top-[50%] min-h-[638px] w-[35.35%] translate-y-[-50%] space-y-5 overflow-hidden rounded-[20px] bg-[#DBEBFF] px-10 py-[50px]">
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
