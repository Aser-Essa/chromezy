"use client";
import Image from "next/image";
import React, { useState } from "react";
import TechnologyField from "../_components/TechnologyField";
import { ServicesData } from "../_lib/Data";
import GoTopAnimation from "../_components/GoTopAnimation";
import { motion, useScroll, useTransform } from "motion/react";

export default function Services() {
  const { scrollY } = useScroll();
  const [gapWidth, setgapWidth] = useState(40);
  const [paddingBlockoffset, setpaddingBlockOffset] = useState(120);

  const gap = useTransform(scrollY, [3500, 4250], [40, 0]);
  const paddingBlock = useTransform(scrollY, [3500, 4250], [120, 10]);
  const height = useTransform(scrollY, [3500, 4250], [859, 550]);
  const opacity = useTransform(scrollY, [3500, 4250], [1, 0.35]);

  function handleRefreshValues() {
    setgapWidth(gap.get());
    setpaddingBlockOffset(paddingBlock.get());
  }

  scrollY.on("change", handleRefreshValues);

  return (
    <div className="flex flex-wrap items-center gap-20 px-20 py-[60px] max-[1050px]:gap-10 max-lg:gap-20 max-md:px-6 max-sm:py-14">
      <motion.div
        className="w-[40%] overflow-hidden rounded-[80px] bg-gradient-to-b from-[#282e6c33] to-[#bdd5f433] px-10 backdrop-blur-[30px] max-lg:h-[500px] max-lg:w-full max-lg:p-10 max-md:rounded-[30px]"
        style={{ height, paddingBlock: `${paddingBlockoffset}px`, opacity }}
      >
        <p className="w-[85%] text-[clamp(24px,3vw,40px)] font-semibold max-sm:w-full">
          Innovative Services Keeping Us Ahead
        </p>
        <p className="mt-5 text-[#ffffffcc]">
          Discover the impact of bespoke digital solutions tailored precisely to
          your business&apos;s distinct requirements.
        </p>
        <div className="relative aspect-square w-[clamp(200px,25vw,376px)] max-lg:mx-auto">
          <Image
            src={"/colored circle.png"}
            fill
            alt="colored circle"
            className="mix-blend-exclusion"
          />
        </div>
      </motion.div>
      <motion.div
        className="flex w-[51%] flex-col gap-10 max-lg:w-full"
        style={{ gap: gapWidth }}
      >
        {ServicesData.map((tech, idx) => (
          <GoTopAnimation key={idx} idx={idx} startNumber={0}>
            <TechnologyField
              title={tech.title}
              Services={tech.Services}
              idx={idx + 1}
            />
          </GoTopAnimation>
        ))}
      </motion.div>
    </div>
  );
}
