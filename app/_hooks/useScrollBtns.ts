import { useEffect, useState } from "react";
import { CommentsController } from "../_Types/ControllerType";

export function useScrollBtns({
  ref,
  commentRef,
  controls,
}: CommentsController) {
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

  return { handleClickNext, handleClickPrev };
}
