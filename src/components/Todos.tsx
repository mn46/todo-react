import { Todo } from "../types";
import AddTodo from "./AddTodo";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleAddTodo: () => void;
}

const Todos: React.FC<Props> = ({ todos, setTodos, handleAddTodo }) => {
  return (
    <div className="flex flex-col justify-between p-6 rounded-lg bg-white/40">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">TO DO</h2>

        {todos.map((todo) => {
          if (todo.status === "doing")
            return <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />;
        })}
      </div>

      <div className="hidden lg:block">
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
};

export default Todos;
