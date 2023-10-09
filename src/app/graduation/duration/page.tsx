import { TitleSection } from "@/components/TitleSection";

export default function Duration() {
  return (
    <main className="flex-1">
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="Duração do " span="Curso" />

          <div className="flex flex-col gap-8">

            <p>O tempo de conclusão do curso de Bacharelado em Ciência da Computação em conformidade com a Resolução CONSUNI/UEPB 2, DE 19 de fevereiro de 2016 será efetivado mediante a integralização de 3080 (três mil e oitenta) horas, nas quais a articulação teoria-prática garanta, nos termos dos seus projetos pedagógicos, as seguintes dimensões dos componentes comuns:</p>

            <ul className="list-disc p-4 pt-0 space-y-4">
              <li>2.880 (duas mil oitocentos e oitenta) horas de aulas para os conteúdos
                curriculares de natureza científica-cultural; (necessárias para integralização)</li>
              <li>200 (duzentas) horas para outras formas de atividades
                acadêmico-científico-culturais; (necessárias para integralização)</li>
              <li>300 (trezentas) horas para disciplinas optativas de caráter não
                obrigatório. (necessárias para integralização)</li>
              <li>360 (trezentos e sessenta) horas para estágio optativo não obrigatório, que podem dispensar parte do item III.</li>
              <li>90 (noventa) horas para disciplinas optativas de caráter “livre” (em outros cursos da mesma instituição, por exemplo), que podem dispensar parte do item III.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}