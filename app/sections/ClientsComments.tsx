"use client";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import ClientComment from "../_components/ClientComment";
import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ClientsData } from "../_lib/Data";
import SectionHeader from "../_components/SectionHeader";

function ClientsComments() {
  const [windowWidth, setWindowWidth] = useState(0);
  const controls = useAnimation();
  const [swipe, setSwipe] = useState(-200);
  const [swipeCount, setSwipeCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);

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
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWindowWidth(window.innerWidth),
    );
  }, []);

  useEffect(() => {
    setSwipe(0);
  }, []);

  return (
    <>
      <div
        className="space-y-12 p-20 max-md:px-6 max-sm:space-y-10 max-sm:py-14"
        id="ExploreAI"
      >
        <div className="flex h-[90px] items-center justify-between">
          <SectionHeader
            className="space-y-4"
            title=" Our Happy Clients"
            paragraph=" Dummy ipsum dolor sit amet, consectetur adipiscing elit"
          />
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
        </div>
        <div className="relative">
          <div className="h-[450px] w-[100vw] overflow-hidden">
            <motion.div
              className="relative right-0 flex w-fit items-center gap-8"
              initial={{ left: "-200px", opacity: 0 }}
              whileInView={{ left: 0, opacity: 1 }}
              animate={controls}
              transition={{ duration: 0.35, ease: "linear" }}
              viewport={{ amount: windowWidth > 1024 ? 0.45 : 0 }}
              ref={ref}
              dir="ltr"
            >
              {ClientsData?.map((client, idx) => (
                <ClientComment
                  key={idx}
                  description={client.description}
                  name={client.name}
                  jopTitle={client.jopTitle}
                  rate={client.rate}
                  country={client.country}
                  project={client.project}
                  image={client.image}
                  commentRef={commentRef}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <div
          className="hidden items-center justify-center gap-10 max-sm:flex"
          style={{ marginTop: "24px" }}
        >
          <button
            className="nextBtn m-2 flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-[#40424C]"
            onClick={handleClickPrev}
          >
            <IoArrowBack className="h-6 w-6" />
          </button>
          <button
            className="prevBtn m-2 flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-[#40424C]"
            onClick={handleClickNext}
          >
            <IoArrowForward className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ClientsComments;
