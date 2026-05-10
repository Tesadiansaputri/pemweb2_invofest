import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  role: z.string().min(1, "Role harus diisi"),
  foto: z.any(),
});

export default function CreateSpeaker() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Create New Speaker</h1>
      <form onSubmit={handleSubmit(console.log)} className="flex flex-col gap-4">
        <FormInput text="Nama" type="text" name="nama" register={register} error={errors.nama?.message} />
        <FormInput text="Role" type="text" name="role" register={register} error={errors.role?.message} />
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-medium">Foto</label>
          <input
            type="file"
            accept="image/*"
            {...register("foto")}
            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-900"
          />
        </div>
        <Button label="Simpan" variant="primary" />
      </form>
    </div>
  );
}

