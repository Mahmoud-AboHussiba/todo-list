// import logo from './logo.svg';
import "./App.css";
import TodoList from "./componenets/TodoList";
import { TodosContext } from "./contexts/todosContext"; 
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import DeleteModal from "./componenets/DeleteModal";

 const intialTodos = [
   {
     id: uuidv4(),
     title: "قراءة القرآن",
     description: " قراءة القرآن الكريم من الآية الأولى إلى الآية الأخيرة",
     isCompleted: true,
   },
   {
     id: uuidv4(),
     title: " ممارسة التمارين الرياضية",
     description: " ممارسة التمارين الرياضية للحفاظ على صحتك الجسدية",
     isCompleted: false,
   },
   {
     id: uuidv4(),
     title: "التطوع في المجتمع",
     description: "التطوع في المجتمع للمساعدة في المجتمع",
     isCompleted: false,
   },
 ];

function App() {
   const [todos, setTodos] = useState(intialTodos);
 
  return (
    <TodosContext.Provider value={{todos, setTodos}}>
    <div
      dir="rtl"
      className="font-alexandria font-normal bg-gray-800 min-h-screen flex justify-center items-center"
    >
      <TodoList />
    </div>
    </TodosContext.Provider>
  );
}

export default App;
