import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [location, setLocation] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [description, setDescription] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  // AMBIL DATA DARI BACKEND
  useEffect(() => {
    // Ambil data event
    fetch(`https://be-production-16db.up.railway.app/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setCategoryId(String(data.categoryId));
        setLocation(data.location);
        setDateEvent(data.dateEvent?.split("T")[0]); // format YYYY-MM-DD
        setDescription(data.description);
        setIsFetching(false);
      })
      .catch(() => {
        alert("Event tidak ditemukan!");
        navigate("/dashboard/event");
      });

    // Ambil dropdown category
    fetch("https://be-production-16db.up.railway.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []));
  }, [id, navigate]);

  // UPDATE KE BACKEND
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return alert("Nama tidak boleh kosong!");
    if (!categoryId) return alert("Category tidak boleh kosong!");
    if (!location.trim()) return alert("Lokasi tidak boleh kosong!");
    if (!dateEvent) return alert("Tanggal tidak boleh kosong!");
    if (!description.trim()) return alert("Deskripsi tidak boleh kosong!");

    setIsLoading(true);
    try {
      const response = await fetch(`https://be-production-16db.up.railway.app/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          categoryId: Number(categoryId),
          location,
          dateEvent,
          description,
        }),
      });

      if (!response.ok) throw new Error("Gagal update");

      alert("Event berhasil diperbarui!");
      navigate("/dashboard/event");
    } catch (error) {
      alert("Gagal memperbarui event");
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
      <h1 className="text-2xl font-bold text-[#7B1D3F] mb-6">Edit Event</h1>

      <form onSubmit={handleUpdate} className="space-y-5">

        {/* NAMA */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Nama Event</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            required
          />
        </div>

        {/* CATEGORY */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Category</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
          >
            <option value="">Pilih Category</option>
            {categories.map((c: any) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* LOKASI */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Lokasi</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            required
          />
        </div>

        {/* TANGGAL */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Tanggal</label>
          <input
            type="date"
            value={dateEvent}
            onChange={(e) => setDateEvent(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            required
          />
        </div>

        {/* DESKRIPSI */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1D3F] min-h-24"
            required
          />
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
            onClick={() => navigate("/dashboard/event")}
            className="flex-1 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            Batal
          </button>
        </div>

      </form>
    </div>
  );
}