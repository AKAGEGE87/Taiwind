import image from "../image/bitmap.png";

const CardBox = () => {
  return (
    <div className="bg-[#1C204B] rounded-[10px] font-[Rubik]">
      <div className="pt-[37px] pl-[32px] w-[255px] flex flex-col items-start bg-[#5747EA]  rounded-[10px]">
        <img
          src={image}
          alt=""
          className="rounded-full border-2 border-white mb-[43px] w-[78px] h-[78px]"
        />

        <h3 className="text-[#BBC0FF] text-[15px] ">Report for</h3>
        <h2 className="text-white text-[40px] leading-[40px] text-left mb-[80px]">
          Jeremy Robson
        </h2>
      </div>
      <div className="flex flex-col text-[#7078C9] gap-[21px] items-start py-[26px] px-[32px] text-[18px] ">
        <h2 className=" hover:text-white cursor-pointer">Daily</h2>
        <h2 className=" hover:text-white cursor-pointer">Weekly</h2>
        <h2 className=" hover:text-white cursor-pointer">Monthly</h2>
      </div>
    </div>
  );
};

export default CardBox;
