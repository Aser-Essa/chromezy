"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function ScrollBallImage() {
  const { scrollY } = useScroll();

  const scrollRanges = [0, 731, 1123, 1887, 2651, 3515, 4500, 5200];
  const topValues = [98, 1130, 1250, 1730, 2640, 3550, 4970, 5400];
  const rightValues = [-20, 200, -17, 97, -17, -17, 545, 780];
  const sizeValues = [350, 350, 669, 418, 639, 639, 350, 350];
  const blurValues = [0, 0, 0, 10, 15, 40, 10, 35];
  const opacityValues = [1, 1, 1, 1, 1, 0.25, 1, 0.6];

  const top = useTransform(scrollY, scrollRanges, topValues);
  const right = useTransform(scrollY, scrollRanges, rightValues);
  const size = useTransform(scrollY, scrollRanges, sizeValues);
  const blur = useTransform(scrollY, scrollRanges, blurValues);
  const opacity = useTransform(scrollY, scrollRanges, opacityValues);

  return (
    <motion.div
      className="absolute z-[-1] max-lg:hidden"
      style={{
        top,
        right,
        width: size,
        height: size,
        filter: useTransform(blur, (b) => `blur(${b}px)`),
        opacity,
      }}
    >
      <Image
        src="/ball.png"
        fill
        alt="ball"
        priority
        className="object-cover"
        quality={100}
      />
    </motion.div>
  );
}
