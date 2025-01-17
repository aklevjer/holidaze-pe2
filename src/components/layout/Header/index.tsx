import { useState } from "react";
import Logo from "@/components/ui/Logo";
import NavLink from "@/components/ui/NavLink";
import SearchForm from "@/components/forms/SearchForm";
import Navbar from "@/components/layout/Header/Navbar";
import MenuButton from "@/components/layout/Header/MenuButton";
import MobileMenu from "@/components/layout/Header/MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-b-4 border-teal-900 shadow-elevated md:border-none md:shadow-none">
      <div className="container flex h-[70px] items-center justify-between">
        <div className="flex items-center gap-2">
          <MenuButton menuOpen={menuOpen} onClick={openMenu} />
          <Logo asDark />
        </div>

        <SearchForm className="hidden w-full max-w-xs md:flex" />
        <NavLink asDark to="/login" className="md:hidden">
          Login
        </NavLink>
      </div>
      <Navbar />
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
}
