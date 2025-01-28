"use client";
import { motion, useScroll, useTransform } from "motion/react";

type HiddenTopAnimation = {
  children: React.ReactNode;
  distance: number[];
};

function HiddenTopAnimation({ children, distance }: HiddenTopAnimation) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, distance, [1, 0]);
  return (
    <>
      <motion.div style={{ opacity }}>{children}</motion.div>
    </>
  );
}

export default HiddenTopAnimation;
