import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { BiSolidErrorCircle } from "react-icons/bi";

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  id: string;
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: { message?: string };
}

/**
 * Textarea component that renders a textarea field.
 * Integrates with `react-hook-form` and optionally displays an error message.
 * It also accepts all the default props of a standard HTML `<textarea>`.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.id - The unique ID for the textarea.
 * @param props.label - The text to display as the label for the textarea.
 * @param props.placeholder - The placeholder text to display in the textarea.
 * @param [props.register] - Optional `react-hook-form` register object to bind the textarea to form state.
 * @param [props.error] - Optional error object containing a message to display.
 * @param [props.rest] - Any other props passed to the underlying `textarea` element (i.e. `rows`, `cols`, etc.).
 *
 * @returns JSX element representing the textarea.
 */
export default function Textarea({
  id,
  label,
  placeholder,
  register,
  error,
  ...rest
}: TextareaProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-m font-medium">
        {label}
      </label>

      <div className="relative">
        <textarea
          id={id}
          placeholder={placeholder}
          {...register}
          {...rest}
          className={twMerge(
            "min-h-32 w-full resize-none rounded-md border border-slate-500 p-2 align-top text-m focus:outline-teal-900",
            error && "border-red-700 pr-10 focus:outline-red-700",
          )}
        ></textarea>

        {error && <BiSolidErrorCircle size={24} className="absolute right-2 top-2 text-red-700" />}
      </div>

      {error && (
        <p role="alert" className="text-m font-medium text-red-700">
          {error.message}
        </p>
      )}
    </div>
  );
}
