import Image from "next/image";
import React from "react";
import TechnologyField from "../_components/TechnologyField";
import { TechnologiesData } from "../_lib/Data";

export default function Technologies() {
  return (
    <div className="flex flex-wrap items-center gap-20 px-20 py-[60px]">
      <div className="h-[859px] w-[40%] rounded-[80px] bg-gradient-to-b from-[#282e6c33] to-[#bdd5f433] px-10 py-[120px] backdrop:blur-[30px]">
        <p className="w-[85%] text-[40px] font-semibold">
          Innovative Technologies Keeping Us Ahead
        </p>
        <p className="mt-5 text-[#ffffffcc]">
          Discover the impact of bespoke digital solutions tailored precisely to
          your business&apos;s distinct requirements.
        </p>
        <Image
          src={"/colored circle.png"}
          width={376}
          height={376}
          alt="colored circle"
          className="mix-blend-color-dodge"
        />
      </div>
      <div className="w-[51%] space-y-10">
        {TechnologiesData.map((tech, idx) => (
          <TechnologyField
            key={idx}
            title={tech.title}
            technologies={tech.technologies}
            idx={idx + 1}
          />
        ))}
      </div>
    </div>
  );
}
