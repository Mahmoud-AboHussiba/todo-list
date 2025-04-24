// import logo from './logo.svg';
import "./App.css";
import { IconButton, Input } from "@material-tailwind/react";
import { Trash, EditPencil, Check } from "iconoir-react";

function App() {
  return (
    <div className="container size-6/12 py-5 bg-white my-10 rounded-lg border-2 border-gray-300">
      <div>
        <h1 className="text-5xl text-center">مهامي</h1>
        <hr></hr>
      </div>

      {/* Start Nav */}
      <ul className="flex justify-center py-4">
        <li>
          <IconButton
            variant="outline"
            className="px-2 border-gray-400 hover:bg-slate-200 hover:text-gray-400 text-gray-400 rounded-none"
          >
            غير منجز
          </IconButton>
        </li>
        <li>
          <IconButton
            variant="outline"
            className="px-2 border-gray-400 hover:bg-slate-200 hover:text-gray-400 text-gray-400 rounded-none"
          >
            منجز
          </IconButton>
        </li>

        <li>
          <IconButton
            variant="outline"
            className="px-2 border-gray-400 bg-red-100 text-red-500 hover:bg-slate-200 hover:text-gray-400  rounded-none"
          >
            الكل
          </IconButton>
        </li>
      </ul>
      {/* End Nav */}

      {/* Start Tasks List */}
      <div className="flex flex-col gap-4  ">
        {/* Start Task */}
        <div className=" bg-blue-700 rounded-lg flex flex-row-reverse justify-between p-4 hover:transition-all hover:delay-700 hover:py-6">
          <div className="basis-1/2 flex flex-row-reverse  ">
            <div className="flex items-center flex-col">
              <h3 className="font-bold text-white">العنوان</h3>
              <p className="text-white">الوصف</p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-row gap-3 ">
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-[#ea4c89] bg-white hover:bg-slate-300"
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
                className="border-blue-500 bg-white hover:bg-slate-300"
              >
                <EditPencil className="h-4 w-4 stroke-2" color="#3b82f6" />
              </IconButton>
            </div>
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-green-500 bg-white hover:bg-slate-300"
              >
                <Check className="h-4 w-4 stroke-2" color="#22c55e" />
              </IconButton>
            </div>
          </div>
        </div>
        {/* End Task */}

        {/* Start Task */}
        <div className=" bg-blue-700 rounded-lg flex flex-row-reverse justify-between p-4 hover:transition-all hover:delay-700 hover:py-6">
          <div className="basis-1/2 flex flex-row-reverse  ">
            <div className="flex items-center flex-col">
              <h3 className="font-bold text-white">العنوان</h3>
              <p className="text-white">الوصف</p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-row gap-3 ">
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-[#ea4c89] bg-white hover:bg-slate-300"
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
                className="border-blue-500 bg-white hover:bg-slate-300"
              >
                <EditPencil className="h-4 w-4 stroke-2" color="#3b82f6" />
              </IconButton>
            </div>
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-green-500 bg-green-500 hover:bg-slate-300"
              >
                <Check className="h-4 w-4 stroke-2" color="white" />
              </IconButton>
            </div>
          </div>
        </div>
        {/* End Task */}

        {/* Start Task */}
        <div className=" bg-blue-700 rounded-lg flex flex-row-reverse justify-between p-4 hover:transition-all hover:delay-700 hover:py-6">
          <div className="basis-1/2 flex flex-row-reverse  ">
            <div className="flex items-center flex-col">
              <h3 className="font-bold text-white">العنوان</h3>
              <p className="text-white">الوصف</p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-row gap-3 ">
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-[#ea4c89] bg-white hover:bg-slate-300"
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
                className="border-blue-500 bg-white hover:bg-slate-300"
              >
                <EditPencil className="h-4 w-4 stroke-2" color="#3b82f6" />
              </IconButton>
            </div>
            <div className="flex items-center">
              <IconButton
                isCircular
                variant="outline"
                className="border-green-500 bg-green-500 hover:bg-slate-300"
              >
                <Check className="h-4 w-4 stroke-2" color="white" />
              </IconButton>
            </div>
          </div>
        </div>
        {/* End Task */}
      </div>
      {/* End Tasks List */}

      {/* Start Add Task */}
      <form className="flex flex-row-reverse gap-3 pt-4">
        <div className="w-3/4">
          <Input placeholder="عنوان المهمة" className="text-right" />
        </div>
        <div className="w-1/4">
          <IconButton type="submit" className="w-full bg-red-800">
            إضافة
          </IconButton>
        </div>
      </form>
      {/* Start Add Task */}
    </div>
  );
}

export default App;
