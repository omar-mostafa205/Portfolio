"use client";

import React, { useState } from 'react';
import { projects } from '@/data';
import { ProjectModal } from '../ProjectModal';
import { ProjectCard } from '../ProjectCard';

interface Project {
  id: string | number;
  name: string;
  image: string;
  description: string;
  github: string;
  liveDemo: string;
  iconLists: string[];
}
const ProjectsPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project>();

  return (
    <section id="projects">
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[#c9abfa] text-sm font-medium uppercase tracking-wider mb-4">
            My Work
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg">
            My skill reflects itself! Premier style in each distinct task
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Complete SaaS</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-20">
            {projects.saas.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.general.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
    </section>
  );
};

export default ProjectsPortfolio;