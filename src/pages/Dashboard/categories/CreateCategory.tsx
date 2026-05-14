import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const oldData =
      JSON.parse(localStorage.getItem("categories") || "[]");

    const newCategory = {
      id: Date.now(),
      name,
    };

    const updatedData = [...oldData, newCategory];

    localStorage.setItem(
      "categories",
      JSON.stringify(updatedData)
    );

    navigate("/dashboard/category");
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Create Category
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-lg">

        <div className="flex flex-col gap-3 mb-5">
          <label>Category Name</label>

          <input
            type="text"
            placeholder="Input category..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-xl"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-pink-500 text-white px-5 py-3 rounded-xl"
        >
          Save Category
        </button>

      </div>
    </div>
  );
}