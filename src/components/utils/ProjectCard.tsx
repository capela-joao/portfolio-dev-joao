import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col items-center md:p-4 rounded-xl hover:shadow-lg 
    transition hover:scale-105"
    >
      <h3 className="font-bold text-xl text-center p-4">{title}</h3>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="object-cover"
      />
      <p className="font-base text-lg space-y-1 text-foreground p-4 text-justify">
        {description}
      </p>
      <div className="flex justify-between gap-2">
        <Link
          href={link}
          className="mt-auto bg-accent hover:bg-accent/80 p-4 px-10 text-center rounded-lg 
          text-text-accent-foreground
          font-semibold transition hover:scale-105 mb-6"
        >
          Ver projeto
        </Link>
        <Link
          href={link}
          className="mt-auto bg-accent hover:bg-accent/80 p-4 px-10 text-center rounded-lg 
          text-text-accent-foreground
          font-semibold transition hover:scale-105 mb-6"
        >
          Ver Repositório
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
