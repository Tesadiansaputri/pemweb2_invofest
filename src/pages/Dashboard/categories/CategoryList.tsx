import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CategoryList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // AMBIL DATA DARI BACKEND
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => alert("Gagal mengambil data category"));
  }, []);

  // DELETE
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin mau hapus category ini?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal hapus");

      setCategories((prev: any) => prev.filter((item: any) => item.id !== id));
    } catch (error) {
      alert("Gagal menghapus category");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Category List</h1>
        <Link to="/dashboard/category/create" className="bg-red-700 text-white px-5 py-3 rounded-xl">
          + Tambah Category
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Category Name</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-400">
                  Belum ada category
                </td>
              </tr>
            ) : (
              categories.map((item: any, index: number) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => navigate(`/dashboard/category/${item.id}/edit`)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}