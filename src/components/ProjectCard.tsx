import React from 'react';
import { Github, SquareArrowOutUpRight } from 'lucide-react';

interface Project {
  id: string | number;
  name: string;
  image: string;
  description: string;
  github: string;
  liveDemo: string;
  iconLists: string[];
}


interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <div 
    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
  >
    <div 
      className="aspect-[16/10] relative overflow-hidden p-4 flex-1 cursor-pointer" 
      style={{ background: 'linear-gradient(90deg,rgba(19, 22, 47, 1) 0%, rgba(72, 72, 135, 1) 35%, rgba(19, 22, 47, 1) 100%)' }}
      onClick={onClick}
    >
      <img 
        src={project.image} 
        alt={project.name}
        
        className="w-full h-full rounded-[30px] p-4 object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-6xl font-bold">${project.name[0]}</div>`;
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6 bg-[#0a0b22]">
      <div className='flex items-center justify-between mb-4'>
        <h3 className="text-white text-xl font-semibold">{project.name}</h3>
        <div className='flex flex-row items-center gap-3'>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 text-white hover:text-[#c9abfa] transition-colors" />
          </a>
          <button 
            className="text-[#c9abfa] cursor-pointer flex flex-row items-center gap-2 hover:text-[#d9bbff] transition-colors" 
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.liveDemo, '_blank');
            }}
          >
            <SquareArrowOutUpRight className="w-4 h-4" />
            <span>Live Demo</span>
          </button> 
        </div>
      </div>
      <p className="text-gray-400 text-md">{project.description}</p>
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        {project.iconLists.map((icon, index) => (
          <div
            key={index}
            className="w-10 h-10 rounded-full bg-[#13162D] border border-white/10 flex items-center justify-center"
          >
            <img  src={icon} alt={`tech-${index}`}  className="w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  </div>
);
