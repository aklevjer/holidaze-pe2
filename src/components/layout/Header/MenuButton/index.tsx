import { BiMenu, BiX } from "react-icons/bi";

interface MenuButtonProps {
  menuOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MenuButton({ menuOpen, onClick }: MenuButtonProps) {
  return (
    <button aria-label="Menu" aria-expanded={menuOpen} onClick={onClick} className="md:hidden">
      {menuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
    </button>
  );
}
