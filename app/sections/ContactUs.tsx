"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContactUsForm from "../_components/ContactUsForm";
import GoTopAnimation from "../_components/GoTopAnimation";
import { motion, useScroll, useTransform } from "motion/react";

export default function ContactUs() {
  const [opacityState, setOpacityState] = useState([1, 0.5]);
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [4550, 4750], [651, 760]);
  const top = useTransform(scrollY, [4550, 4750], [-90, -35]);
  const right = useTransform(scrollY, [4550, 4750], [-18, -42]);
  const heightMail = useTransform(scrollY, [4550, 4750], [130, 90]);
  const widthMail = useTransform(scrollY, [4550, 4750], [167, 125]);
  const bgColor = useTransform(scrollY, [4550, 4750], ["#AACFFE", "#DBEBFF"]);
  const opacity = useTransform(scrollY, [4550, 4760], opacityState);
  const overflow = useTransform(scrollY, [4750, 4752], ["", "hidden"]);

  const heightCharacter = useTransform(
    scrollY,
    [4600, 4800],
    ["max(120px,8vw)", "max(120px,20.85vw)"],
  );
  const widthCharacter = useTransform(
    scrollY,
    [4600, 4800],
    ["max(120px,8vw)", "max(120px,20.85vw)"],
  );
  const opacityCharacter = useTransform(scrollY, [4600, 4800], [0.3, 1]);
  const topCharacter = useTransform(scrollY, [4600, 4800], [180, 0]);

  const opacityLight = useTransform(scrollY, [5100, 5250], [0.4, 1]);

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
    <div className="relative">
      <motion.div
        className="absolute bottom-[-20%] left-0 z-[-1] h-[570px] w-[570px] blur-[100px] max-md:h-full max-md:w-full"
        style={{
          opacity: opacityLight,
          background:
            "radial-gradient( circle, #095dff 0%, #bd09ff47 25%, #bd09ff00 80%)",
        }}
      ></motion.div>

      <div className="min-h-[760px] w-full px-[60px] py-20 pb-[160px] max-md:px-6 max-sm:py-14">
        <div className="relative flex h-full w-full items-center rounded-[80px] bg-[#AACFFE] max-md:flex-col max-md:rounded-[30px]">
          <motion.div
            className="relative h-[760px] w-[70%] max-md:h-[450px] max-md:w-full"
            style={{ height }}
          >
            <Image
              src={"/ContactUsBG.png"}
              fill
              alt="ContactUs"
              className="rounded-l-[80px] object-cover max-md:rounded-[30px]"
            />
            <div className="relative top-[85px] mx-auto flex w-[75%] flex-col items-center justify-center p-4 text-center max-md:top-0 max-md:h-full">
              <motion.div
                className="relative h-[max(120px,20.85vw)] w-[max(120px,20.85vw)]"
                style={{
                  width: widthCharacter,
                  height: heightCharacter,
                  opacity: opacityCharacter,
                  top: topCharacter,
                }}
              >
                <Image
                  src={"/character.png"}
                  fill
                  alt="ContactUsCharacter"
                  className="object-contain"
                />
              </motion.div>
              <GoTopAnimation idx={0} startNumber={0} delay={0.3}>
                <div className="relative mt-6 space-y-2">
                  <p className="text-[40px] font-bold max-sm:text-[32px]">
                    Contact Us
                  </p>
                  <p className="text-sm">
                    Talk with us to know how we can make you a part of a
                    thriving digital landscape
                  </p>
                </div>
                <div className="mx-auto mt-6 h-[120px] w-full max-w-[420px] rounded-xl bg-[#5FAD8C] p-5 max-md:w-[135%] max-sm:w-full">
                  <div className="flex items-center justify-between border-b border-[#0000001a] pb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/phone.png"}
                        width={24}
                        height={24}
                        alt="mail"
                      />
                      <p className="text-xs">Phone</p>
                    </div>
                    <p className="font-semibold">+1 315 308 0901</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/mail.png"}
                        width={24}
                        height={24}
                        alt="mail"
                      />
                      <p className="text-xs">Email</p>
                    </div>
                    <p className="font-semibold">sales@chromezy.com</p>
                  </div>
                </div>
              </GoTopAnimation>
            </div>
          </motion.div>
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
        </div>
      </div>
    </div>
  );
}
