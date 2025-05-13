// import logo from './logo.svg';
import "./App.css";
import TodoList from "./componenets/TodoList";
import { Toaster } from "react-hot-toast";
import TodosProvider from "./contexts/todosContext";

function App() {
  return (
    <TodosProvider>
      <Toaster position="bottom-left" reverseOrder={false} />
      <div
        dir="rtl"
        className="font-alexandria font-normal bg-gray-800 min-h-screen flex justify-center items-center "
      >
        <TodoList />
      </div>
    </TodosProvider>
  );
}

export default App;
