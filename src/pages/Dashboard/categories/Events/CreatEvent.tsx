import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  categoryId: z.string().min(1, "Category harus diisi"),
  speakerId: z.string().min(1, "Speaker harus diisi"),
  location: z.string().min(1, "Lokasi harus diisi"),
  dateEvent: z.string().min(1, "Tanggal harus diisi"),
  description: z.string().min(1, "Deskripsi harus diisi"),
});

type FormData = z.infer<typeof schema>;

export default function CreateEvent() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<any[]>([]);
  const [speakers, setSpeakers] = useState<any[]>([]);

  // AMBIL DROPDOWN DARI BACKEND
  useEffect(() => {
    fetch("https://be-production-16db.up.railway.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []));

    fetch("https://be-production-16db.up.railway.app/speakers")
      .then((res) => res.json())
      .then((data) => setSpeakers(Array.isArray(data) ? data : []));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://be-production-16db.up.railway.app/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          categoryId: Number(data.categoryId),
          location: data.location,
          dateEvent: data.dateEvent,
          description: data.description,
        }),
      });

      if (!response.ok) throw new Error("Gagal menyimpan");

      navigate("/dashboard/event");
    } catch (error) {
      alert("Gagal menyimpan event, coba lagi.");
    }
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Create New Event</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        {/* NAMA */}
        <FormInput
          text="Nama Event"
          type="text"
          name="name"
          register={register}
          error={errors.name?.message}
        />

        {/* CATEGORY DROPDOWN */}
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-medium">Category</label>
          <select
            {...register("categoryId")}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Pilih Category</option>
            {categories.map((c: any) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          {errors.categoryId && (
            <p className="text-red-500 text-sm">{errors.categoryId.message}</p>
          )}
        </div>

        {/* SPEAKER DROPDOWN */}
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-medium">Speaker</label>
          <select
            {...register("speakerId")}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Pilih Speaker</option>
            {speakers.map((s: any) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          {errors.speakerId && (
            <p className="text-red-500 text-sm">{errors.speakerId.message}</p>
          )}
        </div>

        {/* LOKASI */}
        <FormInput
          text="Lokasi"
          type="text"
          name="location"
          register={register}
          error={errors.location?.message}
        />

        {/* TANGGAL */}
        <FormInput
          text="Tanggal"
          type="date"
          name="dateEvent"
          register={register}
          error={errors.dateEvent?.message}
        />

        {/* DESKRIPSI */}
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-medium">Deskripsi</label>
          <textarea
            {...register("description")}
            className="border rounded px-3 py-2 w-full min-h-24 focus:outline-none focus:ring-2 focus:ring-red-900"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <Button label="Simpan" variant="primary" />
      </form>
    </div>
  );
}