interface Props {
  handleAddTodo: () => void;
}

const AddTodo: React.FC<Props> = ({ handleAddTodo }) => {
  const clearInput = () => {
    const input: HTMLInputElement = document.querySelector("#add-todo")!;
    input.value = "";
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-2">
      <input
        id="add-todo"
        type="text"
        className="add-todo w-full p-2 rounded-full bg-white border-2 border-text"
        onFocus={() => clearInput()}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTodo();
        }}
      />
      <button
        onClick={() => handleAddTodo()}
        className="min-w-max bg-primary rounded-lg border-2 border-text p-2 md:self-center"
      >
        Add todo
      </button>
    </div>
  );
};

export default AddTodo;
