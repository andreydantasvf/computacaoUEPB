import Link from "next/link";
import { HiPlus } from 'react-icons/hi';

interface NewsProps {
  title: string;
  details: string;
  link: string;
}

export const News = ({ title, details, link }: NewsProps) => {
  return (
    <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-xl shadow-xl hover:scale-110 transform transition duration-300">
      <Link href={link} target="_blank" className="font-semibold text-black hover:text-[#1B5B92]">{title}</Link>
      <p className="text-zinc-900 text-sm">{details}</p>
      <Link href={link} target="_blank" className="bg-white border rounded-full py-2 px-3 text-sm text-zinc-700 hover:text-[#1B5B92] font-semibold self-end flex items-center gap-1">
        <span className="font-bold text-lg text-[#1B5B92]">
          <HiPlus />
        </span>
        Saiba Mais
      </Link>
    </div>
  )
}