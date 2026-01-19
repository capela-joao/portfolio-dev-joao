import Image from 'next/image';
import { useTheme } from 'next-themes';

type TechCardProps = {
  name?: string;
  icon?: string;
  darkmode?: string;
};

const TechCard = ({ name, icon, darkmode }: TechCardProps) => {
  const { theme } = useTheme();

  const currentIcon = theme === 'dark' && darkmode ? darkmode : icon;
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 rounded-xl 
    px-4 md:px-6 py-2 md:py-4 transition-all duration-300 hover:scale-105 hover:shadow-md 
    cursor-pointer bg-card"
    >
      <Image
        src={currentIcon || ''}
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
