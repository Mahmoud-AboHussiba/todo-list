import { createContext, useReducer, useContext } from "react";
import todosReducer from "../reducers/todosReducer";

const TodosContext = createContext([]);

const TodosProvider = ({children})=>
{
      const [todosReducerState, dispatchTodosReducer] = useReducer(
        todosReducer,
        []
      );
    return (
        <TodosContext.Provider value={ [todosReducerState, dispatchTodosReducer]}>
            {children}
        </TodosContext.Provider>
    )
}

export const useTodos = () => {
   return useContext(TodosContext);
}

export default TodosProvider;
