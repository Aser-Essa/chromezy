"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function ScrollWhiteBall() {
  const { scrollY } = useScroll();

  const scrollRanges = [2651, 3515, 4180, 4810];
  const topValues = [4200, 3700, 4155, 4635];
  const leftValues = [-100, -285, -690, -20];
  const sizeValues = [300, 650, 960, 340];
  const rotateValues = [0, 90, -2, 90];

  const top = useTransform(scrollY, scrollRanges, topValues);
  const left = useTransform(scrollY, scrollRanges, leftValues);
  const size = useTransform(scrollY, scrollRanges, sizeValues);
  const rotate = useTransform(scrollY, scrollRanges, rotateValues);

  return (
    <motion.div
      className="absolute z-[-2] mix-blend-plus-lighter max-lg:hidden"
      style={{
        top,
        left,
        width: size,
        height: size,
        rotate,
      }}
    >
      <Image
        src="/Glob.png"
        fill
        alt="white ball"
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
