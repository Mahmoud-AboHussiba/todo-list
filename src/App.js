// import logo from './logo.svg';
import "./App.css";
import { IconButton } from "@material-tailwind/react";
import { Trash, EditPencil, Check } from "iconoir-react";

function App() {
  return (
    <div className="container py-5 bg-gray-400 my-10 rounded-lg">
      <div className="">
        <h1 className="text-5xl text-center">مهامى</h1>
      </div>

      {/* Start Nav */}
      <nav className="flex justify-center gap-4 py-4">
        <button>الكل</button>
        <button>منجز</button>
        <button>غير منجز</button>
      </nav>
      {/* End Nav */}

      {/* Start Tasks List */}
      <div className="flex flex-col gap-4 px-5 ">

        {/* Start Task */}
        <div
          className="
        bg-white 
        rounded-lg 
        flex 
        flex-row-reverse
        justify-between 
        p-4 
        hover:transition-all
        hover:delay-700
        hover:py-6
        "
        >
          <div className="basis-1/2 flex flex-row-reverse  ">
            <div className="flex items-center flex-col">
              <h3 className="font-bold">العنوان</h3>
              <p>الوصف</p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-row gap-3 ">
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-[#ea4c89] hover:bg-slate-300"
              >
                <Trash
                  className="outline-red-500 h-4 w-4 stroke-2 stroke-red-500"
                  color="red"
                />
              </IconButton>
            </div>
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-blue-500 hover:bg-slate-300"
              >
                <EditPencil className="h-4 w-4 stroke-2" color="#3b82f6" />
              </IconButton>
            </div>
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-green-500 hover:bg-slate-300"
              >
                <Check className="h-4 w-4 stroke-2" color="#22c55e" />
              </IconButton>
            </div>
          </div>
        </div>
        {/* End Task */}
    
      </div>
      {/* End Tasks List */}
    </div>
  );
}

export default App;
