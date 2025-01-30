import Image from "next/image";
import { Ref } from "react";

type ClientCommentProps = {
  description: string;
  name: string;
  jopTitle: string;
  rate: string;
  project: string;
  country: string;
  image: React.ReactElement;
  commentRef: Ref<HTMLDivElement> | undefined;
};

function ClientComment({
  description,
  name,
  jopTitle,
  rate,
  project,
  country,
  image,
  commentRef,
}: ClientCommentProps) {
  return (
    <>
      <>
        <div
          ref={commentRef}
          className="h-[450px] w-[clamp(300px,47.15vw,400px)] rounded-[20px] bg-[#bdd5f40d] p-6 backdrop-blur-[40px] transition-all duration-200 hover:bg-[#bdd5f433]"
        >
          <div className="h-8 w-8">
            <Image
              src="/Double Quotation Mark.png"
              width={20}
              height={18}
              alt=""
            />
          </div>
          <div>
            <div className="mt-2.5 flex h-[282px] flex-col justify-between border-b border-[#ffffff1a] pb-6">
              <p className="min-h-[192px] font-medium">{description}</p>
              <div className="h-[42px] w-full space-y-1 text-end">
                <p className="text-sm font-bold">{name}</p>
                <p className="text-xs text-[#ffffff99]">{jopTitle}</p>
              </div>
            </div>
            <div className="mt-6 flex h-[54px] items-center justify-between">
              <div className="text-[10px] font-normal text-[#ffffff99]">
                <p className="leading-[18px]">Star Rating - {rate}</p>
                <p className="leading-[18px]">Project - {project}</p>
                <p className="leading-[18px]">Country - {country}</p>
              </div>
              {image}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ClientComment;
