import React from "react";
import SideSolgan from "../_components/SideSolgan";
import ServicesList from "../_components/ServicesList";

export default function Services() {
  return (
    <div className="flex flex-wrap items-center gap-20 px-20 py-[60px] max-[1050px]:gap-10 max-lg:gap-20 max-md:px-6 max-sm:py-14">
      <SideSolgan />
      <ServicesList />
    </div>
  );
}
