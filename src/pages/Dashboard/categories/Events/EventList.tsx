import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EventList() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<any[]>([]);

  // AMBIL DATA DARI BACKEND
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEvents(Array.isArray(data) ? data : []))
      .catch(() => alert("Gagal mengambil data event"));
  }, []);

  // DELETE
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin mau hapus event ini?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal hapus");

      setEvents((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Gagal menghapus event");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Event List</h1>
        <Link to="/dashboard/event/create" className="bg-red-700 text-white px-5 py-3 rounded-xl">
          + Tambah Event
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Event Name</th>
              <th className="p-4">Location</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-400">
                  Belum ada event
                </td>
              </tr>
            ) : (
              events.map((item: any, index: number) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.location}</td>
                  <td className="p-4">
                    {new Date(item.dateEvent).toLocaleDateString("id-ID")}
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => navigate(`/dashboard/event/${item.id}/edit`)}
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