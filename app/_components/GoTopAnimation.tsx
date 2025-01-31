"use client";
import React from "react";
import { motion } from "motion/react";

type GoTopAnimationProps = {
  idx: number;
  startNumber: number;
  children: React.ReactNode;
  delay?: number;
};

export default function GoTopAnimation({
  idx,
  startNumber,
  delay,
  children,
}: GoTopAnimationProps) {
  return (
    <>
      <motion.div
        className="relative"
        initial={{ top: idx >= startNumber ? "50px" : "", opacity: 0 }}
        whileInView={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay }}
        viewport={{ amount: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
