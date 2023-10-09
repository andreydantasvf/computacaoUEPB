import { News } from "@/components/News";
import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="mt-28">
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

      <section className="mt-10 mb-14">
        <div className="max-w-[1200px] px-4 md:mx-auto flex flex-col items-center gap-4">
          <TitleSection title="Últimas" span="Notícias" />

          <div className="grid grid-cols-1 grid-flow-row gap-10 lg:grid-cols-2 items-center justify-center mt-6">
            <News
              title="Pró-Reitoria de Graduação publica edital de monitoria para componentes curriculares do período letivo 2022.2"
              details="Docentes da Universidade Estadual da Paraíba (UEPB), responsáveis por ministrar componentes curriculares no período letivo 2022.2, poderão solicitar alunos monitores aos seus..."
              link="https://departamentos.uepb.edu.br/comp-ccea/2022/08/22/https-uepb-edu-br-pro-reitoria-de-graduacao-publica-edital-de-monitoria-para-componentes-curriculares-do-periodo-letivo-2022-2/"
            />
            <News
              title="Pró-Reitoria de Graduação divulga 2ª chamada da lista geral de espera do Sistema de Seleção Unificada 2022.1"
              details="A Pró-Reitoria de Graduação (PROGRAD) da Universidade Estadual da Paraíba (UEPB) divulgou nesta quarta-feira (23) a segunda chamada da lista geral de..."
              link="https://departamentos.uepb.edu.br/comp-ccea/2022/03/30/pro-reitoria-de-graduacao-divulga-2a-chamada-da-lista-geral-de-espera-do-sistema-de-selecao-unificada-2022-1/"
            />
            <News
              title="PROGRAD divulga editais para solicitação de reingresso, transferência de câmpus e mudança de turno"
              details="A Pró-Reitoria de Graduação (PROGRAD) da Universidade Estadual da Paraíba (UEPB) divulgou os editais referentes às solicitações de reingresso, transferência de câmpus e..."
              link="https://departamentos.uepb.edu.br/comp-ccea/2022/03/10/prograd-divulga-editais-para-solicitacao-de-reingresso-transferencia-de-campus-e-mudanca-de-turno/"
            />
            <News
              title="Estágio Supervisionado"
              details="O Estágio Supervisionado é definido pela Lei nº. 11.788, de 25 de setembro de 2008, como o ato educativo escolar supervisionado, desenvolvido no ambiente de trabalho, que visa..."
              link="https://departamentos.uepb.edu.br/comp-ccea/2021/07/22/estagio-supervisionado/"
            />
            <News
              title="ENADE 2021"
              details="Com objetivo de avaliar estudantes que estão ingressando ou concluindo cursos de graduação, o Exame Nacional de Desempenho dos Estudantes (Enade) 2021 está marcado para..."
              link="https://departamentos.uepb.edu.br/comp-ccea/2021/07/22/enade-2021/"
            />
            <News
              title="Divulgado o Calendário de TCC I e II para o período 2021.1"
              details="A Coordenação do Curso de Ciências da Computação divulgou nesta terça-feira o calendário de TCC referente ao período 2021.1 CALENDÁRIO TCC 2021.1 ATÉ..."
              link="https://departamentos.uepb.edu.br/comp-ccea/2021/07/11/divulgado-o-calendario-de-tcc-i-e-ii-para-o-periodo-2020-2/"
            />
            <News
              title="Divulgado os Horários de Aulas para 2020.2 - remoto"
              details="A Coordenação do Curso de Ciência da Computação divulgou o horário para 2020.2, que acontecerá de maneira remota. HORÁRIOS - SEMESTRE 2020.2 O horário pode ser obtido..."
              link="https://departamentos.uepb.edu.br/comp-ccea/2021/03/03/divulgado-os-horarios-de-aulas-para-2020-2-remoto/"
            />
            <News
              title="CTIC informa sobre necessidade de e-mail institucional GSuite para utilização de ferramentas digitais do Google"
              details="Diante da aprovação da Resolução UEPB/Consepe/0229/2020, que estabelece normas para a ministração de conteúdo teórico de componentes curriculares de forma remota,..."
              link="https://departamentos.uepb.edu.br/comp-ccea/2020/08/03/ctic-informa-sobre-necessidade-de-e-mail-institucional-gsuite-para-utilizacao-de-ferramentas-digitais-do-google/"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
