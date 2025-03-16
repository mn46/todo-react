import { Todo } from "../types";

interface Props {
  todos: Todo[];
}

const Done: React.FC<Props> = ({ todos }) => {
  return (
    <div className="flex flex-col p-6 space-y-4 rounded-lg bg-white/40">
      <h2 className="text-2xl font-semibold text-text">DONE</h2>
      {todos.map((todo) => {
        if (todo.status === "done")
          return <p className="text-gray-600 line-through">{todo.title}</p>;
      })}
    </div>
  );
};

export default Done;
