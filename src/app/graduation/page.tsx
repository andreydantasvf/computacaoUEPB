import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";

export default function Presentation() {
  return (
    <main>
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="Conheça o curso de" span="Ciência da Computação" />

          <Image src='/gifanimated.gif' alt="Gif Hello World" width={400} height={400} className="rounded-xl" />

          <div className="flex flex-col gap-6">
            <p>O curso de Ciência da Computação da UEPB - Campus VII deve formar profissionais capazes de desenvolver suas atividades nos mais diversos campos do conhecimento humano relacionado à computação, com proficiência, visão crítica e conduta ética.</p>

            <p>Para tal fim, buscará dotar o corpo discente do curso de uma sólida e atualizada formação computacional, de forma que o capacite a resolver os problemas tecnológicos em diversas áreas do conhecimento. Além disso, deve estimular sua capacidade criativa e ampliar sua curiosidade científica para que permita atuação profissional crítica e ética, diante dos fatos, em sintonia com as necessidades regionais e nacionais.</p>

            <p>Durante a realização do curso, o aluno encontrará, portanto situações pedagógicas, estudos de caso, e educadores que buscarão:</p>

            <ul className="list-disc p-4 pt-0 space-y-2">
              <li>Promover uma educação formadora, capaz de mobilizar e gerar atitudes, valores e saberes próprios para uma vida profissional plena e provedora de responsabilidades;</li>
              <li>Fornecer recursos intelectuais com vistas à interdisciplinaridade, a comunicação e a articulação entre as diversas áreas do conhecimento;</li>
              <li>Fornecer subsídios para os egressos utilizarem os avanços da computação com o objetivo de gerar inovações;</li>
              <li>Desenvolver nos egressos a formação em informática com rigor científico, tecnológico, ético, humanístico e didático pedagógico orientando-se pela pesquisa/ação;</li>
              <li>Desenvolver no egresso formação acadêmica necessária para continuidade dos estudos em nível de pós-graduação.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}