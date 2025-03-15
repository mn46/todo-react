import { Todo } from "../types";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";

interface Props {
  todo: Todo;
}

const SingleTodo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <input id={`todo-${todo.id}`} type="checkbox" />
        <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
      </div>
      <div className="flex gap-4">
        <button>
          <img src={EditIcon} />
        </button>
        <button>
          <img src={DeleteIcon} />
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
