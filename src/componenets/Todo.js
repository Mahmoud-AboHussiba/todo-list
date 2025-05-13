import React from "react";
import { Check, EditPencil, Trash } from "iconoir-react";
import { IconButton } from "@material-tailwind/react";
import { useTodos } from "../contexts/todosContext";
import toast from "react-hot-toast";

export default function Todo({ todo, showDeleteModal, showEditModal }) {
  const [ todosReducerState, dispatchTodosReducer ]= useTodos();

  function handleCheckClick() {
    dispatchTodosReducer({
      type: "TOGGLE_TODO",
      payload: todo,
    });
    toast.success("تم تغيير حالة المهمة بنجاح");
  }

  const checkClass = todo.isCompleted
    ? "bg-green-500 border-green-500 hover:bg-slate-300"
    : "bg-white border-green-500 hover:bg-slate-300";

  return (
    <>
      {/* Start Task */}
      <div className=" bg-blue-700 rounded-lg flex flex-row justify-between p-4 hover:transition-all hover:delay-300 hover:py-6 ">
        {/* Task Data */}
        <div className="basis-3/4 flex flex-row">
          <div className="flex items-right flex-col">
            <h3
              className={`font-bold text-white ${
                todo.isCompleted ? "line-through" : ""
              }`}
            >
              {todo.title}
            </h3>
            <p className="text-white">{todo.description}</p>
          </div>
        </div>
        {/* Task Data */}

        {/* Actions */}
        <div dir="ltr" className="basis-1/4 flex flex-row flex-wrap gap-3 ">
          <div className="flex items-center">
            <IconButton
              isCircular
              variant="outline"
              className="border-red-500 bg-white hover:bg-slate-300"
              onClick={() => {showDeleteModal(todo)}}
            >
              <Trash color="red" />
            </IconButton>
          </div>
          <div className="flex items-center">
            <IconButton
              isCircular
              variant="outline"
              className="border-blue-500 bg-white hover:bg-slate-300"
              onClick={() => showEditModal(todo)}
            >
              <EditPencil className="h-4 w-4 stroke-2" color="#3b82f6" />
            </IconButton>
          </div>
          <div className="flex items-center">
            <IconButton
              isCircular
              variant="outline"
              className={checkClass}
              onClick={() => handleCheckClick()}
            >
              <Check
                className="h-4 w-4 stroke-2"
                color={todo.isCompleted ? "white" : "#22c55e"}
              />
            </IconButton>
          </div>
        </div>
        {/* Actions */}
      </div>
      {/* End Task */}
    </>
  );
}
