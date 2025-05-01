import React from 'react'
import { Trash, EditPencil, Check } from "iconoir-react";
import { IconButton } from "@material-tailwind/react";


export default function Todo({id, title, description}) {
  return (
    <>
      {/* Start Task */}
      <div className=" bg-blue-700 rounded-lg flex flex-row justify-between p-4 hover:transition-all hover:delay-300 hover:py-6">
        {/* Task Data */}
        <div className="basis-1/2 flex flex-row  ">
          <div className="flex items-center flex-col">
            <h3 className="font-bold text-white">{title}</h3>
            <p className="text-white">{description}</p>
          </div>
        </div>
        {/* Task Data */}

        {/* Actions */}
        <div dir="ltr" className="basis-1/2 flex flex-row gap-3 ">
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
        {/* Actions */}
      </div>
      {/* End Task */}
    </>
  );
}