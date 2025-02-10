import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

import Logo from "@/components/ui/Logo";
import NavLink from "@/components/ui/NavLink";
import SearchForm from "@/components/forms/SearchForm";
import Navbar from "@/components/layout/Header/Navbar";
import MenuButton from "@/components/layout/Header/MenuButton";
import UserDropdown from "@/components/layout/Header/UserDropdown";
import MobileMenu from "@/components/layout/Header/MobileMenu";

/**
 * Header component that displays the logo, search form, user dropdown or login link, and navbar.
 *
 * @component
 * @returns JSX element representing the header.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useAuthStore((state) => state.user);

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

        <div className="md:hidden">
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <NavLink asDark to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
      <Navbar user={user} />
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
}
