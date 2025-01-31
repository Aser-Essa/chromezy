"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useState } from "react";

function ScrollWhiteBall() {
  const { scrollY } = useScroll();
  const [distance, setDistance] = useState([3200, 3500]);
  const [topDistance, setTopDistance] = useState([4200, 3700]);
  const [leftDistance, setLeftDistance] = useState([-100, -285]);
  const [widthScroll, setWidthScroll] = useState([300, 650]);
  const [heightDistance, setHeightDistance] = useState([300, 650]);
  const [rotateScroll, setRotate] = useState([0, 90]);

  const top = useTransform(scrollY, distance, topDistance);
  const left = useTransform(scrollY, distance, leftDistance);
  const width = useTransform(scrollY, distance, widthScroll);
  const height = useTransform(scrollY, distance, heightDistance);
  const rotate = useTransform(scrollY, distance, rotateScroll);

  function handleScroll(e: number) {
    if (3515 >= e && e >= 2651) {
      setDistance([3000, 3550]);
      setTopDistance([4200, 3700]);
      setLeftDistance([-100, -285]);
      setWidthScroll([300, 650]);
      setHeightDistance([300, 650]);
      setRotate([0, 90]);
    }

    if (4180 >= e && e >= 3515) {
      setDistance([3640, 4150]);
      setTopDistance([3700, 4155]);
      setLeftDistance([-285, -690]);
      setWidthScroll([650, 960]);
      setHeightDistance([650, 960]);
      setRotate([90, -2]);
    }

    if (4810 >= e && e >= 4180) {
      setDistance([4150, 4790]);
      setTopDistance([4155, 4635]);
      setLeftDistance([-690, -20]);
      setWidthScroll([960, 340]);
      setHeightDistance([960, 340]);
      setRotate([-2, 90]);
    }
  }

  scrollY.on("change", handleScroll);

  return (
    <motion.div
      className="absolute z-[-2] mix-blend-plus-lighter max-lg:hidden"
      style={{
        top,
        left,
        width,
        height,
        transform: `rotate(${rotate.get()}deg)`,
      }}
    >
      <Image
        src={"/Glob.png"}
        fill
        alt="triangle"
        priority
        className="object-cover"
      />
    </motion.div>
  );
}

export default ScrollWhiteBall;
