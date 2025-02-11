import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { BiSolidShow, BiSolidHide, BiSolidErrorCircle } from "react-icons/bi";

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: { message?: string };
}

/**
 * PasswordInput component that renders a password field with visibility toggle.
 * Integrates with `react-hook-form` and optionally displays an error message.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.id - The unique ID for the password input.
 * @param props.label - The text to display as the label for the password input.
 * @param props.placeholder - The placeholder text to display in the input field.
 * @param [props.register] - Optional `react-hook-form` register object to bind the password input to form state.
 * @param [props.error] - Optional error object containing a message to display.
 *
 * @returns JSX element representing the password input.
 */
export default function PasswordInput({
  id,
  label,
  placeholder,
  register,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-m font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          placeholder={placeholder}
          {...register}
          className={twMerge(
            "w-full rounded-md border border-slate-500 p-2 pr-10 text-m focus:outline-teal-900",
            error && "border-red-700 pr-10 focus:outline-red-700",
          )}
        />

        {error ? (
          <BiSolidErrorCircle
            size={24}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-red-700"
          />
        ) : (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <BiSolidHide size={20} /> : <BiSolidShow size={20} />}
          </button>
        )}
      </div>

      {error && (
        <p role="alert" className="text-m font-medium text-red-700">
          {error.message}
        </p>
      )}
    </div>
  );
}
