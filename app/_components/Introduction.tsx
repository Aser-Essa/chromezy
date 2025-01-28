import Image from "next/image";

function Introduction() {
  return (
    <>
      <div className="relative z-[1000000000000000] mt-[110px] flex min-h-[597px] w-full flex-col items-center gap-12 px-20 text-center">
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
          <p className="text-center text-[64px] font-semibold">
            from <span className="text-[#11DEFF]">CONCEPT</span>
            <br /> to <span className="text-[#4380FF]">REALITY</span>
          </p>
          <p className="text-2xl text-[#BDF4D0]">
            We Engineer your Software Success & Digital Transformation.
          </p>
        </div>
        <p className="w-[698px] text-center">
          At Chromezy, we translate your ideas into market-ready solutions
          quickly and precisely. Leveraging the power of technology and
          prioritizing user needs, we deliver products that are both
          cutting-edge and user-centric.
        </p>
        <div className="flex h-[153px] w-[817px] items-center justify-center gap-[49px] px-[56px] py-10">
          <div>
            <p className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-[32px] font-semibold text-transparent">
              200%
            </p>
            <p className="text-sm">Revenue Growth</p>
          </div>
          <div>
            <p className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-[32px] font-semibold text-transparent">
              4X
            </p>
            <p className="text-sm">Speed to Market</p>
          </div>
          <div>
            <p className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-[32px] font-semibold text-transparent">
              73%
            </p>
            <p className="text-sm">New Orders</p>
          </div>
          <div>
            <p className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-[32px] font-semibold text-transparent">
              10K+
            </p>
            <p className="text-sm">Active Users</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
