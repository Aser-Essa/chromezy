import React from "react";
import Story from "../_components/Story";
import GoTopAnimation from "../_components/GoTopAnimation";
import { BlogsData } from "../_lib/Data";
import HiddenTopAnimation from "../_components/HiddenTopAnimation";
import SectionHeader from "../_components/SectionHeader";

export default function Blogs() {
  return (
    <HiddenTopAnimation distance={[2655, 3400]} maxScreen={1300}>
      <div className="grid grid-cols-[repeat(auto-fill_,minmax(320px,1fr))] gap-10 p-20 max-md:px-6 max-sm:grid-cols-[repeat(auto-fill_,minmax(300px,1fr))] max-sm:gap-6 max-sm:py-14">
        <SectionHeader
          className="max-h-[304px] space-y-4 py-10 max-sm:mb-4 max-sm:p-0"
          title={"Success Stories"}
          paragraph={` Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.`}
        />
        {BlogsData?.map((storyData, idx) => (
          <GoTopAnimation key={idx} idx={idx} startNumber={2}>
            <Story
              title={storyData.title}
              description={storyData.description}
              image={storyData.image}
            />
          </GoTopAnimation>
        ))}
      </div>
    </HiddenTopAnimation>
  );
}
