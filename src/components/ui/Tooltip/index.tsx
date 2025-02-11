import { BiSolidHelpCircle } from "react-icons/bi";

/**
 * Tooltip component that displays a help icon. On hover, shows a tooltip with the provided text.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.text - The text to display inside the tooltip.
 *
 * @returns JSX element representing the tooltip.
 */
export default function Tooltip({ text }: { text: string }) {
  return (
    <div className="group relative">
      <BiSolidHelpCircle size={18} className="text-teal-900" />
      <div
        role="tooltip"
        className="invisible absolute -top-2 left-1/2 min-w-52 -translate-x-1/2 -translate-y-full rounded-md bg-teal-900 p-2 text-center text-sm text-neutral-100 opacity-0 transition-all after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:border-l-8 after:border-r-8 after:border-t-8 after:border-transparent after:border-t-teal-900 group-hover:visible group-hover:opacity-100"
      >
        {text}
      </div>
    </div>
  );
}
