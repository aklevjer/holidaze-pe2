import { BiMenu, BiX } from "react-icons/bi";

interface MenuButtonProps {
  menuOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * MenuButton component that toggles the mobile menu visibility.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.menuOpen - Whether the mobile menu is currently open.
 * @param props.onClick - The event handler to toggle the menu.
 *
 * @returns JSX element representing the menu button.
 */
export default function MenuButton({ menuOpen, onClick }: MenuButtonProps) {
  return (
    <button aria-label="Menu" aria-expanded={menuOpen} onClick={onClick} className="md:hidden">
      {menuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
    </button>
  );
}
