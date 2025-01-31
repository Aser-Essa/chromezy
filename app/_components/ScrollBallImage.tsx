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
  const [opacityState, setOpacityState] = useState([1, 1]);

  const top = useTransform(scrollY, distance, topDistance);
  const right = useTransform(scrollY, distance, rightDistance);
  const width = useTransform(scrollY, distance, widthScroll);
  const height = useTransform(scrollY, distance, heightDistance);
  const blur = useTransform(scrollY, distance, blurState);
  const opacity = useTransform(scrollY, distance, opacityState);

  function handleScroll(e: number) {
    if (e <= 731) {
      setDistance([0, 731]);
      setTopDistance([98, 1130]);
      setRightDistance([-20, 200]);
      setWidthScroll([350, 350]);
      setHeightDistance([350, 350]);
      setBlurState([0, 0]);
      setOpacityState([1, 1]);
    }
    if (1123 >= e && e >= 731) {
      setDistance([751, 1123]);
      setTopDistance([1130, 1250]);
      setRightDistance([200, -17]);
      setWidthScroll([350, 669]);
      setHeightDistance([350, 669]);
      setBlurState([0, 0]);
      setOpacityState([1, 1]);
    }
    if (1887 >= e && e >= 1123) {
      setDistance([1143, 1887]);
      setTopDistance([1250, 1730]);
      setRightDistance([-17, 97]);
      setWidthScroll([669, 418]);
      setHeightDistance([669, 418]);
      setBlurState([0, 10]);
      setOpacityState([1, 1]);
    }

    if (2651 >= e && e >= 1887) {
      setDistance([1947, 2615]);
      setTopDistance([1730, 2640]);
      setRightDistance([97, -17]);
      setWidthScroll([418, 639]);
      setHeightDistance([418, 639]);
      setBlurState([10, 15]);
      setOpacityState([1, 1]);
    }

    if (3515 >= e && e >= 2651) {
      setDistance([2615, 3500]);
      setTopDistance([2640, 3550]);
      setRightDistance([-17, -17]);
      setWidthScroll([639, 639]);
      setHeightDistance([639, 639]);
      setBlurState([15, 40]);
      setOpacityState([1, 0.25]);
    }

    if (4500 >= e && e >= 3515) {
      setDistance([3500, 4500]);
      setTopDistance([3550, 4970]);
      setRightDistance([-17, 545]);
      setWidthScroll([639, 350]);
      setHeightDistance([639, 350]);
      setBlurState([40, 10]);
      setOpacityState([0.25, 1]);
    }

    if (5200 >= e && e >= 4500) {
      setDistance([4500, 5200]);
      setTopDistance([4970, 5400]);
      setRightDistance([545, 780]);
      setWidthScroll([350, 350]);
      setHeightDistance([350, 350]);
      setBlurState([10, 35]);
      setOpacityState([1, 0.6]);
    }
  }
  scrollY.on("change", handleScroll);

  return (
    <motion.div
      className="absolute z-[-1] max-lg:hidden"
      style={{
        top,
        right,
        width,
        height,
        filter: `blur(${blur.get()}px)`,
        opacity,
      }}
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
