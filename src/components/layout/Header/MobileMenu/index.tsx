import { Dialog, DialogPanel } from "@headlessui/react";
import { NAV_LINKS } from "@/constants/links";

import Logo from "@/components/ui/Logo";
import MenuButton from "@/components/layout/Header/MenuButton";
import SearchForm from "@/components/forms/SearchForm";
import NavLink from "@/components/ui/NavLink";

interface MobileMenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ menuOpen, closeMenu }: MobileMenuProps) {
  return (
    <Dialog open={menuOpen} onClose={closeMenu} className="md:hidden">
      <DialogPanel className="fixed inset-0 space-y-6 bg-teal-900 py-4 text-neutral-100">
        <div className="mx-4 flex justify-between">
          <Logo />
          <MenuButton menuOpen={menuOpen} onClick={closeMenu} />
        </div>

        <SearchForm onSearch={closeMenu} className="mx-4" />

        <nav>
          <ul className="divide-y divide-slate-700 border-y border-slate-700">
            {NAV_LINKS.MAIN.map(({ path, label }) => (
              <li key={label} className="p-4">
                <NavLink to={path} onClick={closeMenu}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </DialogPanel>
    </Dialog>
  );
}
