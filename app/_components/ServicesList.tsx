"use client";
import React, { useEffect, useState } from "react";
import ServicesField from "../_components/ServicesField";
import { ServicesData } from "../_lib/Data";
import GoTopAnimation from "../_components/GoTopAnimation";
import { motion, useScroll, useTransform } from "motion/react";

export default function ServicesList() {
  const { scrollY } = useScroll();
  const gap = useTransform(scrollY, [3500, 4250], [40, 0]);
  const [width, setWidth] = useState(0);
  const [gapWidth, setgapWidth] = useState(40);
  const animation = width >= 1300 ? { gap: gapWidth } : {};

  function handleRefreshValues() {
    setgapWidth(gap.get());
  }

  scrollY.on("change", handleRefreshValues);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWidth(window.innerWidth),
    );
  }, []);

  return (
    <>
      <motion.div
        className="flex w-[51%] flex-col gap-10 max-lg:w-full"
        style={animation}
      >
        {ServicesData.map((tech, idx) => (
          <GoTopAnimation key={idx} idx={idx} startNumber={0}>
            <ServicesField
              title={tech.title}
              Services={tech.Services}
              idx={idx + 1}
            />
          </GoTopAnimation>
        ))}
      </motion.div>
    </>
  );
}
