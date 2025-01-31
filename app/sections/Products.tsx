import Card from "../_components/Card";
import { ProductsData } from "../_lib/Data";
import HiddenTopAnimation from "../_components/HiddenTopAnimation";
import BlurBallAnimation from "../_components/BlurBallAnimation";
import GoTopAnimation from "../_components/GoTopAnimation";

function Products() {
  return (
    <HiddenTopAnimation distance={[1200, 1750]} maxScreen={1300}>
      <div
        className="absolute left-[50%] h-[445px] w-[445px] translate-x-[-50%] blur-[100px] max-md:h-full max-md:w-full"
        style={{
          background:
            "radial-gradient( circle, #095dff 0%, #bd09ff3e 30%, #bd09ff00 80%)",
        }}
      ></div>
      <div className="relative space-y-12 p-20 max-md:px-6 max-md:py-10">
        <BlurBallAnimation />
        <div className="space-y-4">
          <GoTopAnimation idx={0} startNumber={0}>
            <p className="text-nowrap text-[clamp(30px,5vw,40px)] font-semibold max-sm:text-[30px]">
              Product Engineering
            </p>
          </GoTopAnimation>

          <GoTopAnimation idx={0} startNumber={0}>
            <p className="max-w-[674px] text-[#ffffffcc] max-sm:text-sm">
              Discover the impact of bespoke digital solutions tailored
              precisely to your business&apos;s distinct requirements. Our
              experienced team of professionals ensures you receive outstanding
              results that consistently exceed your expectations.
            </p>
          </GoTopAnimation>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(308px,1fr))] gap-4 max-md:gap-6">
          {ProductsData?.map((card, idx) => (
            <GoTopAnimation key={idx} idx={idx + 1} startNumber={0}>
              <Card
                title={card.title}
                description={card.description}
                image={card.image}
                backgroundColor={card.backgroundColor}
              />
            </GoTopAnimation>
          ))}
        </div>
      </div>
    </HiddenTopAnimation>
  );
}

export default Products;
