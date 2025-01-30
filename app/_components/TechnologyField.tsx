import React from "react";
import Technology from "./Technology";

type technologies = {
  text: string;
  image?: string;
};

type TechnologyFieldProps = {
  title: string;
  technologies: technologies[];
  idx: number;
};

export default function TechnologyField({
  title,
  technologies,
  idx,
}: TechnologyFieldProps) {
  return (
    <>
      <div className="relative flex min-h-[117px] items-start gap-10">
        <p className="text-[40px] font-semibold leading-[29px] text-[#ffffff1a]">
          0{idx}
        </p>
        <div className="space-y-4">
          <p className="text-xl font-semibold leading-[25px]">{title}</p>
          <div className="flex flex-wrap items-center gap-1">
            {technologies.map((el, idx) => (
              <Technology key={idx} image={el.image} text={el.text} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
