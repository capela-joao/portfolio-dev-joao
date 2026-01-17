import React from 'react';
import ProjectCard from './utils/ProjectCard';
import { ProjectData } from '@/data/arrayProjects';

const Projects = () => {
  return (
    <div className="flex flex-col px-10">
      <h2 className="text-3xl font-semibold mb-10 mt-20">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
