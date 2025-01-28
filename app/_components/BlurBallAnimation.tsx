"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

function BlurBallAnimation() {
  const { scrollY } = useScroll();
  const top = useTransform(scrollY, [751, 1123], [0, -750]);
  const scale = useTransform(scrollY, [751, 1123], [1, 0.2]);
  return (
    <>
      <motion.div
        className="absolute right-0 z-[-1] blur-[6px] max-sm:hidden"
        style={{ top, scale }}
      >
        <Image src={"/ball.png"} width={639} height={639} alt="ball" priority />
      </motion.div>
    </>
  );
}

export default BlurBallAnimation;
