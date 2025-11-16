import bag from "../image/bag.svg";
import jois from "../image/jois.svg";
import book from "../image/book.svg";
import run from "../image/run.svg";
import talk from "../image/talk.svg";
import heart from "../image/heart.svg";

const bloks = [
  {
    title: "Work",
    any: "...",
    time: "32hrs",
    last: "last week - 36hrs",
    color: " bg-[#FF8B64]",
    img: bag,
  },
  {
    title: "Play",
    any: "...",
    time: "10hrs",
    last: "last week - 8hrs",
    color: "bg-[#56C2E6]",
    img: jois,
  },
  {
    title: "Study",
    any: "...",
    time: "4hrs",
    last: "last week - 7hrs",
    color: "bg-[#FF5E7D]",
    img: book,
  },
  {
    title: "Exercise",
    any: "  ...",
    time: "4hrs",
    last: "last week - 5hrs",
    color: "bg-[#4BCF83]",
    img: run,
  },
  {
    title: "Sociel",
    any: "...",
    time: "4hrs",
    last: "last week - 10hrs",
    color: " bg-[#7235D1]",
    img: talk,
  },

  {
    title: "Self Camera",
    any: "...",
    time: "2hrs",
    last: "last week - 2hrs",
    color: "bg-[#F1C75B]",
    img: heart,
  },
];

const Bloks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-[30px]">
      {bloks.map((blok, index) => (
        <div
          key={index}
          className={`${blok.color} relative rounded-[15px] text-white flex flex-col items-end h-[245px] overflow-hidden`}
        >
          <img
            src={blok.img}
            alt={blok.title}
            className="absolute top-0 right-5 z-0"
          />

          <div className="mt-[45px] relative w-full sm:max-w-[255px] h-full flex flex-col justify-between rounded-[15px] bg-[#1C204B] active:cursor-pointer active:bg-[#33397A] py-[30px] px-[35px] transition-all duration-300">
            <div className="flex justify-between items-center">
              <span>{blok.title}</span>
              <span className="text-[#BBC0FF] cursor-pointer hover:text-white">
                {blok.any}
              </span>
            </div>

            <div className="text-[56px]">{blok.time}</div>

            <div className="text-[#BBC0FF]">{blok.last}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bloks;
