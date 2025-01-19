import { LoginFormData } from "@/schemas/loginSchema";
import LoginForm from "@/components/forms/LoginForm";

export default function Login() {
  const handleLogin = (loginData: LoginFormData) => {
    console.log(loginData);
  };

  return (
    <section className="container grid h-full place-items-center pb-20 pt-12">
      <div className="w-full max-w-md rounded-md border border-neutral-300 px-4 py-8 shadow-elevated sm:px-12">
        <h1 className="mb-2 text-2xl font-semibold capitalize">Login</h1>
        <p className="mb-4">Please enter your details below to login.</p>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </section>
  );
}
