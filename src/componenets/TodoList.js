import React from "react";
import { IconButton, Input, List, ListItem } from "@material-tailwind/react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect } from "react";
import { TodosContext } from "../contexts/todosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === "completed") {
      return todo.isCompleted;
    } else if (statusFilter === "notCompleted") {
      return !todo.isCompleted;
    } else {
      return true;
    }
  });

  const todosJsx = filteredTodos.map((todo) => (
    <Todo key={todo.id} todo={todo} />
  ));

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  function handleAddClick(e) {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      description: "",
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTitleInput("");
  }

  return (
    <div className="container size-10/12 py-5 bg-white rounded-lg border-2 border-gray-300 scroll-m-2 ">
      <div className="py-2">
        <h1 className="text-5xl text-center">مهامي</h1>
        <hr></hr>
      </div>

      {/* Start Nav */}
      <List className="flex justify-center py-4 flex-row gap-0" value={statusFilter}>
        {[
          { label: "الكل", value: "all" },
          { label: "منجز", value: "completed" },
          { label: "غير منجز", value: "notCompleted" },
        ].map((item) => (
          <ListItem
            key={item.value}
            onClick={() => setStatusFilter(item.value)}
            className={`border border-gray-300 rounded-sm
        ${
          statusFilter === item.value
            ? "bg-red-100 text-red-600 font-semibold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
          >
            {item.label}
          </ListItem>
        ))}
      </List>
      {/* End Nav */}

      {/* Start Tasks List */}
      <div className="flex flex-col gap-4  max-h-96 overflow-y-auto">
        {todosJsx}
      </div>
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
            disabled={!titleInput}
          >
            إضافة
          </IconButton>
        </div>
      </form>
      {/* Start Add Task */}
    </div>
  );
}
