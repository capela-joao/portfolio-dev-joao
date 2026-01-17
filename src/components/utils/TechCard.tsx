import Image from 'next/image';

type TechCardProps = {
  name?: string;
  icon?: string;
};

const TechCard = ({ name, icon }: TechCardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 rounded-xl 
    px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
    >
      <Image
        src={icon || ''}
        alt={name || ''}
        width={40}
        height={40}
        className="select-none"
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default TechCard;
