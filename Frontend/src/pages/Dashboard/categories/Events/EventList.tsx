import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EventList() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // DELETE FUNCTION
  const handleDelete = async (id: number) => {
  const confirmDelete = confirm("Yakin mau hapus event ini?");
  if (!confirmDelete) return;

  await fetch(`http://localhost:5000/events/${id}`, {
    method: "DELETE",
  });

  setEvents((prev: any) =>
    prev.filter((item: any) => item.id !== id)
  );
};

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Event List
        </h1>

        <Link
          to="/dashboard/event/create"
          className="bg-red-700 text-white px-5 py-3 rounded-xl"
        >
          + Tambah Event
        </Link>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Poster</th>
              <th className="p-4">Event Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Speaker</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {events.map((item: any, index: number) => (
              <tr key={item.id} className="border-t">

                <td className="p-4">{index + 1}</td>

                <td className="p-4">
                  <div className="w-20 h-20 bg-red-700 rounded-xl flex items-center justify-center text-sm text-white">
                    No Image
                  </div>
                </td>

                <td className="p-4">{item.nama}</td>

                <td className="p-4">{item.category}</td>

                <td className="p-4">{item.speaker}</td>

                <td className="p-4">{item.tanggal}</td>

                {/* ACTION BUTTONS */}
                <td className="p-4 flex gap-2">

                  {/* EDIT */}
                  <button
                    onClick={() =>
                      navigate(`/dashboard/event/edit/${item.id}`)
                    }
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg"
                  >
                    Edit
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}