import React from "react";
import Image from "next/image";
import VioletLight from "../_components/VioletLight";
import ContactUsFormContainer from "../_components/ContactUsFormContainer";
import ContactUsInfoContainer from "../_components/ContactUsInfoContainer";
import ContactUsCharacterImage from "../_components/ContactUsCharacterImage";
import ContactUsInfo from "../_components/ContactUsInfo";

export default function ContactUs() {
  return (
    <div className="relative">
      <VioletLight />
      <div className="min-h-[760px] w-full px-[60px] py-20 pb-[160px] max-md:px-6 max-sm:py-14">
        <div className="relative flex h-full w-full items-center rounded-[80px] bg-[#AACFFE] max-md:flex-col max-md:rounded-[30px]">
          <ContactUsInfoContainer>
            <>
              <Image
                src={"/ContactUsBG.png"}
                fill
                alt="ContactUs"
                className="rounded-l-[80px] object-cover max-md:rounded-[30px]"
              />
              <div className="relative top-[85px] mx-auto flex w-[75%] flex-col items-center justify-center p-4 text-center max-md:top-0 max-md:h-full">
                <ContactUsCharacterImage />
                <ContactUsInfo />
              </div>
            </>
          </ContactUsInfoContainer>
          <ContactUsFormContainer />
        </div>
      </div>
    </div>
  );
}
