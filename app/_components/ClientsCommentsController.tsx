"use client";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { useScrollBtns } from "../_hooks/useScrollBtns";
import { CommentsController } from "../_Types/ControllerType";

export default function ClientsCommentsController({
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
