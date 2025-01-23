import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { BiSolidShow, BiSolidHide, BiSolidErrorCircle } from "react-icons/bi";

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: { message?: string };
}

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
