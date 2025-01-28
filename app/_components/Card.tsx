import { FiArrowUpRight } from "react-icons/fi";

type CardProps = {
  image: React.ReactElement;
  title: string;
  description: string;
  backgroundColor: string;
};

function Card({ title, description, backgroundColor, image }: CardProps) {
  return (
    <>
      <div
        className={`relative h-[436px] gap-4 rounded-xl px-5 py-8`}
        style={{ backgroundColor }}
      >
        {image}
        <p className="flex h-8 w-[97px] items-center justify-center rounded-[50px] border border-[#ffffff1a] bg-[#ffffff0d] text-[10px]">
          Our Services
        </p>
        <div className="mt-[48px] flex min-h-[292px] flex-col justify-between">
          <div className="space-y-4">
            <p className="w-[80%] text-2xl font-semibold leading-[26px]">
              {title}
            </p>
            <p className="font-inter text-sm font-medium text-[#ffffffcc]">
              {description}
            </p>
          </div>
          <button className="mx-auto flex h-14 w-full items-center justify-center gap-2 rounded-[80px] bg-black px-2 py-3 text-xs">
            <p>Talk to a Product Expert</p>

            <FiArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
