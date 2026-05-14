import { Link } from "react-router-dom";

export default function CategoryList() {

  const categories =
    JSON.parse(localStorage.getItem("categories") || "[]");

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Category List
        </h1>

        <Link
          to="/dashboard/category/create"
          className="bg-pink-500 text-white px-5 py-3 rounded-xl"
        >
          + Tambah Category
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-pink-100">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Category Name</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((item: any, index: number) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{item.name}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}