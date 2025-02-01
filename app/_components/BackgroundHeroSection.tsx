"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

function BackgroundHeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 750], [1, 0]);

  return (
    <div className="overflow-hidden">
      <motion.div style={{ opacity }} className="lights transition-all">
        <div className="absolute left-[50%] top-[65%] z-[-200] h-[600px] w-[240px] translate-x-[-50%] translate-y-[-50%] rotate-[70deg] blur-[30px] max-sm:h-[200px]">
          <Image src={"/flower3.png"} fill alt="flower" priority />
        </div>
        <div
          className="absolute left-[50%] top-[-230px] z-[-1] h-[600px] w-[800px] translate-x-[-50%] overflow-hidden rounded-full blur-[120px] max-sm:w-full"
          style={{
            background:
              "radial-gradient( circle, #095dff 0%, #bd09ff3e 40%, #bd09ff00 80%)",
          }}
        ></div>
        <div
          className="absolute right-0 top-[485px] z-[-1] h-[461px] w-[461px] opacity-[30%] blur-[150px] max-sm:right-0 max-sm:w-full"
          style={{
            background: "linear-gradient(to bottom, #4D54E8 0%, #4D54E8 37%  )",
          }}
        ></div>
        <div
          className="absolute left-[-58px] top-[642px] z-[-1] h-[291px] w-[291px] opacity-[30%] blur-[90px] max-sm:hidden"
          style={{
            background: "linear-gradient(to bottom, #4D54E8 0%, #4D54E8 37%  )",
          }}
        ></div>

        <div
          className="absolute left-[-52px] top-[-129px] z-[-1] h-[291px] w-[291px] opacity-[80%] blur-[150px]"
          style={{
            background: "linear-gradient(to bottom, #1A00FF 100%)",
          }}
        ></div>

        <div className="absolute left-[-52px] top-[153px] z-[-1] h-[326px] w-[326px] bg-[#171817a8] opacity-[80%] blur-[400px] max-sm:hidden max-sm:w-full"></div>
      </motion.div>
    </div>
  );
}

export default BackgroundHeroSection;
