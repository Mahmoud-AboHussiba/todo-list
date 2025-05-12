// import logo from './logo.svg';
import "./App.css";
import TodoList from "./componenets/TodoList";
import { TodosContext } from "./contexts/todosContext"; 
import { useState } from "react";
import { Toaster } from "react-hot-toast";



function App() {
   const [todos, setTodos] = useState([]);
 
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
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
