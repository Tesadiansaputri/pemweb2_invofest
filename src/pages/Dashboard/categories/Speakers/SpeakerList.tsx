import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SpeakerList() {
  const navigate = useNavigate();
  const [speakers, setSpeakers] = useState<any[]>([]);

  // AMBIL DATA DARI BACKEND
  useEffect(() => {
    fetch("https://be-production-16db.up.railway.app/speakers")
      .then((res) => res.json())
      .then((data) => setSpeakers(Array.isArray(data) ? data : []))
      .catch(() => alert("Gagal mengambil data speaker"));
  }, []);

  // DELETE
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin mau hapus speaker ini?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://be-production-16db.up.railway.app/speakers/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal hapus");

      setSpeakers((prev: any) => prev.filter((item: any) => item.id !== id));
    } catch (error) {
      alert("Gagal menghapus speaker");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Speaker List</h1>
        <Link to="/dashboard/speaker/create" className="bg-red-700 text-white px-5 py-3 rounded-xl">
          + Tambah Speaker
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Photo</th>
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {speakers.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-400">
                  Belum ada speaker
                </td>
              </tr>
            ) : (
              speakers.map((item: any, index: number) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.role}</td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => navigate(`/dashboard/speaker/${item.id}/edit`)}
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