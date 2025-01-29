import Image from "next/image";

function Ads() {
  return (
    <>
      <div className="flex h-[392px] flex-col items-center gap-20 p-20">
        <div className="relative h-[1px] w-full">
          <Image src={"/Line.png"} fill alt="line" />
        </div>
        <div className="flex h-[72px] w-full flex-wrap items-center justify-center gap-[13px]">
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
