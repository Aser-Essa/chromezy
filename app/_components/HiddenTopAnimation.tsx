"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

type HiddenTopAnimation = {
  children: React.ReactNode;
  distance: number[];
  maxScreen: number;
};

function HiddenTopAnimation({
  children,
  distance,
  maxScreen,
}: HiddenTopAnimation) {
  const [width, setWidth] = useState(window.innerWidth);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, distance, [
    1,
    width >= maxScreen ? 0 : 1,
  ]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return window.removeEventListener("resize", () =>
      setWidth(window.innerWidth),
    );
  }, [maxScreen]);

  return (
    <>
      <motion.div style={{ opacity }}>{children}</motion.div>
    </>
  );
}

export default HiddenTopAnimation;
