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
    img: bag
  },
  {
    title: "Play",
    any: "...",
    time: "10hrs",
    last: "last week - 8hrs",
    color: "bg-[#56C2E6]",
    img: jois
  },
  {
    title: "Study",
    any: "...",
    time: "4hrs",
    last: "last week - 7hrs",
    color: "bg-[#FF5E7D]",
    img: book
  },
  {
    title: "Exercise",
    any: "  ...",
    time: "4hrs",
    last: "last week - 5hrs",
    color: "bg-[#4BCF83]",
    img: run
  },
  {
    title: "Sociel",
    any: "...",
    time: "4hrs",
    last: "last week - 10hrs",
    color: " bg-[#7235D1]",
    img: talk
  },

  {
    title: "Self Camera",
    any: "...",
    time: "2hrs",
    last: "last week - 2hrs",
    color: "bg-[#F1C75B]",
    img: heart
  }
];

// const colors = [
//   "bg-[#FF8B64]",
//   "bg-[#56C2E6]",
//   "bg-[#FF5E7D]",
//   "bg-[#4BCF83]",
//   "bg-[#7235D1]",
//   "bg-[#F1C75B]"
// ];

const Bloks = () => {
  //   const Btn = styled.button`
  //     background-color: #5747ea;
  //     color: #fff;
  //     border: none;
  //     height: 40px;
  //     border-radius: 5px;
  //     padding: 10px 20px;
  //     cursor: pointer;
  //   `;

  return (
    <div className="grid grid-cols-3 gap-[30px] ">
      {bloks.map((blok, index) => (
        <div
          className={`${blok.color} relative z-[-2] rounded-[15px] text-white flex flex-col items-end max-h-[245px] h-full `}
        >
          <img
            src={blok.img}
            alt={blok.title}
            className=" flex justify-end absolute z-[-1] top-0 right-5"
          />
          <div
            key={index}
            className=" mt-[45px] w-screen max-w-[255px] max-h-[245px] h-full flex flex-wrap flex-col  rounded-[15px] gap-gap-[30px] bg-[#1C204B] py-[30px] px-[35px]"
          >
            <div className="flex justify-between">
              <div>{blok.title}</div>
              <div>{blok.any}</div>
            </div>

            <div className=" flex text-[56px] ">{blok.time}</div>
            <div className="flex text-[#BBC0FF]">{blok.last}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bloks;
