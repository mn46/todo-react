import { Todo } from "../types";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({ todos, setTodos }) => {
  function handleAddTodo() {
    const input: HTMLInputElement = document.querySelector("#add-todo")!;
    const inputValue = input.value;
    setTodos((prev) => [...prev, { id: prev.length + 1, title: inputValue }]);
  }

  return (
    <div className="flex flex-col justify-between p-6 rounded-lg bg-white/40">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">TO DO</h2>

        {todos.map((todo) => (
          <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>

      <div className="grid grid-cols-[80%_1fr] gap-4">
        <input
          id="add-todo"
          type="text"
          className="p-2 rounded-full bg-white border-2 border-text"
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
