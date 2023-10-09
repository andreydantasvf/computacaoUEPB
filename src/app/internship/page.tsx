import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";
import Link from "next/link";

export default function Internship() {
  return (
    <main>
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] w-full h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="" span="Estágio" />

          <Image src='/internship.gif' alt="internship gif" width={400} height={400} className="rounded-xl opacity-75 lg:max-h-72" />

          <div className="flex flex-col gap-8">
            <p>O curso de Bacharelado em Ciência da Computação oferece 01 (uma) disciplina Eletiva de Estágio Supervisionado, totalizando uma carga horária de 360 horas.</p>

            <p>O estágio em Ciência da Computação consiste no desenvolvimento de atividades da área da Ciência da Computação em organizações, sob a supervisão de um de seus profissionais qualificados, cujo nome deverá ser submetido e aprovado pela Coordenação de Estágio. O plano de trabalho deverá justificar um mínimo de 360 horas de atividades, que deverão ser cumpridas em um semestre letivo. Ao final do estágio, o aluno deverá apresentar um relatório e defendê-lo perante comissão designada pela Coordenação de Estágio.</p>

            <p>As etapas são a seguir:</p>

            <p className="font-semibold text-lg">Etapa 1: Documentação (junto a coordenação de estágio e monitoria) (20hs)</p>

            <p>Nesta fase, os alunos deverão preencher e entregar os seguintes documentos:</p>

            <ul className="list-disc px-4 space-y-4">
              <li>Declaração de Matrícula (2 cópias)</li>
              <li><Link href="" target="_blank" className="text-[#1B5B92]">Plano de Estágio</Link>(1 cópia)</li>
              <li><Link href="" target="_blank" className="text-[#1B5B92]">Declaração de Aceite de Supervisão</Link>(1 cópia)</li>
              <li><Link href="" target="_blank" className="text-[#1B5B92]">Termo de Compromisso</Link>(3 cópia)</li>
            </ul>

            <p className="font-semibold text-lg">Etapa 2: Informações Gerais e Revisão (20h)</p>

            <p>O professor fará exposição sobre os conteúdos necessários para o correto andamento do estágio.</p>

            <p className="font-semibold text-lg">Etapa 3: Realização do estágio (300h)</p>

            <p>Os alunos estarão realizando o estágio nas organizações escolhidas. O professor deverá fazer o acompanhamento semanal das atividades previstas no plano de atividades de cada aluno.</p>

            <p className="font-semibold text-lg">Etapa 4: Relatório Final (20h)</p>

            <p>Os alunos deverão produzir e entregar o relatório final de estágio.
              O professor deverá acompanhar a elaboração do relatório final e realizar a avaliação final do aluno.
              Documentos necessário:</p>

            <ul className="list-disc px-4 space-y-4">
              <li><Link href="" target="_blank" className="text-[#1B5B92]">Modelo para Elaboração do Relatório Final</Link></li>
              <li><Link href="" target="_blank" className="text-[#1B5B92]">Modelo para Elaboração de Convalidação de Estágio</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}