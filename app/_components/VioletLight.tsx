"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

type VioletLightType = {
  className: string;
  distance: [number, number];
};

export default function VioletLight({ className, distance }: VioletLightType) {
  const { scrollY } = useScroll();
  const opacityLight = useTransform(scrollY, distance, [0.4, 1]);

  return (
    <>
      <motion.div
        className={`absolute blur-[100px] max-md:h-full max-md:w-full ${className}`}
        style={{
          opacity: opacityLight,
          background:
            "radial-gradient( circle, #095dff 0%, #bd09ff47 30%, #bd09ff00 80%)",
        }}
      ></motion.div>
    </>
  );
}
