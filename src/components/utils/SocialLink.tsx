import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: string | LucideIcon;
}) => {
  const IconComponent = icon as LucideIcon;
  const isLucideIcon = typeof icon !== 'string';

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {isLucideIcon ? (
        <IconComponent
          size={40}
          className="opacity-70 hover:opacity-100 transition"
        />
      ) : (
        <Image
          src={icon as string}
          alt="social"
          width={40}
          height={40}
          className="opacity-70 hover:opacity-100 transition"
        />
      )}
    </Link>
  );
};

export default SocialLink;
