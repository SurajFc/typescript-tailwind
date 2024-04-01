import { useState } from "react";
import { useToDos } from "../store/ToDoContext";

const AddToDo = () => {
  const { handleAddToDo } = useToDos();
  const [toDo, setToDo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(toDo);
    setToDo("");
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        className="border border-gray-300 p-2 w-full rounded-md"
        type="text"
        value={toDo}
        onChange={e => setToDo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
