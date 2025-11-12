import "./App.css";
import Bloks from "./components/Bloks";
import CardBox from "./components/CardBox";

function App() {
  return (
    <>
      <div className=" p-6 flex justify-center align-center  gap-[30px]">
        <CardBox />
        <Bloks />
      </div>
    </>
  );
}

export default App;
