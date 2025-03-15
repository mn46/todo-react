import { Todo } from "../types";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import { useState } from "react";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEditting, setIsEditting] = useState<boolean>(false);

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

  function handleEdit() {
    setIsEditting(true);
    const input: HTMLInputElement = document.querySelector(
      `#todo-${todo.id}-edit`
    )!;
    input.value = todo.title;
  }

  function handleDelete() {
    const filteredArray = todos.filter((item) => item.id !== todo.id);
    setTodos(filteredArray);
  }

  return (
    <div className="flex justify-between">
      {isEditting ? (
        <div className="flex gap-4">
          <input
            id={`todo-${todo.id}-edit`}
            type="text"
            className="px-2 rounded-full bg-white border-2 border-text"
          />
          <button
            onClick={() => handleSaveTodo()}
            className="bg-primary rounded-lg border-2 border-text px-2"
          >
            Save todo
          </button>
        </div>
      ) : (
        <>
          <div className="flex gap-2">
            <input id={`todo-${todo.id}`} type="checkbox" />
            <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
          </div>

          <div className="flex gap-4">
            <button onClick={() => handleEdit()} className="cursor-pointer">
              <img src={EditIcon} />
            </button>
            <button onClick={() => handleDelete()} className="cursor-pointer">
              <img src={DeleteIcon} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleTodo;
