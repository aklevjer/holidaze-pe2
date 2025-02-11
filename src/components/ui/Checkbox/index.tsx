import { UseFormRegisterReturn } from "react-hook-form";

interface CheckboxProps {
  id: string;
  label: string;
  register?: UseFormRegisterReturn;
}

/**
 * Checkbox component that renders a checkbox input with a label and integrates with `react-hook-form`.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.id - The unique ID for the checkbox input.
 * @param props.label - The text to display as the label for the checkbox.
 * @param [props.register] - Optional `react-hook-form` register object to bind the checkbox to form state.
 *
 * @returns JSX element representing the checkbox.
 */
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
