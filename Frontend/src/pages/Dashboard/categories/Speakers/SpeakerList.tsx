import { Link, useNavigate } from "react-router-dom";

export default function SpeakerList() {
  const navigate = useNavigate();

  const speakers = JSON.parse(localStorage.getItem("speakers") || "[]");

  // DELETE SPEAKER
  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Yakin mau hapus speaker ini?");
    if (!confirmDelete) return;

    const updated = speakers.filter((item: any) => item.id !== id);

    localStorage.setItem("speakers", JSON.stringify(updated));

    window.location.reload();
  };

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Speaker List
        </h1>

        <Link
          to="/dashboard/speaker/create"
          className="bg-red-700 text-white px-5 py-3 rounded-xl"
        >
          + Tambah Speaker
        </Link>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Photo</th>
              <th className="p-4">Name</th>
              <th className="p-4">Profession</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {speakers.map((item: any, index: number) => (
              <tr key={item.id} className="border-t">

                <td className="p-4">{index + 1}</td>

                <td className="p-4">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </td>

                <td className="p-4">{item.name}</td>

                <td className="p-4">{item.profession}</td>

                {/* ACTION */}
                <td className="p-4 flex gap-2">

                  {/* EDIT */}
                  <button
                    onClick={() =>
                      navigate(`/dashboard/speaker/edit/${item.id}`)
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