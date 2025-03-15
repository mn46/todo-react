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
    <div>
      <div>
        {todos.map((todo) => (
          <SingleTodo todo={todo} />
        ))}
      </div>

      <div className="grid grid-cols-[90%_1fr]">
        <input id="add-todo" type="text" />
        <button onClick={() => handleAddTodo()}>Add todo</button>
      </div>
    </div>
  );
};

export default Todos;
