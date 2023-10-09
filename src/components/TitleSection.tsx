interface TitleSectionProps {
  title: string;
  span: string;
}

export const TitleSection = ({ title, span }: TitleSectionProps) => {
  return (
    <h2 className="text-[#3DAD99] text-3xl lg:text-5xl">{title} <span className="text-[#1B5B92] font-bold">{span}</span></h2>
  )
}