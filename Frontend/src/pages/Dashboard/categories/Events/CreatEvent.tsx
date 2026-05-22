import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  category: z.string().min(1, "Category harus diisi"),
  speaker: z.string().min(1, "Speaker harus diisi"),
  lokasi: z.string().min(1, "Lokasi harus diisi"),
  tanggal: z.string().min(1, "Tanggal harus diisi"),
  deskripsi: z.string().min(1, "Deskripsi harus diisi"),
});

type FormData = z.infer<typeof schema>;

export default function CreateEvent() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<any[]>([]);
  const [speakers, setSpeakers] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // ambil data dropdown
 useEffect(() => {
  fetch("http://localhost:5000/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data));

  fetch("http://localhost:5000/speakers")
    .then((res) => res.json())
    .then((data) => setSpeakers(data));
}, []);

  const onSubmit = async (data: FormData) => {
  await fetch("http://localhost:5000/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  navigate("/dashboard/event");
};

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Create New Event
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        {/* NAMA */}
        <FormInput
          text="Nama"
          type="text"
          name="nama"
          register={register}
          error={errors.nama?.message}
        />

        {/* CATEGORY DROPDOWN */}
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-medium">
            Category
          </label>

          <select
            {...register("category")}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Pilih Category</option>
            {categories.map((c: any) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className="text-red-500 text-sm">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* SPEAKER DROPDOWN */}
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-medium">
            Speaker
          </label>

          <select
            {...register("speaker")}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Pilih Speaker</option>
            {speakers.map((s: any) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          {errors.speaker && (
            <p className="text-red-500 text-sm">
              {errors.speaker.message}
            </p>
          )}
        </div>

        {/* LOKASI */}
        <FormInput
          text="Lokasi"
          type="text"
          name="lokasi"
          register={register}
          error={errors.lokasi?.message}
        />

        {/* TANGGAL */}
        <FormInput
          text="Tanggal"
          type="date"
          name="tanggal"
          register={register}
          error={errors.tanggal?.message}
        />

        {/* DESKRIPSI */}
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-medium">
            Deskripsi
          </label>

          <textarea
            {...register("deskripsi")}
            className="border rounded px-3 py-2 w-full min-h-24 focus:outline-none focus:ring-2 focus:ring-red-900"
          />

          {errors.deskripsi && (
            <p className="text-red-500 text-sm">
              {errors.deskripsi.message}
            </p>
          )}
        </div>

        <Button label="Simpan" variant="primary" />
      </form>
    </div>
  );
}