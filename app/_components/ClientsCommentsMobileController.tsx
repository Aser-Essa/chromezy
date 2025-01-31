"use client";
import React from "react";
import { useScrollBtns } from "../_hooks/useScrollBtns";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { CommentsController } from "../_Types/ControllerType";

export default function ClientsCommentsMobileController({
  ref,
  commentRef,
  controls,
}: CommentsController) {
  const { handleClickNext, handleClickPrev } = useScrollBtns({
    ref,
    commentRef,
    controls,
  });

  return (
    <>
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
    </>
  );
}
