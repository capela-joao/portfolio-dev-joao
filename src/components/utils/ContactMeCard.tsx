'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface ContactMeCardProps {
  id: number;
  name: string;
  description: string;
  link: string;
  icon?: string;
  darkmode?: string;
}

const ContactMeCard = ({
  id,
  name,
  description,
  link,
  icon,
  darkmode,
}: ContactMeCardProps) => {
  const { theme } = useTheme();

  const currentIcon = theme === 'dark' && darkmode ? darkmode : icon;

  if (!currentIcon) return null;
  return (
    <div
      className="flex items-center justify-center w-full rounded-lg transition-all duration-300 
      hover:scale-105 hover:shadow-md 
    cursor-pointer bg-card mt-2"
    >
      <Link href={link} className="flex gap-2 p-2 md:p-4 w-full max-w-[90%]">
        <Image
          src={currentIcon}
          width={48}
          height={48}
          alt={name}
          className="object-contain"
        />
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-xl text-foreground mb-1">{name}</h3>
          <p className="text-foreground">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContactMeCard;
