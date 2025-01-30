"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useState } from "react";

function ScrollTriangleImage() {
  const { scrollY } = useScroll();
  const [distance, setDistance] = useState([0, 731]);
  const [topDistance, setTopDistance] = useState([138, 843]);
  const [leftDistance, setLeftDistance] = useState([-390, -130]);
  const [widthScroll, setWidthScroll] = useState([669, 409]);
  const [heightDistance, setHeightDistance] = useState([669, 409]);
  const [blurState, setBlurState] = useState([10, 5]);

  const top = useTransform(scrollY, distance, topDistance);
  const left = useTransform(scrollY, distance, leftDistance);
  const width = useTransform(scrollY, distance, widthScroll);
  const height = useTransform(scrollY, distance, heightDistance);
  const blur = useTransform(scrollY, distance, blurState);

  function handleScroll(e: number) {
    if (e <= 731) {
      setDistance([0, 731]);
      setTopDistance([138, 843]);
      setLeftDistance([-390, -130]);
      setWidthScroll([669, 409]);
      setHeightDistance([669, 409]);
      setBlurState([10, 5]);
    }
    if (1123 >= e && e >= 731) {
      setDistance([751, 1123]);
      setTopDistance([843, 1300]);
      setLeftDistance([-130, -45]);
      setWidthScroll([409, 191]);
      setHeightDistance([409, 191]);
      setBlurState([5, 14]);
    }
    if (1887 >= e && e >= 1123) {
      setDistance([1143, 1887]);
      setTopDistance([1300, 2200]);
      setWidthScroll([191, 434]);
      setHeightDistance([191, 434]);
      setLeftDistance([-45, -115]);
      setBlurState([14, 7]);
    }

    if (2651 >= e && e >= 1887) {
      setDistance([1947, 2630]);
      setTopDistance([2200, 2640]);
      setLeftDistance([-115, -450]);
      setWidthScroll([434, 816]);
      setHeightDistance([434, 816]);
      setBlurState([7, 14]);
    }
  }

  scrollY.on("change", handleScroll);

  return (
    <motion.div
      className="absolute z-[-1] mix-blend-plus-lighter max-lg:hidden"
      style={{
        top,
        left,
        width,
        height,
        filter: `blur(${blur.get()}px)`,
      }}
    >
      <Image
        src={"/Triangle.png"}
        fill
        alt="triangle"
        priority
        className="object-cover"
      />
    </motion.div>
  );
}

export default ScrollTriangleImage;
