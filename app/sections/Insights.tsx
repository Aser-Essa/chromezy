import React from "react";
import InsightCard from "../_components/InsightCard";
import { InsightsData } from "../_lib/Data";

export default function Insights() {
  return (
    <>
      <div className="space-y-12 p-20 max-md:px-6 max-sm:py-14">
        <div className="space-y-2">
          <p className="text-[clamp(30px,5vw,40px)] font-semibold">
            FEATURED INSIGHTS
          </p>
          <p className="text-[clamp(14px,3vw,16px)] text-[#ffffffcc]">
            Were you looking to explore a specific topic? You&apos;re in the
            right spot.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill_,minmax(330px,1fr))] gap-[22px] max-sm:grid-cols-[repeat(auto-fill_,minmax(300px,1fr))]">
          {InsightsData.map((el, idx) => (
            <InsightCard
              key={idx}
              image={el.image}
              title={el.title}
              description={el.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
