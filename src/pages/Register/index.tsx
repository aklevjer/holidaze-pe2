import { useRegisterUser } from "@/hooks/auth/useRegisterUser";
import { useLoginUser } from "@/hooks/auth/useLoginUser";
import { RegisterFormData } from "@/schemas/registerSchema";

import Page from "@/components/layout/Page";
import Alert from "@/components/ui/Alert";
import RegisterForm from "@/components/forms/RegisterForm";

/**
 * Register component that renders the Register page with a form to submit registration details.
 *
 * @component
 * @returns JSX element representing the Register page.
 */
export default function Register() {
  const { registerUser, isPending: registerPending, error: registerError } = useRegisterUser();
  const { loginUser, isPending: loginPending, error: loginError } = useLoginUser();

  const isPending = registerPending || loginPending;
  const error = registerError || loginError;

  /**
   * Handles the form submission to register a user and logs them in upon successful registration.
   *
   * @param registerData - The data submitted from the register form.
   */
  const handleRegister = (registerData: RegisterFormData) => {
    registerUser(registerData, {
      onSuccess: (_, { email, password }) => {
        loginUser({ email, password });
      },
    });
  };

  return (
    <Page
      title="Register"
      description="Register on Holidaze to book unique stays or list your space with travelers."
    >
      <section className="container grid h-full place-items-center pb-20 pt-12">
        <div className="w-full max-w-lg rounded-md border border-neutral-300 px-4 py-8 shadow-elevated sm:px-12">
          <h1 className="mb-2 text-3xl font-semibold capitalize">Register</h1>

          {error ? (
            <Alert type="error" message={error.message} className="mb-4" />
          ) : (
            <p className="mb-4">Please register below in order to login.</p>
          )}

          <RegisterForm onSubmit={handleRegister} isPending={isPending} />
        </div>
      </section>
    </Page>
  );
}
