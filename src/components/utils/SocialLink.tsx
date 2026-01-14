import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
  <Link href={href} target="_blank">
    <Image
      src={icon}
      alt="social"
      width={40}
      height={40}
      className="opacity-70 hover:opacity-100 transition"
    />
  </Link>
);

export default SocialLink;
