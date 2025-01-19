import { RegisterFormData } from "@/schemas/registerSchema";
import RegisterForm from "@/components/forms/RegisterForm";

export default function Register() {
  const handleRegister = (registerData: RegisterFormData) => {
    console.log(registerData);
  };

  return (
    <section className="container grid h-full place-items-center pb-20 pt-12">
      <div className="w-full max-w-lg rounded-md border border-neutral-300 px-4 py-8 shadow-elevated sm:px-12">
        <h1 className="mb-2 text-2xl font-semibold capitalize">Register</h1>
        <p className="mb-4">Please register below in order to login.</p>
        <RegisterForm onSubmit={handleRegister} />
      </div>
    </section>
  );
}
