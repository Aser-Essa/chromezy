import Image from "next/image";
import React from "react";
import TechnologyField from "../_components/TechnologyField";
import { TechnologiesData } from "../_lib/Data";

export default function Technologies() {
  return (
    <div className="flex flex-wrap items-center gap-20 px-20 py-[60px] max-[1050px]:gap-10 max-lg:gap-20 max-md:px-6 max-sm:py-14">
      <div className="h-[859px] w-[40%] rounded-[80px] bg-gradient-to-b from-[#282e6c33] to-[#bdd5f433] px-10 py-[120px] backdrop:blur-[30px] max-lg:h-[500px] max-lg:w-full max-lg:p-10 max-md:rounded-[30px]">
        <p className="w-[85%] text-[clamp(24px,3vw,40px)] font-semibold max-sm:w-full">
          Innovative Technologies Keeping Us Ahead
        </p>
        <p className="mt-5 text-[#ffffffcc]">
          Discover the impact of bespoke digital solutions tailored precisely to
          your business&apos;s distinct requirements.
        </p>
        <div className="relative aspect-square w-[clamp(200px,25vw,376px)] max-lg:mx-auto">
          <Image
            src={"/colored circle.png"}
            fill
            alt="colored circle"
            className="mix-blend-color-dodge"
          />
        </div>
      </div>
      <div className="w-[51%] space-y-10 max-lg:w-full">
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
