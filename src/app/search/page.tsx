import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";
import Link from "next/link";

export default function Search() {
  return (
    <main>
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] w-full h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="" span="Pesquisa" />

          <Image src='/search.gif' alt="Eventos gif" width={400} height={400} className="rounded-xl" />

          <div className="flex flex-col gap-8">
            <p className="font-semibold text-lg">Grupo Atlas</p>

            <p>O Grupo ATLAS (Ação das Tecnologias na Aprendizagem Significativa) de pesquisa objetiva consolidar o ensino e mostrar a alunos e professores possibilidades de uma ciência geradora de um trabalho capaz de criar um ambiente que favoreça a formação significativa: um cidadão crítico, responsável e autônomo.</p>

            <p>Crianças com dificuldade de aprendizagem em salas de aulas convencionais, no tocante ao processo de aprendizagem, enfrentam uma série de desafios. Um dos problemas mais significativos nesse processo é a dificuldade de leitura.</p>

            <p>Muitas vezes todo o processo é prejudicado pelo ensino tradicional. Diante disso, é necessário instigar e desenvolver atividades que estimulem a percepção e a memória auditiva, visando a diminuição desse impacto nesses alunos. Isso pode ser feito com a utilização de ferramentas escolhidas e desenvolvidas para se adequar às necessidades de cada um. Algumas dessas são ferramentas terapêuticas que facilitam o processo de aprendizagem por meio do desenvolvimento de habilidades socio­motoras.</p>

            <p>Link para o site do grupo: <Link href="www.projeto-atlas.com" target="_blank" className="text-[#1B5B92] break-words break-all">www.projeto-atlas.com</Link></p>
            <p>CNPq: <Link href="http://dgp.cnpq.br/dgp/espelhogrupo/370830" target="_blank" className="text-[#1B5B92] break-words break-all">http://dgp.cnpq.br/dgp/espelhogrupo/370830</Link></p>
            <p>Contatos via email: <Link href="pesquisa@projeto-atlas.com" target="_blank" className="text-[#1B5B92] break-words break-all">pesquisa@projeto-atlas.com</Link></p>

            <p className="font-semibold text-lg">Grupo GEMCA</p>

            <p>O Grupo de Eletromagnetismo e Matemática Computacional Aplicado (GEMCA) apresenta uma natureza multidisciplinar, envolvendo áreas tais como: Física, Química, Matemática e Computação, em que as pesquisas realizadas pelo grupo são de grande relevância para a comunidade cientifica, convergindo áreas até então independentes entre si.</p>

            <p>O Grupo GEMCA desenvolve pesquisa na grande área do eletromagnetismo aplicado, atuando mais precisamente em três grandes frentes de pesquisa, Antenas Planares, Inteligência Artificial Aplicado a Modelagem de Circuitos/Dispositivos de Micro-ondas e Caracterização de Dispositivos e/ou Circuitos de Micro-ondas com Aplicações em Sistemas de Comunicação Sem Fio.</p>

            <p>Link para o site do grupo: <Link href="www.gemca.webnode.com" target="_blank" className="text-[#1B5B92]">www.gemca.webnode.com</Link></p>
            <p>Contatos via email: <Link href="gemca@ymail.com" target="_blank" className="text-[#1B5B92]">gemca@ymail.com</Link></p>
          </div>
        </div>
      </section>
    </main>
  )
}