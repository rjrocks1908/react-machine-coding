import type { Todo } from "./Todo";

interface Props {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

function TodoCard({ todo, deleteTodo, toggleTodo }: Props) {
  return (
    <div className="flex flex-row w-full justify-between">
      <h4 className={todo.isCompleted ? "line-through" : ""}>{todo.name}</h4>
      <div className="flex flex-row gap-1">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}
export default TodoCard;
