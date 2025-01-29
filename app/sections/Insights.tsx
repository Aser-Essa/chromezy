import React from "react";
import InsightCard from "../_components/InsightCard";
import { InsightsData } from "../_lib/Data";

export default function Insights() {
  return (
    <>
      <div className="space-y-12 p-20">
        <div className="space-y-2">
          <p className="text-[40px] font-semibold">FEATURED INSIGHTS</p>
          <p className="text-[#ffffffcc]">
            Were you looking to explore a specific topic? You&apos;re in the
            right spot.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill_,minmax(400px,1fr))] gap-[22px]">
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
