// import logo from './logo.svg';
import "./App.css";
import TodoList from "./componenets/TodoList";
import { TodosContext } from "./contexts/todosContext";
import { useState, useReducer } from "react";
import { Toaster } from "react-hot-toast";
import todosReducer from "./reducers/todosReducer";

function App() {
  // const [todos, setTodos] = useState([]);
  const [todosReducerState, dispatchTodosReducer] = useReducer(
    todosReducer,
    []
  );

  return (
    <TodosContext.Provider value={{ todosReducerState, dispatchTodosReducer }}>
      <Toaster position="bottom-left" reverseOrder={false} />
      <div
        dir="rtl"
        className="font-alexandria font-normal bg-gray-800 min-h-screen flex justify-center items-center "
      >
        <TodoList />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
