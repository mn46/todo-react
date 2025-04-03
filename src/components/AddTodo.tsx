interface Props {
  handleAddTodo: () => void;
}

const AddTodo: React.FC<Props> = ({ handleAddTodo }) => {
  const clearInput = () => {
    const input: HTMLInputElement = document.querySelector("#add-todo")!;
    input.value = "";
  };

  return (
    <>
      <input
        id="add-todo"
        type="text"
        className="add-todo p-2 rounded-full bg-white border-2 border-text"
        onFocus={() => clearInput()}
      />
      <button
        onClick={() => handleAddTodo()}
        className="bg-primary rounded-lg border-2 border-text p-2 md:self-center"
      >
        Add todo
      </button>
    </>
  );
};

export default AddTodo;
