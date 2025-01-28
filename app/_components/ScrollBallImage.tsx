"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useState } from "react";

function ScrollBallImage() {
  const { scrollY } = useScroll();
  const [distance, setDistance] = useState([0, 731]);
  const [topDistance, setTopDistance] = useState([98, 1130]);
  const [rightDistance, setRightDistance] = useState([-20, 200]);
  const [widthScroll, setWidthScroll] = useState([350, 350]);
  const [heightDistance, setHeightDistance] = useState([350, 350]);
  const [blurState, setBlurState] = useState([0, 0]);

  const top = useTransform(scrollY, distance, topDistance);
  const right = useTransform(scrollY, distance, rightDistance);
  const width = useTransform(scrollY, distance, widthScroll);
  const height = useTransform(scrollY, distance, heightDistance);
  const blur = useTransform(scrollY, distance, blurState);

  function handleScroll(e: number) {
    if (e <= 731) {
      setDistance([0, 731]);
      setTopDistance([98, 1130]);
      setRightDistance([-20, 200]);
      setWidthScroll([350, 350]);
      setHeightDistance([350, 350]);
      setBlurState([0, 0]);
    }
    if (1123 >= e && e >= 731) {
      setDistance([751, 1123]);
      setTopDistance([1130, 1250]);
      setRightDistance([200, -17]);
      setWidthScroll([350, 669]);
      setHeightDistance([350, 669]);
      setBlurState([0, 0]);
    }
    if (1887 >= e && e >= 1123) {
      setDistance([1143, 1887]);
      setTopDistance([1250, 1730]);
      setRightDistance([-17, 97]);
      setWidthScroll([669, 418]);
      setHeightDistance([669, 418]);
      setBlurState([0, 10]);
    }
  }
  scrollY.on("change", handleScroll);

  return (
    <motion.div
      className="absolute z-[-1] max-sm:hidden"
      style={{ top, right, width, height, filter: `blur(${blur.get()}px)` }}
    >
      <Image
        src={"/ball.png"}
        fill
        alt="ball"
        priority
        className="object-cover"
        quality={100}
      />
    </motion.div>
  );
}

export default ScrollBallImage;
