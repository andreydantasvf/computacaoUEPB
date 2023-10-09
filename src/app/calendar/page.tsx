import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from 'react-icons/bi';

export default function Calendar() {
  return (
    <main className="flex-1">
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="" span="Calendário Acadêmico" />

          <Image src='/calendar.gif' alt="Calendario gif" width={400} height={400} className="rounded-xl" />

          <Link href="https://uepb.edu.br/prograd/download/calendario-academico-2023-2/" target="_blank" className="font-bold text-[#1B5B92] flex items-center gap-2">Confira o calendário Acadêmico de 2023.2 <BiLinkExternal /></Link>

          <div className="flex flex-col gap-8">
            <p className="font-semibold">Calendário Universitário</p>

            <p>A cada ano letivo, a PROGRAD apresenta ao CONSEPE uma proposta de Calendário que, depois de apreciada e aprovada, por meio de resolução específica, deve ter uma divulgação ampla junto à comunidade acadêmica.</p>

            <p>Os prazos estabelecidos no Calendário Universitário devem ser rigorosamente cumpridos.</p>

            <p>O ano letivo regular, independente do ano civil, tem, no mínimo, 200 dias de trabalho acadêmico efetivo, excluído o tempo reservado aos exames finais.</p>

            <p className="font-semibold">Unidades Temáticas</p>

            <p>As atividades didáticas são planejadas em Unidades Temáticas que são desenvolvidas a cada cinqüenta dias letivos.</p>

            <p>Os componentes curriculares de oferta anual serão desenvolvidos através de quatro Unidades Temáticas. Já aqueles de oferta semestral serão desenvolvidos em apenas duas Unidades Temáticas na forma descrita acima.</p>

            <p>No final de cada Unidade Temática será atribuída uma nota que corresponde ao aproveitamento do aluno no Componente Curricular. Esta nota será o resultado de, no mínimo, duas atividades de verificação da aprendizagem.</p>
          </div>
        </div>
      </section>
    </main>
  )
}