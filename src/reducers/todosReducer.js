export default function todosReducer(currenttState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_TODOS":
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos) {
        return todos;
      } else {
        return [];
      }
    case "ADD_TODO":
      localStorage.setItem(
        "todos",
        JSON.stringify([...currenttState, payload])
      );
      return [...currenttState, payload];
    case "UPDATE_TODO":
      const updatedTodos = currenttState.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
      case "TOGGLE_TODO":
        const toggledTodos = currenttState.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, isCompleted: !todo.isCompleted };
          }
          return todo;
        });
        localStorage.setItem("todos", JSON.stringify(toggledTodos));
        return toggledTodos;
    case "DELETE_TODO":
        const newTodos = currenttState.filter((todo) => todo.id !== payload.id);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
    default:
      return currenttState;
  }
}
