"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function VioletLight() {
  const { scrollY } = useScroll();
  const opacityLight = useTransform(scrollY, [5100, 5250], [0.4, 1]);

  return (
    <>
      <motion.div
        className="absolute bottom-[-20%] left-0 z-[-1] h-[570px] w-[570px] blur-[100px] max-md:h-full max-md:w-full"
        style={{
          opacity: opacityLight,
          background:
            "radial-gradient( circle, #095dff 0%, #bd09ff47 25%, #bd09ff00 80%)",
        }}
      ></motion.div>
    </>
  );
}
