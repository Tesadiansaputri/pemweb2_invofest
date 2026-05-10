import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  category: z.string().min(1, "Category harus diisi"),
  lokasi: z.string().min(1, "Lokasi harus diisi"),
  tanggal: z.string().min(1, "Tanggal harus diisi"),
  deskripsi: z.string().min(1, "Deskripsi harus diisi"),
});

export default function CreateEvent() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Create New Event</h1>
      <form onSubmit={handleSubmit(console.log)} className="flex flex-col gap-4">
        <FormInput text="Nama" type="text" name="nama" register={register} error={errors.nama?.message} />
        <FormInput text="Category" type="text" name="category" register={register} error={errors.category?.message} />
        <FormInput text="Lokasi" type="text" name="lokasi" register={register} error={errors.lokasi?.message} />
        <FormInput text="Tanggal" type="date" name="tanggal" register={register} error={errors.tanggal?.message} />
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-medium">Deskripsi</label>
          <textarea
            {...register("deskripsi")}
            className="border rounded px-3 py-2 w-full min-h-24 focus:outline-none focus:ring-2 focus:ring-red-900"
          />
          {errors.deskripsi && <p className="text-red-500 text-sm">{errors.deskripsi.message}</p>}
        </div>
        <Button label="Simpan" variant="primary" />
      </form>
    </div>
  );
}