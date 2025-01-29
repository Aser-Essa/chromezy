import React from "react";
import { SuccessStoriesData } from "../_lib/Data";
import Story from "../_components/Story";

export default function SuccessStories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill_,minmax(350px,1fr))] gap-10 p-20">
      <div className="h-[304px] space-y-4 py-10">
        <p className="text-[40px] font-semibold">Success Stories</p>
        <p className="max-w-[384px] text-[#ffffffcc]">
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
