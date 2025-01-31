import React from "react";
import ProductCard from "../_components/ProductCard";
import { ProductsData } from "../_lib/Data";
import GoTopAnimation from "./GoTopAnimation";

export default function ProductsCardsRows() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(308px,1fr))] gap-4 max-md:gap-6">
        {ProductsData?.map((card, idx) => (
          <GoTopAnimation key={idx} idx={idx + 1} startNumber={0}>
            <ProductCard
              title={card.title}
              description={card.description}
              image={card.image}
              backgroundColor={card.backgroundColor}
            />
          </GoTopAnimation>
        ))}
      </div>
    </>
  );
}
