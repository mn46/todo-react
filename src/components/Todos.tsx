import { Todo } from "../types";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleAddTodo: () => void;
}

const Todos: React.FC<Props> = ({ todos, setTodos, handleAddTodo }) => {
  const clearInput = () => {
    const input: HTMLInputElement = document.querySelector("#add-todo")!;
    input.value = "";
  };

  return (
    <div className="flex flex-col justify-between p-6 rounded-lg bg-white/40">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">TO DO</h2>

        {todos.map((todo) => {
          if (todo.status === "doing")
            return <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />;
        })}
      </div>

      <div className="hidden lg:grid grid-cols-[80%_1fr] gap-4 mt-4">
        <input
          id="add-todo"
          type="text"
          className="p-2 rounded-full bg-white border-2 border-text"
          onFocus={() => clearInput()}
        />
        <button
          onClick={() => handleAddTodo()}
          className="bg-primary rounded-lg border-2 border-text"
        >
          Add todo
        </button>
      </div>
    </div>
  );
};

export default Todos;
