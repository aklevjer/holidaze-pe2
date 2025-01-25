import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { BiSolidErrorCircle } from "react-icons/bi";

interface TextInputProps {
  id: string;
  type: "text" | "email" | "number";
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: { message?: string };
}

export default function TextInput({
  id,
  type,
  label,
  placeholder,
  register,
  error,
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-m font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register}
          className={twMerge(
            "w-full rounded-md border border-slate-500 p-2 text-m focus:outline-teal-900",
            error && "border-red-700 pr-10 focus:outline-red-700",
          )}
        />

        {error && (
          <BiSolidErrorCircle
            size={24}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-red-700"
          />
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
