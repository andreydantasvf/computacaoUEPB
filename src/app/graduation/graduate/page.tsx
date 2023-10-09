import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";

export default function Graduate() {
  return (
    <main>
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="Perfil do " span="Egresso" />

          <Image src='/graduate.gif' alt="Gif Hello World" width={400} height={400} className="rounded-xl opacity-100" />

          <div className="flex flex-col gap-6">
            <p>O perfil do profissional formado é o de um cientista de computação. Esse deve reunir conhecimentos básicos para a aplicação da ciência e da tecnologia, para o desenvolvimento tecnológico e desenvolvimento científico, possuir atuação profissional voltada para a qualidade, o compromisso social, compromisso organizacional e a ética.</p>

            <p>O Bacharel em Ciência da Computação terá base interdisciplinar e tecnologicamente generalista, mas com possibilidade de especialização em alguma área de sua escolha, o que permite grande flexibilidade de atuação em várias áreas do conhecimento que requerem o domínio de técnicas computacionais. Deverão possuir capacidade de raciocínio lógico e abstrato, compreender e aplicar conceitos, princípios e práticas essenciais no contexto de cenários bem definidos, mostrando discernimento na seleção e aplicação de técnicas e ferramentas.</p>

            <p>Dentre outras coisas, esse profissional é capaz de projetar, implementar, implantar, manter e operar ambientes computacionais para solucionar problemas nas diversas áreas de aplicação do curso, com sólido embasamento científico-tecnológico.</p>

            <p>Visando o exercício profissional em Computação, em âmbito regional e nacional, o egresso do curso de bacharelado em Ciência da Computação deverá ser capaz de:</p>

            <ul className="list-disc p-4 pt-0 space-y-2">
              <li>Projetar e construir modelos computacionais para aplicações de naturezas diversas;</li>
              <li>Oferecer suporte e gerenciamento no setor tecnológico;</li>
              <li>Desenvolver aplicações para redes de computadores;</li>
              <li>Racionalização, seleção e administração de recursos de hardware;</li>
              <li>Desenvolvimento de interfaces e aplicativos para automação;</li>
              <li>Administração de Bancos de Dados;</li>
              <li>Gerência em Informática, desenvolvendo atividades de planejamento e execução de tarefas pertinentes à área;</li>
              <li>Desenvolvimento de sistemas aplicativos comerciais ou científicos;</li>
              <li>Pesquisa de novos modelos computacionais;</li>
              <li>Pesquisa em áreas afins à computação.</li>
            </ul>

            <p>O mercado de trabalho para o profissional de Ciência da Computação é um dos mais carentes e promissores. Visto que, a necessidade por profissionais especializados e de pesquisadores de novas tecnologias na área cresce diariamente nas empresas interessadas em aplicar a tecnologia da informação como instrumento para automação do seu processo organizacional.</p>

            <p>Assim, o Bacharel em Ciência da Computação pode exercer diversas funções em empresas que utilizem tecnologia da informação, tais como empreendedor, consultor, coordenador de equipe, membro de equipe ou pesquisador. Dentro dessas funções os formandos podem atuar em cargos como engenheiro de software, programador, desenvolvedor, analista de sistema, gerente de projetos, engenheiro de redes, gerente de redes, auditor de sistemas e várias outras denominações de cargos e funções.</p>

            <p>Além da inserção no mercado de trabalho, o aluno egresso tem a possibilidade de seguir seus estudo em um curso de pós-graduação, tanto Lato-Sensu quanto – Especialização, quanto Stricto-Sensu – Mestrado e Doutorado.</p>
          </div>
        </div>
      </section>
    </main>
  )
}