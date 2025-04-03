import { Todo } from "../types";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import { useEffect, useState } from "react";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEditting, setIsEditting] = useState<boolean>(false);

  useEffect(() => {
    if (isEditting) {
      const input: HTMLInputElement = document.querySelector(
        `#todo-${todo.id}-edit`
      )!;
      input.value = todo.title;
    }
  }, [isEditting, todo.id, todo.title]);

  function handleSaveTodo() {
    const input: HTMLInputElement = document.querySelector(
      `#todo-${todo.id}-edit`
    )!;
    const inputText = input.value;
    const editedTodo = todos.find((item) => item.id === todo.id);

    if (!editedTodo) return;

    editedTodo.title = inputText;
    const newTodosList = todos.map((item) => {
      if (item.id === editedTodo?.id) return editedTodo;
      else return item;
    });
    setTodos(newTodosList);
    setIsEditting(false);
  }

  function handleMarkAsDone() {
    const editedTodo = todos.find((item) => item.id === todo.id);

    if (!editedTodo) return;

    editedTodo.status = "done";

    const newTodosList = todos.map((item) => {
      if (item.id === editedTodo?.id) return editedTodo;
      else return item;
    });
    setTodos(newTodosList);
  }

  function handleEdit() {
    setIsEditting(true);
  }

  function handleDelete() {
    const filteredArray = todos.filter((item) => item.id !== todo.id);
    setTodos(filteredArray);
  }

  return (
    <div className="flex justify-between bg-white/80 rounded-lg py-2 px-4 w-full">
      {isEditting ? (
        <div className="w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_max-content] gap-4">
          <input
            id={`todo-${todo.id}-edit`}
            type="text"
            className="px-2 py-1 w-full rounded-full bg-white border-2 border-text"
          />
          <button
            onClick={() => handleSaveTodo()}
            className="bg-primary rounded-lg border-2 border-text px-2"
          >
            Save todo
          </button>
        </div>
      ) : (
        <div className="w-full grid grid-cols-[1fr_max-content]">
          <div className="flex gap-2">
            <input
              id={`todo-${todo.id}`}
              type="checkbox"
              onChange={() => handleMarkAsDone()}
            />
            <label htmlFor={`todo-${todo.id}`} className="break-all">
              {todo.title}
            </label>
          </div>

          <div className="flex gap-4">
            <button onClick={() => handleEdit()} className="cursor-pointer">
              <img src={EditIcon} />
            </button>
            <button onClick={() => handleDelete()} className="cursor-pointer">
              <img src={DeleteIcon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTodo;
