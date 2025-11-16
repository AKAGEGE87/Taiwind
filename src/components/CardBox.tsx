import image from "../image/bitmap.png";

const CardBox = () => {
  return (
    <div className="bg-[#1C204B] rounded-[20px] overflow-hidden">
      <div className="bg-[#5747EA] p-8 rounded-[20px] flex sm:flex-col gap-6">
        <img
          src={image}
          className="rounded-full w-[70px] h-[70px] border-2 border-white"
        />
        <div>
          <p className="text-[#BBC0FF] text-left text-[15px]">Report for</p>
          <h2 className="text-white text-left text-[30px] sm:text-[40px] leading-none">
            Jeremy Robson
          </h2>
        </div>
      </div>
      <div className="flex justify-between sm:flex-col gap-4 p-8 text-[#7078C9] text-[18px] items-start">
        <p className="hover:text-white cursor-pointer">Daily</p>
        <p className="hover:text-white cursor-pointer">Weekly</p>
        <p className="hover:text-white cursor-pointer">Monthly</p>
      </div>
    </div>
  );
};

export default CardBox;
