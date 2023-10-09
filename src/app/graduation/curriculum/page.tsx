import { TitleSection } from "@/components/TitleSection";
import Image from "next/image";
import Link from "next/link";

export default function Curriculum() {
  return (
    <main className="flex-1">
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="Atual Grade " span="Curricular" />

          <Link href='/GradeCurricularCCEACC.png' target="_blank">
            <Image src='/GradeCurricularCCEACC.png' alt="Grade Curricular" width={1200} height={800} className="rounded-xl" />
          </Link>
        </div>
      </section>
    </main>
  )
}