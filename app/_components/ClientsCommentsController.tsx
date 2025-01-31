"use client";
import React, { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { AnimationControls } from "motion/react";

type ClientsCommentsControllerProps = {
  ref: React.RefObject<HTMLDivElement | null>;
  commentRef: React.RefObject<HTMLDivElement | null>;
  controls: AnimationControls;
};

export default function ClientsCommentsController({
  ref,
  commentRef,
  controls,
}: ClientsCommentsControllerProps) {
  const [swipe, setSwipe] = useState(-200);
  const [swipeCount, setSwipeCount] = useState(0);

  function handleClickNext() {
    const amountOfSwipe = commentRef?.current?.offsetWidth as number;
    const numberOfSwipedCards = Math.floor(window.innerWidth / amountOfSwipe);
    const childNumbers = ref?.current?.childElementCount as number;
    if (swipeCount < childNumbers - numberOfSwipedCards) {
      setSwipeCount((num) => (num += 1));
      setSwipe((swipe) => swipe - (amountOfSwipe + 32));
    }
  }

  function handleClickPrev() {
    const amountOfSwipe = commentRef?.current?.offsetWidth as number;
    if (swipeCount > 0) {
      setSwipeCount((num) => (num -= 1));
      setSwipe((swipe) => swipe + (amountOfSwipe + 32));
    }
  }

  useEffect(() => {
    controls.start({
      left: swipe,
    });
  }, [controls, swipe]);

  useEffect(() => {
    setSwipe(0);
  }, []);

  return (
    <>
      <div className="flex items-center max-sm:hidden">
        <button
          className="nextBtn m-2 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#40424C]"
          onClick={handleClickPrev}
        >
          <IoArrowBack className="h-[18px] w-[18px]" />
        </button>
        <button
          className="prevBtn m-2 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#40424C]"
          onClick={handleClickNext}
        >
          <IoArrowForward className="h-[18px] w-[18px]" />
        </button>
      </div>
    </>
  );
}
