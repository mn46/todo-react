import { Todo } from "../types";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = () => {
  return <div>Todos</div>;
};

export default Todos;
