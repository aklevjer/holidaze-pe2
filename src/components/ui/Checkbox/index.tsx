import { UseFormRegisterReturn } from "react-hook-form";

interface CheckboxProps {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
}

export default function Checkbox({ id, label, register }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        {...register}
        className="size-4 flex-shrink-0 accent-teal-700"
      />

      <label htmlFor={id} className="text-m">
        {label}
      </label>
    </div>
  );
}
