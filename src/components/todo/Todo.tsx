import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

export interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
}

const TODOS = "todos";

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem(TODOS);
    if (savedTodos) {
      try {
        const parsed: Todo[] = JSON.parse(savedTodos);
        if (Array.isArray(parsed)) {
          setTodos(parsed);
        }
      } catch (error) {
        alert(`Error loading todos: ${error}`);
      }
    }
  }, []);

  const handleAddTodo = () => {
    if (todo === "") {
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      name: todo,
      isCompleted: false,
    };

    setTodos((prev) => {
      const todolist = [...prev, newTodo];
      localStorage.setItem(TODOS, JSON.stringify(todolist));
      return todolist;
    });
    setTodo("");
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      const todolist = prev.filter((todo) => todo.id !== id);
      localStorage.setItem(TODOS, JSON.stringify(todolist));
      return todolist;
    });
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) => {
      const todolist = prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      localStorage.setItem(TODOS, JSON.stringify(todolist));
      return todolist;
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Add Todo input */}
      <div className="flex flex-row gap-2">
        <input
          type="text"
          className="border border-gray-700 bg-gray-500 rounded-2xl px-2 flex-1"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <button onClick={() => handleAddTodo()}>Add Todo</button>
      </div>

      {/* Todo Card */}
      {todos &&
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteTodo={handleDeleteTodo}
            toggleTodo={handleToggleTodo}
          />
        ))}
    </div>
  );
}
export default Todo;
