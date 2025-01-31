import React from "react";

type SectionHeaderProps = {
  className: string;
  title: string;
  paragraph: string;
};

export default function SectionHeader({
  className,
  title,
  paragraph,
}: SectionHeaderProps) {
  return (
    <>
      <div className={className}>
        <p className="text-nowrap text-[clamp(30px,5vw,40px)] font-semibold">
          {title}
        </p>
        <p className="text-[clamp(14px,3vw,16px)] text-[#ffffffcc] max-md:w-[85%]">
          {paragraph}
        </p>
      </div>
    </>
  );
}
