import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-[#D2E0FB] w-full p-3 flex items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between">
        <div className="flex items-center justify-between gap-5">
          <Image src="/logoUepb.svg" alt="Logo UEPB" width={120} height={120} />

          <p className="pl-3 border-l-2 border-zinc-500">Desenvolvido por: <span className="font-bold">Andrey Dantas</span></p>
        </div>

        <p className="text-sm lg:text-base lg:max-w-xl">© 2023 UEPB - Universidade Estadual da Paraíba - CNPJ: 12.671.814/0001-37
          Rua Baraúnas, 351 - Bairro Universitário - Campina Grande-PB, CEP 58429-500, Fone/Fax: 83 3315.3300</p>
      </div>
    </footer>
  )
}