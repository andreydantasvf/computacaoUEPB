import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";
import Link from "next/link";

export default function Internship() {
  return (
    <main>
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] w-full h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="" span="Contatos" />

          <Image src='/contact.gif' alt="Contact gif" width={400} height={400} className="rounded-xl opacity-75 lg:max-h-72" />

          <div className="flex flex-col gap-8">
            <p className="font-semibold text-lg">Coordenação do Curso de Ciência de Computação / CCEA / Campus VII</p>

            <ul className="list-disc px-4 space-y-4">
              <li>Jucélio Soares dos Santos (Coordenador)</li>
              <li>Rosângela de Araújo Medeiros (Coordenadora Adjunta)</li>
            </ul>

            <p>E-mail: <Link href="coord.computacao.ccea@setor.uepb.edu.br" target="_blank" className="text-[#1B5B92] break-words break-all">coord.computacao.ccea@setor.uepb.edu.br</Link></p>
            <p>Telefones: (83) 3421-1475/3421-3251 Ramal 25</p>
          </div>

          <TitleSection title="Redes" span="Sociais" />

          <div className="flex flex-col gap-8">
            <p>Nossas redes sociais são os canais de comunicação para consulta de informações gerais sobre os eventos que estão acontecendo na Universidade, siga nossos perfis e fique por dentro das atividades e datas em realização no Campus VII:</p>
          
            <ul className="list-disc px-4 space-y-4">
              <li>Curso de Ciência da Computação: <Link href="https://www.instagram.com/computacao.ccea/" target="_blank" className="text-[#1B5B92] break-words break-all">@computacao.ccea</Link></li>
              <li>Congresso Sertanejo de Computação no Instagram: <Link href="https://www.instagram.com/sercomppb/" target="_blank" className="text-[#1B5B92] break-words break-all">@sercomppb</Link></li>
              <li>Associação Atlética Acadêmica de Ciência da Computação: <Link href="https://www.instagram.com/atleticarevoadapb/" target="_blank" className="text-[#1B5B92] break-words break-all">@atleticarevoadauepb</Link></li>
              <li>Acesse a página da <Link href="https://departamentos.uepb.edu.br/comp-ccea/ouvidoria/" target="_blank" className="text-[#1B5B92] break-words break-all">Ouvidoria do curso de Computação do Campus VII</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}