import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SpeakerEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // AMBIL DATA DARI BACKEND
  useEffect(() => {
    fetch(`https://be-production-16db.up.railway.app/speakers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setRole(data.role);
        setImage(data.image);
        setIsFetching(false);
      })
      .catch(() => {
        alert("Speaker tidak ditemukan!");
        navigate("/dashboard/speaker");
      });
  }, [id, navigate]);

  // UPDATE KE BACKEND
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return alert("Nama tidak boleh kosong!");
    if (!role.trim()) return alert("Role tidak boleh kosong!");
    if (!image.trim()) return alert("Foto tidak boleh kosong!");

    setIsLoading(true);
    try {
      const response = await fetch(`https://be-production-16db.up.railway.app/speakers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, image }),
      });

      if (!response.ok) throw new Error("Gagal update");

      alert("Speaker berhasil diperbarui!");
      navigate("/dashboard/speaker");
    } catch (error) {
      alert("Gagal memperbarui speaker");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-500 animate-pulse text-sm">Sedang memuat...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-slate-100 mt-10">
      <h1 className="text-2xl font-bold text-[#7B1D3F] mb-6">Edit Speaker</h1>

      <form onSubmit={handleUpdate} className="space-y-5">

        {/* NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            required
          />
        </div>

        {/* ROLE */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            required
          />
        </div>

        {/* IMAGE */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Foto (URL)</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="URL foto..."
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            required
          />
          {image && (
            <img src={image} alt="preview" className="w-20 h-20 rounded-full object-cover mt-2" />
          )}
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-[#7B1D3F] text-white py-3 rounded-lg font-bold hover:bg-[#5a1530] disabled:bg-gray-300"
          >
            {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/speaker")}
            className="flex-1 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            Batal
          </button>
        </div>

      </form>
    </div>
  );
}