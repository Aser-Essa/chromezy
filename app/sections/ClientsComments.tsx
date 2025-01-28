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

  function handleClickNext() {
    const childNumbers = ref?.current?.childElementCount as number;
    if (swipeCount < childNumbers - 3) {
      setSwipeCount((num) => (num += 1));
      setSwipe((swipe) => swipe - 432);
    }
  }

  function handleClickPrev() {
    if (swipeCount > 0) {
      setSwipeCount((num) => (num -= 1));
      setSwipe((swipe) => swipe + 432);
    }
  }

  useEffect(() => {
    controls.start({
      right: swipe,
    });
  }, [controls, swipe]);

  return (
    <>
      <div className="space-y-12 p-20">
        <div className="flex h-[90px] items-center justify-between">
          <div className="space-y-4">
            <p className="text-[40px] font-semibold">Our Happy Clients</p>
            <p className="text-[#ffffffcc]">
              Dummy ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="flex items-center">
            <button
              className="nextBtn m-2 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#40424C]"
              onClick={handleClickNext}
            >
              <IoArrowBack className="h-[18px] w-[18px]" />
            </button>
            <button
              className="prevBtn m-2 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#40424C]"
              onClick={handleClickPrev}
            >
              <IoArrowForward className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
        <div dir="rtl" className="relative">
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
                />
              ))}
            </motion.div>
          </div>
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
