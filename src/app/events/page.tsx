import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";
import Link from "next/link";

export default function Events() {
  return (
    <main>
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="" span="Eventos" />

          <Image src='/events.gif' alt="Eventos gif" width={400} height={400} className="rounded-xl" />

          <div className="flex flex-col gap-8">
            <p className="font-semibold text-lg">SERCOMP (Congresso Sertanejo de Computação)</p>

            <p>O curso de Ciência da Computação da UEPB - Campus VII conta com um evento anual, organizado pela Coordenação em conjunto com o Centro Acadêmico e com o apoio da Direção de centro, o SERCOMP, que reune estudantes de graduação e curso técnico, docentes e pesquisadores interessados em desenvolver aplicações tecnológicas para o sertão paraibano com uma programação conta com  minicursos, palestras, hackathon, apresentações culturais e de trabalhos científicos.</p>

            <p>A página do evento está disponível <Link href="http://sercomppb.com.br/" target="_blank" className="text-[#1B5B92]">AQUI</Link>.</p>

            <p>Acompanhe também o instagram do evento e tenha acesso rápido as informações do evento <Link href="https://www.instagram.com/sercomppb/" target="_blank" className="text-[#1B5B92]">AQUI</Link>.</p>

            <p className="font-semibold">Anais das edições anteriores já estão disponíveis:</p>

            <ul className="list-disc px-4 space-y-4">
              <li><Link href="https://www.pimentacultural.com/livro/sercomp" target="_blank" className="text-[#1B5B92]">SERCOMP 2018;</Link></li>
              <li><Link href="https://www.pimentacultural.com/livro/sercomp-2019" target="_blank" className="text-[#1B5B92]">SERCOMP 2019.;</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}