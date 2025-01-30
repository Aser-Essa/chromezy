import Image from "next/image";
import GridText from "./GridText";

function Introduction() {
  return (
    <>
      <div className="relative z-[1000] mt-[110px] flex min-h-[597px] w-full flex-col items-center gap-12 px-20 text-center max-md:gap-10 max-md:px-14 max-sm:px-6">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-[56px] items-center justify-center gap-2.5 py-4">
            <Image
              src="/magic.png"
              width={16}
              height={16}
              alt="magic"
              priority
            />
            <p className="font-inter font-medium text-[#ECF4BD]">
              Introducing AI Automation
            </p>
          </div>
          <p className="text-center text-[clamp(36px,6vw,64px)] font-semibold">
            from <span className="text-[#11DEFF]">CONCEPT</span>
            <br /> to <span className="text-[#4380FF]">REALITY</span>
          </p>
          <p className="text-[clamp(16px,2vw,24px)] text-[#BDF4D0]">
            We Engineer your Software Success & Digital Transformation.
          </p>
        </div>
        <p className="max-w-[698px] text-center text-[clamp(14px,1.7vw,16px)]">
          At Chromezy, we translate your ideas into market-ready solutions
          quickly and precisely. Leveraging the power of technology and
          prioritizing user needs, we deliver products that are both
          cutting-edge and user-centric.
        </p>
        <div className="grid min-h-[153px] w-full max-w-[817px] grid-cols-[repeat(auto-fill,_minmax(120px,1fr))] items-center justify-center gap-[49px] px-[56px] py-10 max-md:grid-cols-[repeat(auto-fill,_minmax(100px,1fr))] max-md:px-2">
          <div>
            <GridText>200%</GridText>
            <p className="text-sm">Revenue Growth</p>
          </div>
          <div>
            <GridText>4X</GridText>
            <p className="text-sm">Speed to Market</p>
          </div>
          <div>
            <GridText>73%</GridText>
            <p className="text-sm">New Orders</p>
          </div>
          <div>
            <GridText>10K+</GridText>
            <p className="text-sm">Active Users</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
