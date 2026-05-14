import { Link } from "react-router-dom";

export default function EventList() {

    const events =
        JSON.parse(localStorage.getItem("events") || "[]");

    return (
        <div className="p-6">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Event List
                </h1>

                <Link
                    to="/dashboard/event/create"
                    className="bg-pink-500 text-white px-5 py-3 rounded-xl"
                >
                    + Tambah Event
                </Link>

            </div>

            {/* TABLE */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-pink-100">
                        <tr>
                            <th className="p-4">No</th>
                            <th className="p-4">Poster</th>
                            <th className="p-4">Event Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Speaker</th>
                            <th className="p-4">Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {events.map((item: any, index: number) => (
                            <tr key={item.id} className="border-t">

                                <td className="p-4">{index + 1}</td>

                                <td className="p-4">
                                    <div className="w-20 h-20 bg-pink-100 rounded-xl flex items-center justify-center text-sm text-slate-500">
                                        No Image
                                    </div>
                                </td>

                                <td className="p-4">{item.nama}</td>

                                <td className="p-4">{item.category}</td>

                                <td className="p-4">{item.lokasi}</td>

                                <td className="p-4">{item.tanggal}</td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    );
}