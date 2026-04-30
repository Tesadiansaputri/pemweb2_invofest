import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import FormInput from "../components/FormInput";
import Button from "../components/ui/Button";

const schema = z.object({
    name: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(8, "Email minimal 8 karakter"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string().min(8, "Confirm Password harus diisi"),
});

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <div>
            <form onSubmit={handleSubmit(console.log)}>
            <FormInput text="name" type="text" name="name" register={register} error={errors.name?.message} />  
            <FormInput text="email" type="text" name="email" register={register} error={errors.email?.message} />  
            <FormInput text="password" type="password" name="password" register={register} error={errors.password?.message} />  
            <FormInput text="confirmPassword" type="password" name="confirmPassword" register={register} error={errors.confirmPassword?.message} />  

            <div>
                <Button label="Register" variant="primary" />
            </div>
        </form>
    </div>
  );
}

