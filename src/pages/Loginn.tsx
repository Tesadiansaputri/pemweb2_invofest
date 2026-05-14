import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import FormInput from "../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password harus minimal 8 angka"),
});

type FormSchema = z.infer<typeof schema>;

export default function Loginn() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login); // ✅ Tetap pakai

    const onSubmit = (data: FormSchema) => {
        if (data.email === "admin@gmail.com" && data.password === "password123") {
            login(data.email); // ✅ Panggil login dari store
            alert("Login Sukses");
            navigate("/dashboard");
        } else {
            alert("Login Gagal");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput text="email" type="text" name="email" register={register} error={errors.email?.message} />
                <FormInput text="password" type="password" name="password" register={register} error={errors.password?.message} />
                <div>
                    <Button label="Login" variant="primary" />
                </div>
            </form>
            <p className="mt-6">
                Belum punya akun?
                <Link to="/register">Klik</Link>
            </p>
        </div>
    );
}