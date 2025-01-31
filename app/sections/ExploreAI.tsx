import React from "react";
import InsightCard from "../_components/InsightCard";
import { ExploreAIData } from "../_lib/Data";
import GoTopAnimation from "../_components/GoTopAnimation";
import SectionHeader from "../_components/SectionHeader";

export default function ExploreAI() {
  return (
    <>
      <div className="space-y-12 p-20 max-md:px-6 max-sm:py-14">
        <GoTopAnimation idx={1} startNumber={0}>
          <SectionHeader
            className="space-y-2"
            title="FEATURED INSIGHTS"
            paragraph=" Were you looking to explore a specific topic? You're in the
              right spot."
          />
        </GoTopAnimation>

        <GoTopAnimation idx={0} startNumber={0}>
          <div className="grid grid-cols-[repeat(auto-fill_,minmax(330px,1fr))] gap-[22px] max-sm:grid-cols-[repeat(auto-fill_,minmax(300px,1fr))]">
            {ExploreAIData.map((el, idx) => (
              <InsightCard
                key={idx}
                image={el.image}
                title={el.title}
                description={el.description}
              />
            ))}
          </div>
        </GoTopAnimation>
      </div>
    </>
  );
}
