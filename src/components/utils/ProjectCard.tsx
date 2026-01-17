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
      className="flex flex-col items-center p-4 rounded-xl hover:shadow-lg 
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
      <p className="font-base text-lg space-y-1 text-muted-foreground p-4 text-justify">
        {description}
      </p>
      <Link
        href={link}
        className="mt-auto bg-blue-600 p-4 px-10 text-center rounded-lg 
        text-white font-semibold hover:bg-blue-500 transition hover:scale-105 mb-6"
      >
        Ver projeto
      </Link>
    </div>
  );
};

export default ProjectCard;
