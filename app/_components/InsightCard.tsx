import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type InsightCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function InsightCard({
  image,
  title,
  description,
}: InsightCardProps) {
  return (
    <>
      <div className="space-y-3 rounded-[20px] bg-[#00000033] p-5 pb-8 backdrop-blur-[20px]">
        <div className="relative mb-2 h-[220px] w-full overflow-hidden rounded-lg">
          <Image
            src={`/${image}`}
            fill
            alt="insigts.png"
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="flex justify-between gap-4">
          <p className="font-semibold">{title}</p>
          <div className="flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-[100px] bg-[#00000099]">
            <FiArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <p className="text-sm text-[#ffffffb3]">{description}</p>
      </div>
    </>
  );
}
