import { useState } from "react";
import "./App.css";
import { Todo } from "./types";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [done, setDone] = useState<Todo[]>([]);

  return (
    <div className="h-screen bg-gradient-to-bl from-white to-primary">
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
