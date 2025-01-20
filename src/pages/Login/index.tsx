import { useLoginUser } from "@/hooks/auth/useLoginUser";
import { LoginFormData } from "@/schemas/loginSchema";

import Alert from "@/components/ui/Alert";
import LoginForm from "@/components/forms/LoginForm";

export default function Login() {
  const { loginUser, isPending, error } = useLoginUser();

  const handleLogin = (loginData: LoginFormData) => {
    loginUser(loginData);
  };

  return (
    <section className="container grid h-full place-items-center pb-20 pt-12">
      <div className="w-full max-w-md rounded-md border border-neutral-300 px-4 py-8 shadow-elevated sm:px-12">
        <h1 className="mb-2 text-2xl font-semibold capitalize">Login</h1>

        {error ? (
          <Alert type="error" message={error.message} className="mb-4" />
        ) : (
          <p className="mb-4">Please enter your details below to login.</p>
        )}

        <LoginForm onSubmit={handleLogin} isPending={isPending} />
      </div>
    </section>
  );
}
