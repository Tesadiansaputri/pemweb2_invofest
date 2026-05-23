import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Category wajib diisi!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://be-production-16db.up.railway.app/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error("Gagal menyimpan");

      navigate("/dashboard/category");
    } catch (error) {
      setError("Gagal menyimpan category, coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#800020]">Create Category</h1>

      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-lg">
        <div className="flex flex-col gap-3 mb-5">
          <label className="font-medium">Category Name</label>
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
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-[#800020] hover:bg-[#5c0017] text-white px-5 py-3 rounded-xl transition disabled:bg-gray-300"
        >
          {isLoading ? "Menyimpan..." : "Save Category"}
        </button>
      </div>
    </div>
  );
}