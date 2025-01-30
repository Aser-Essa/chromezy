import React from "react";
import { SuccessStoriesData } from "../_lib/Data";
import Story from "../_components/Story";

export default function SuccessStories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill_,minmax(320px,1fr))] gap-10 p-20 max-md:px-6 max-sm:gap-6 max-sm:py-14">
      <div className="max-h-[304px] space-y-4 py-10 max-sm:mb-4 max-sm:p-0">
        <p className="text-[clamp(30px,5vw,40px)] font-semibold">
          Success Stories
        </p>
        <p className="max-w-[384px] text-[clamp(14px,3vw,16px)] text-[#ffffffcc]">
          Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      {SuccessStoriesData?.map((storyData, idx) => (
        <Story
          key={idx}
          title={storyData.title}
          description={storyData.description}
          image={storyData.image}
        />
      ))}
    </div>
  );
}
