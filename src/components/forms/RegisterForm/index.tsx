import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData, registerSchema } from "@/schemas/registerSchema";

import TextInput from "@/components/ui/TextInput";
import PasswordInput from "@/components/ui/PasswordInput";
import Checkbox from "@/components/ui/Checkbox";
import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";

interface RegisterFormProps {
  onSubmit: (registerData: RegisterFormData) => void;
  isPending: boolean;
}

export default function RegisterForm({ onSubmit, isPending }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        id="name"
        type="text"
        label="Username"
        placeholder="Username"
        register={register("name")}
        error={errors.name}
      />

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

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-m font-medium capitalize">Venue manager</span>
          <Tooltip text="Create and manage rental venues. You can update this later in your profile." />
        </div>

        <Checkbox
          id="venueManager"
          label="I want to be a venue manager"
          register={register("venueManager")}
        />
      </div>

      <Button variant="primary" type="submit" isLoading={isPending} className="w-full">
        Register
      </Button>

      <p className="flex flex-wrap gap-1">
        Already have an account?
        <Link to="/login" className="font-semibold capitalize hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
