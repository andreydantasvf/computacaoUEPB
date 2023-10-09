import { TitleSection } from "@/components/TitleSection";
import Link from "next/link";

export default function Monitor() {
  return (
    <main className="flex-1">
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="" span="Monitoria" />

          <div className="flex flex-col gap-8">
            <p className="font-semibold text-lg">Lista de Monitores</p>

            <p>Uma modalidade de ensino desenvolvida por um discente e supervisionada por um docente, para que o discente possa adquirir práticas docentes auxiliando o docente nas aulas e ajudando os alunos.</p>

            <p>O edital de monitoria e anexos estão disponíveis <Link href="https://uepb.edu.br/pro-reitoria-de-graduacao-divulga-edital-para-selecao-do-programa-de-monitoria-do-semestre-letivo-2023-2/" target="_blank" className="text-[#1B5B92]">AQUI</Link>, mas quaisquer dúvidas podem ser resolvidas entrando em contato com a coordenação de Monitoria.</p>

            <p><span className="font-semibold">E-mail:</span>monitoriaestagioccea@gmail.com</p>

            <p className="font-semibold text-lg">Seleção 2023.2 - Resultado Final</p>

            <p>Para visualizar resultado completo da seleção clique<Link href="https://uepb.edu.br/pro-reitoria-de-graduacao-divulga-edital-para-selecao-do-programa-de-monitoria-do-semestre-letivo-2023-2/" target="_blank" className="text-[#1B5B92]">AQUI</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  )
}