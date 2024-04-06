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
    <form onSubmit={handleSubmit} className="mt-4 mb-2">
      <div className="flex">
        <input
          className="flex-auto border border-gray-300 p-2 w-full rounded-md"
          type="text"
          value={toDo}
          onChange={e => setToDo(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 mb-2 flex-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddToDo;
