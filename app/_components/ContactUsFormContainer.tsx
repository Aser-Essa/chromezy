"use client";
import React, { useState } from "react";
import ContactUsForm from "../_components/ContactUsForm";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function ContactUsFormContainer() {
  const { scrollY } = useScroll();

  const [opacityState, setOpacityState] = useState([1, 0.5]);
  const top = useTransform(scrollY, [4550, 4750], [-90, -35]);
  const right = useTransform(scrollY, [4550, 4750], [-18, -42]);
  const heightMail = useTransform(scrollY, [4550, 4750], [130, 90]);
  const widthMail = useTransform(scrollY, [4550, 4750], [167, 125]);
  const bgColor = useTransform(scrollY, [4550, 4750], ["#AACFFE", "#DBEBFF"]);
  const opacity = useTransform(scrollY, [4550, 4760], opacityState);
  const overflow = useTransform(scrollY, [4750, 4752], ["", "hidden"]);

  function handleScroll(e: number) {
    if (e <= 4745) {
      setOpacityState([1, 0.5]);
    }
    if (e >= 4752) {
      setOpacityState([0.5, 1]);
    }
  }

  scrollY.on("change", handleScroll);

  return (
    <>
      <motion.div
        className="relative right-[50px] min-h-[638px] w-[35.35%] space-y-5 rounded-[20px] bg-[#DBEBFF] px-10 py-[50px] max-[850px]:w-[40%] max-md:right-0 max-md:m-10 max-md:w-[86%] max-md:p-6 max-sm:mx-0"
        style={{ overflow }}
      >
        <p className="text-2xl font-semibold leading-5 text-[#141517]">
          Let&apos;s talk!
        </p>
        <ContactUsForm />
        <motion.div
          className="absolute right-[-16px] top-[-90px] h-[130px] w-[167px]"
          style={{
            top,
            right,
            height: heightMail,
            width: widthMail,
            opacity,
          }}
        >
          <Image src={"/mailBG.png"} fill alt="mail" className="z-10" />
          <motion.div
            className="scroll-container absolute bottom-2 left-2 z-[2] h-[90%] w-[90%] bg-[#AACFFE]"
            style={{ backgroundColor: bgColor }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
