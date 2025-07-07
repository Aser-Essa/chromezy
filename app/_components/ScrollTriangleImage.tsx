"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function ScrollTriangleImage() {
  const { scrollY } = useScroll();

  const scrollRanges = [0, 731, 1123, 1887, 2651, 3515];
  const topValues = [138, 843, 1300, 2200, 2640, 3400];
  const leftValues = [-390, -130, -45, -115, -450, -450];
  const sizeValues = [669, 409, 191, 434, 816, 816];
  const blurValues = [10, 5, 14, 7, 14, 14];
  const opacityValues = [1, 1, 1, 1, 1, 0];

  const top = useTransform(scrollY, scrollRanges, topValues);
  const left = useTransform(scrollY, scrollRanges, leftValues);
  const size = useTransform(scrollY, scrollRanges, sizeValues);
  const blur = useTransform(scrollY, scrollRanges, blurValues);
  const opacity = useTransform(scrollY, scrollRanges, opacityValues);

  return (
    <motion.div
      className="absolute z-[-1] mix-blend-plus-lighter max-lg:hidden"
      style={{
        top,
        left,
        width: size,
        height: size,
        filter: useTransform(blur, (b) => `blur(${b}px)`),
        opacity,
      }}
    >
      <Image
        src="/Triangle.png"
        fill
        alt="triangle"
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
