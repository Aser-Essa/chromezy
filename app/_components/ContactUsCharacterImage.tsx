"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function ContactUsCharacterImage() {
  const { scrollY } = useScroll();

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

  return (
    <>
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
    </>
  );
}
