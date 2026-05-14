import { Link } from "react-router-dom";

export default function SpeakerList() {

  const speakers =
    JSON.parse(localStorage.getItem("speakers") || "[]");

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Speaker List
        </h1>

        <Link
          to="/dashboard/speaker/create"
          className="bg-pink-500 text-white px-5 py-3 rounded-xl"
        >
          + Tambah Speaker
        </Link>

      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-pink-100">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Photo</th>
              <th className="p-4">Name</th>
              <th className="p-4">Profession</th>
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

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}