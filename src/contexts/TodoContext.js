import { createContext, useContext } from "react";

// Create a context with default values for todos and functions
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Custom hook to use the TodoContext
export const useTodo = () => {
  return useContext(TodoContext);
};

// Export the TodoProvider to wrap the application or components that need access to the context
export const TodoProvider = TodoContext.Provider;
