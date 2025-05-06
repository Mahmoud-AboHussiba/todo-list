import React from "react";
import { Check } from "iconoir-react";
import { IconButton } from "@material-tailwind/react";
import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);

  function handleCheckClick() {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const checkClass = todo.isCompleted
    ? "bg-green-500 border-green-500 hover:bg-slate-300"
    : "bg-white border-green-500 hover:bg-slate-300";

  return (
    <>
      {/* Start Task */}
      <div className=" bg-blue-700 rounded-lg flex flex-row justify-between p-4 hover:transition-all hover:delay-300 hover:py-6 ">
        {/* Task Data */}
        <div className="basis-1/2 flex flex-row">
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
        <div dir="ltr" className="basis-1/2 flex flex-row gap-3 ">
          <div className="flex items-center">
            <DeleteModal todo={todo}></DeleteModal>
          </div>
          <div className="flex items-center">
            <EditModal todo={todo}></EditModal>
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
