import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/schemas/loginSchema";

import TextInput from "@/components/ui/TextInput";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";

interface LoginFormProps {
  onSubmit: (loginData: LoginFormData) => void;
  isPending: boolean;
}

/**
 * LoginForm component that allows users to login with their email and password.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.onSubmit - Function to handle form submission with login data.
 * @param props.isPending - Whether the login request is in progress.
 *
 * @returns JSX element representing the login form.
 */
export default function LoginForm({ onSubmit, isPending }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="email@stud.noroff.no"
        register={register("email")}
        error={errors.email}
      />

      <PasswordInput
        id="password"
        label="Password"
        placeholder="Password"
        register={register("password")}
        error={errors.password}
      />

      <Button variant="primary" type="submit" isLoading={isPending} className="w-full">
        Login
      </Button>

      <p className="flex flex-wrap gap-1">
        Don't have an account?
        <Link to="/register" className="font-semibold capitalize hover:underline">
          Register now
        </Link>
      </p>
    </form>
  );
}
