import Image from "next/image";

function Ads() {
  return (
    <>
      <div className="flex flex-col items-center gap-20 p-20 max-lg:gap-12 max-md:gap-10 max-md:px-6 max-md:py-10">
        <div className="relative h-[1px] w-full">
          <Image src={"/Line.png"} fill alt="line" />
        </div>
        <div className="flex min-h-[72px] w-full flex-wrap items-center justify-center gap-[13px]">
          {[...Array(7)].map((el, idx) => (
            <Image
              key={`${el}${idx}`}
              src={`/AD${idx + 1}.png`}
              height={72}
              width={149.1}
              alt="ad"
            />
          ))}
        </div>
        <div className="relative h-[1px] w-full">
          <Image src={"/Line.png"} fill alt="line" />
        </div>
      </div>
    </>
  );
}

export default Ads;
