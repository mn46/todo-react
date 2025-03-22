import { useState } from "react";
import "./App.css";
import { Todo } from "./types";
import Todos from "./components/Todos";
import Done from "./components/Done";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo() {
    const input: HTMLInputElement = document.querySelector("#add-todo")!;
    const inputValue = input.value;
    setTodos((prev) => [
      ...prev,
      { id: prev.length + 1, title: inputValue, status: "doing" },
    ]);
  }

  return (
    <div className="h-screen overflow-auto bg-gradient-to-bl from-white to-primary p-10 lg:p-28 grid lg:grid-cols-2 gap-8">
      <Todos todos={todos} setTodos={setTodos} handleAddTodo={handleAddTodo} />
      <Done todos={todos} />
      <div className="flex flex-col lg:hidden gap-4">
        <input
          id="add-todo"
          type="text"
          className="p-2 rounded-full bg-white border-2 border-text"
        />
        <button
          onClick={() => handleAddTodo()}
          className="bg-primary rounded-lg border-2 border-text p-2 md:self-center"
        >
          Add todo
        </button>
      </div>
    </div>
  );
}

export default App;
