"use client";

import { createContext, useContext, useState } from "react";
import { NavBar } from "./NavBar"

interface NavBarContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavBarContext = createContext<NavBarContextProps | undefined>(undefined);

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const contextValue: NavBarContextProps = {
    isMenuOpen: showMobileMenu,
    toggleMenu: () => setShowMobileMenu(prev => !prev),
  }

  return (
    <header className="bg-[#D2E0FB] w-full h-20 flex items-center justify-center fixed top-0 z-20">
      <NavBarContext.Provider value={contextValue}>
        <NavBar />
      </NavBarContext.Provider>
    </header>
  )
}

export function useMenu() {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}