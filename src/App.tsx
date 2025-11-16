import "./App.css";
import Bloks from "./components/Bloks";
import CardBox from "./components/CardBox";

function App() {
  return (
    <div className="min-h-screen bg-[#0E1323] flex justify-center items-center p-6">
      <div className="w-full max-w-[1150px] grid gap-8 sm:grid-cols-[250px_1fr]">
        <CardBox />

        <Bloks />
      </div>
    </div>
  );
}

export default App;
