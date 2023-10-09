import Link from "next/link"
import { useMenu } from ".";

interface NavLinkProps {
  href: string;
  title: string;
}
export const NavLink = ({ href, title }: NavLinkProps) => {
  const { toggleMenu } = useMenu();

  return (
    <Link onClick={toggleMenu} className="font-semibold text-lg lg:text-base hover:text-blue-800 transition duration-300 ease-in-out relative pb-2 after:bg-blue-500 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href={href}>{title}</Link>
  )
}