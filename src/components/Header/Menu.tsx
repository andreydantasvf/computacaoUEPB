import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AiFillCaretRight } from 'react-icons/ai';
import { NavLink } from "./NavLink";
import { useMenu } from ".";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

export const Menu = () => {
  const { isMenuOpen } = useMenu();

  return (
    <div className={`${!isMenuOpen && 'hidden'} w-full lg:w-fit h-[calc(100vh-80px)] lg:h-fit absolute lg:static top-full bg-[#D2E0FB] px-4 py-2 z-20 border-t-2 lg:border-none border-[#2E4374] lg:block lg:order-2`}>
      <ul className="font-semibold text-lg lg:text-base flex flex-col items-center lg:flex-row gap-4">
        <li>
          <NavLink href="/" title="Início" />
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:text-blue-500 transition duration-300 ease-in-out relative after:bg-blue-500 after:absolute after:h-1 after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300">Graduação <AiFillCaretRight /></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#D2E0FB] rounded-xl border border-zinc-400 space-y-2 px-3 lg:mt-3">
              <DropdownMenuItem><NavLink href='/graduation' title='Apresentação do Curso' /></DropdownMenuItem>
              <DropdownMenuItem><NavLink href='/graduation/graduate' title='Perfil do Egresso' /></DropdownMenuItem>
              <DropdownMenuItem><NavLink href='/graduation/curriculum' title='Grade Curricular' /></DropdownMenuItem>
              <DropdownMenuItem><NavLink href='/graduation/duration' title='Duração do Curso' /></DropdownMenuItem>
              <DropdownMenuItem><NavLink href='/graduation/history' title='História' /></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <NavLink href="/teachers" title="Docentes" />
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:text-blue-500 transition duration-300 ease-in-out relative after:bg-blue-500 after:absolute after:h-1 after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300">Semestre Atual<AiFillCaretRight /></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#D2E0FB] rounded-xl border border-zinc-400 space-y-2 px-3 lg:mt-3">
              <DropdownMenuItem><NavLink href='/calendar' title='Calendário Acadêmico' /></DropdownMenuItem>
              <DropdownMenuItem><NavLink href='https://docs.google.com/spreadsheets/d/1z9XziC42Zni7tPGLLbBYPcWOXLeAXT9do6BoEeLPHQ4/edit#gid=1095555404' title='Horário - 2023.2' /></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:text-blue-500 transition duration-300 ease-in-out relative after:bg-blue-500 after:absolute after:h-1 after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300">Atividades<AiFillCaretRight /></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#D2E0FB] rounded-xl border border-zinc-400 space-y-2 px-3 lg:mt-3">
              <DropdownMenuItem><NavLink href='/events' title='Eventos' /></DropdownMenuItem>
              <DropdownMenuItem><NavLink href='/monitor' title='Monitoria' /></DropdownMenuItem>
              <DropdownMenuItem><NavLink href='/search' title='Pesquisa' /></DropdownMenuItem>
              <DropdownMenuItem><NavLink href='/internship' title='Estágio' /></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <NavLink href="/contacts" title="Contatos" />
        </li>
      </ul>
    </div>
  )
}