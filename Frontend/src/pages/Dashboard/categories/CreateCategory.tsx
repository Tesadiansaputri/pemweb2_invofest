import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {

    // validasi
    if (!name.trim()) {
      setError("Category wajib diisi!");
      return;
    }

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

      <h1 className="text-3xl font-bold mb-6 text-[#800020]">
        Create Category
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-lg">

        <div className="flex flex-col gap-3 mb-5">

          <label className="font-medium">
            Category Name
          </label>

          <input
            type="text"
            placeholder="Input category..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            className="border p-3 rounded-xl outline-none focus:border-[#800020]"
          />

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}

        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#800020] hover:bg-[#5c0017] text-white px-5 py-3 rounded-xl transition"
        >
          Save Category
        </button>

      </div>
    </div>
  );
}