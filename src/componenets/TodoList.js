import React from "react";
import { IconButton, Input } from "@material-tailwind/react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext } from "react";
import { TodosContext } from "../contexts/todosContext";




export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");


  const todosJsx = todos.map((todo) => (
    <Todo key={todo.id} todo={todo} />
  ));

  function handleAddClick(e) {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      description: "",
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTitleInput("");
  }

  return (
    <div className="container size-6/12 py-5 bg-white rounded-lg border-2 border-gray-300">
      <div className="py-2">
        <h1 className="text-5xl text-center">مهامي</h1>
        <hr></hr>
      </div>

      {/* Start Nav */}
      <ul className="flex justify-center py-4">
        <li>
          <IconButton
            variant="outline"
            className="px-2 border-gray-400 bg-red-100 text-red-500 hover:bg-slate-200 hover:text-gray-400  rounded-none"
          >
            الكل
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
            className="px-2 border-gray-400 hover:bg-slate-200 hover:text-gray-400 text-gray-400 rounded-none"
          >
            غير منجز
          </IconButton>
        </li>
      </ul>
      {/* End Nav */}

      {/* Start Tasks List */}
      <div className="flex flex-col gap-4  ">{todosJsx}</div>
      {/* End Tasks List */}

      {/* Start Add Task */}
      <form className="flex flex-row gap-3 pt-4">
        <div className="w-3/4">
          <Input
            placeholder="عنوان المهمة"
            className="text-right"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div className="w-1/4">
          <IconButton
            type="submit"
            className="w-full bg-red-800"
            onClick={handleAddClick}
          >
            إضافة
          </IconButton>
        </div>
      </form>
      {/* Start Add Task */}
    </div>
  );
}
