import Image from "next/image"
import Link from "next/link"
import { MenuButton } from "./MenuButton"
import { Menu } from "./Menu"

export const NavBar = () => {
  return (
    <nav className="w-screen relative lg:flex lg:items-center lg:justify-center p-2">
      <div className="flex items-center justify-center lg:justify-between p-2 lg:max-w-[1200px] lg:w-full">
        <MenuButton />
        <Menu />

        <div className="flex-1 flex items-center justify-center lg:flex-initial lg:order-1">
          <Link href='/'>
            <Image src='/logo.png' alt='Logo Ciência da Computação UEPB' width={256} height={181} className="w-40" />
          </Link>
        </div>
      </div>
    </nav>
  )
}