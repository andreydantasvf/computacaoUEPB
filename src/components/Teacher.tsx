import Image from "next/image"
import Link from "next/link"

interface TeacherProps {
  name: string;
  level: string;
  area: string;
  email: string;
  image: string;
  curriculum: string;
}

export const Teacher = ({area, level, email, name, curriculum, image}: TeacherProps) => {
  return (
    <Link href={curriculum} target="_blank" className="cursor-pointer bg-white lg:w-[410px] lg:h-80 p-4 rounded-xl shadow-xl hover:scale-110 transform transition duration-300 flex flex-col items-center justify-center gap-3">
      <Image src={image} alt={`Foto de ${name}`} width={150} height={150} className="max-h-40" />

      <div className="flex flex-col gap-2 items-center justify-center">
        <span className="font-bold">{name}</span>

        <div className="space-y-1">
          <p><span className="font-bold">Classe:</span>{level}</p>
          <p><span className="font-bold">Área:</span>{area}</p>
        </div>

        <p>{email}</p>
      </div>
    </Link>
  )
}