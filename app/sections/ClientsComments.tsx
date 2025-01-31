"use client";
import { useAnimation } from "motion/react";
import { useRef } from "react";
import SectionHeader from "../_components/SectionHeader";
import ClientsCommentsRow from "../_components/ClientsCommentsRow";
import ClientsCommentsController from "../_components/ClientsCommentsController";

function ClientsComments() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);

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
          <ClientsCommentsController
            ref={ref}
            commentRef={commentRef}
            controls={controls}
          />
        </div>

        <ClientsCommentsRow
          ref={ref}
          commentRef={commentRef}
          controls={controls}
        />

        {/* <div
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
        </div> */}
      </div>
    </>
  );
}

export default ClientsComments;
