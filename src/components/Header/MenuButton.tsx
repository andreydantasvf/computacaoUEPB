import { useMenu } from ".";

export const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button onClick={toggleMenu} className="flex flex-col h-12 w-12 justify-center items-center group lg:hidden">
      <div
        className={`${genericHamburgerLine} ${isMenuOpen
          ? "rotate-45 translate-y-3"
          : "group-hover:opacity-100"
          }`}
      />
      <div
        className={`${genericHamburgerLine} ${isMenuOpen ? "opacity-0" : "group-hover:opacity-100"
          }`}
      />
      <div
        className={`${genericHamburgerLine} ${isMenuOpen
          ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
          : "group-hover:opacity-100"
          }`}
      />
    </button>
  )
}