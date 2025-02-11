import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { BiSolidErrorCircle } from "react-icons/bi";

interface TextInputProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string;
  type: "text" | "email" | "number" | "url";
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: { message?: string };
  children?: React.ReactNode;
}

/**
 * TextInput component that renders a customizable text input field.
 * Integrates with `react-hook-form` and optionally displays an error message.
 * It also accepts all the default props of a standard HTML `<input>`.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.id - The unique ID for the text input.
 * @param props.type - The type of text input (i.e. text, email, number, url).
 * @param props.label - The text to display as the label for the text input.
 * @param props.placeholder - The placeholder text to display in the text input.
 * @param [props.register] - Optional `react-hook-form` register object to bind the text input to form state.
 * @param [props.error] - Optional error object containing a message to display.
 * @param [props.children] - Optional content to be rendered beside the text input (i.e. icons or buttons).
 * @param [props.rest] - Any other props passed to the underlying `input` element (i.e. `maxLength`, `autoFocus`).
 *
 * @returns JSX element representing the text input.
 */
export default function TextInput({
  id,
  type,
  label,
  placeholder,
  register,
  error,
  children,
  ...rest
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-m font-medium">
        {label}
      </label>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            {...register}
            {...rest}
            className={twMerge(
              "w-full rounded-md border border-slate-500 p-2 text-m outline-none focus:ring-1 focus:ring-teal-900",
              error && "border-red-700 pr-10 focus:ring-red-700",
            )}
          />

          {error && (
            <BiSolidErrorCircle
              size={24}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-red-700"
            />
          )}
        </div>

        {children}
      </div>

      {error && (
        <p role="alert" className="text-m font-medium text-red-700">
          {error.message}
        </p>
      )}
    </div>
  );
}
