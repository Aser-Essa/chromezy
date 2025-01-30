"use client";
import "swiper/css/navigation";
import "swiper/css";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import ClientComment from "../_components/ClientComment";
import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ClientsData } from "../_lib/Data";

function ClientsComments() {
  const controls = useAnimation();
  const [swipe, setSwipe] = useState(0);
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

  return (
    <>
      <div className="space-y-12 p-20 max-md:px-6 max-sm:space-y-10 max-sm:py-14">
        <div className="flex h-[90px] items-center justify-between">
          <div className="space-y-4">
            <p className="text-[clamp(30px,5vw,40px)] font-semibold">
              Our Happy Clients
            </p>
            <p className="text-[clamp(14px,3vw,16px)] text-[#ffffffcc]">
              Dummy ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
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
              animate={controls}
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

// <div dir="rtl">
// <Swiper
//   spaceBetween={0}
//   slidesPerView={3}
//   modules={[Navigation]}
//   navigation={{
//     nextEl: `.nextBtn`,
//     prevEl: `.prevBtn`,
//     clickable: true,
//   }}
//   wrapperClass="flex "
// >
//   <SwiperSlide>
//     <ClientComment />
//   </SwiperSlide>

//   <SwiperSlide>
//     <ClientComment />
//   </SwiperSlide>

//   <SwiperSlide>
//     <ClientComment />
//   </SwiperSlide>

//   <SwiperSlide>
//     <ClientComment />
//   </SwiperSlide>

//   {/* <ClientComment />
// <ClientComment />
// <ClientComment />
// <ClientComment />
// <ClientComment /> */}
// </Swiper>
// </div>
