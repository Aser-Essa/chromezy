import HiddenTopAnimation from "../_components/HiddenTopAnimation";
import BlurBallAnimation from "../_components/BlurBallAnimation";
import GoTopAnimation from "../_components/GoTopAnimation";
import SectionHeader from "../_components/SectionHeader";
import ProductsCardsRows from "../_components/ProductsCardsRows";
import VioletLight from "../_components/VioletLight";

function Products() {
  return (
    <HiddenTopAnimation distance={[1200, 1750]} maxScreen={1300}>
      <VioletLight
        className="left-[50%] h-[445px] w-[445px] translate-x-[-50%]"
        distance={[700, 800]}
      />
      <div className="relative space-y-12 p-20 max-md:px-6 max-md:py-10">
        <BlurBallAnimation />
        <GoTopAnimation idx={0} startNumber={0}>
          <SectionHeader
            className="space-y-4"
            title="Product Engineering"
            paragraph={` Discover the impact of bespoke digital solutions tailored
              precisely to your business's distinct requirements. Our
              experienced team of professionals ensures you receive outstanding
              results that consistently exceed your expectations.`}
          />
        </GoTopAnimation>
        <ProductsCardsRows />
      </div>
    </HiddenTopAnimation>
  );
}

export default Products;
