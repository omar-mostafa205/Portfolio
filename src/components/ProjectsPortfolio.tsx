"use client";

import React, { useState } from 'react';
import { X, ExternalLink, Github, SquareArrowOutUpRight } from 'lucide-react';

const ProjectsPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

   const projects = {
    saas: [
      {
        id: 1,
        name: "Docy",
        image: "/docy.png",
        category: "SaaS Landing Page",
        description: "Transforms your code into structured Abstract Syntax Trees (ASTs) and generates comprehensive AI-powered documentation. Demonstrates advanced backend processing, AI integration, and scalable architecture.",
        liveDemo: "https://docy-demo.com",
        github: "https://github.com/yourusername/docy",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "postgres.png" ,"primsa.svg" , "tree-sitter.png" , "next-auth.png" ]
      },
      {
        id: 2,
        name: "Codelet",
        image: "/codelet.png",
        category: "Web Application",
        description: "AI-powered code tutorial generator. Upload a code snippet and get a detailed, step-by-step AI-generated tutorial. Built with a focus on clean architecture, efficient data handling, and seamless developer experience.",
        liveDemo: "https://codelet-demo.com",
        github: "https://github.com/yourusername/codelet",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "postgres.png" ,"primsa.svg" , "/c.svg" , "query.svg"]
      },

    ],
    general: [
      {
        id: 3,
        name: "Planna",
        image: "/planna.png",
        category: "SaaS Landing Page",
        description: "AI-driven meal planning platform. Generates personalized meal plans based on user preferences and dietary needs. Showcases intelligent algorithm design, React frontend, and optimized state management for smooth UX.",
        liveDemo: "https://planna-demo.com",
        github: "https://github.com/yourusername/planna",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "postgres.png" , "/c.svg"]
      },
      {
        id: 4,
        name: "Codemind",
        image: "/codemind.png",
        category: "SaaS Landing Page",
        description: "Intelligent developer assistant for codebases. Summarizes meetings, analyzes commits, answers codebase queries, and provides actionable AI insights. Highlights expertise in AI-powered backend services, data analysis, and real-time collaboration.",
        liveDemo: "https://codemind-demo.com",
        github: "https://github.com/yourusername/codemind",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "postgres.png" , "/c.svg"]
      },
      {
        id: 5,
        name: "Polish",
        image: "/polish.png",
        category: "Web Application",
        description: "AI-enhanced design polishing tool. Upload UI designs and get AI-suggested improvements, color harmonization, and layout optimization. Demonstrates full-stack proficiency, AI integration, and advanced frontend techniques for visual refinement.",
        liveDemo: "https://polish-demo.com",
        github: "https://github.com/yourusername/polish",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg"]
      }
    ]
  };
  

  const ProjectCard = ({ project }) => (
    <div 
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
    >
      <div 
        className="aspect-[16/10] relative overflow-hidden p-4 flex-1 cursor-pointer" 
        style={{ background: 'linear-gradient(90deg,rgba(19, 22, 47, 1) 0%, rgba(72, 72, 135, 1) 35%, rgba(19, 22, 47, 1) 100%)' }}
        onClick={() => setSelectedProject(project)}
      >
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full rounded-[30px] p-4"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-6xl font-bold">${project.name[0]}</div>`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 bg-[#0a0b22]">
        <div className='flex items-center justify-between mb-4'>
          <h3 className="text-white text-xl font-semibold">{project.name}</h3>
          <div className='flex flex-row items-center gap-3'>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-white" />
            </a>
            <button className="text-[#c9abfa] cursor-pointer flex flex-row items-center gap-2" onClick={() => window.open(project.liveDemo, '_blank')}>
              <SquareArrowOutUpRight className="w-4 h-4 text-[#c9abfa]" />
              <span>Live Demo</span>
            </button> 
          </div>
        </div>
        <p className="text-gray-400 text-md">{project.description}</p>
        <div className="flex items-center gap-2 mt-4">
          {project.iconLists.map((icon, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full bg-[#13162D] border border-white/10 flex items-center justify-center"
            >
              <img src={icon} alt={`tech-${index}`} className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div 
      className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="aspect-[16/9] bg-gray-800 relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover rounded-md"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-8xl font-bold">${project.name[0]}</div>`;
              }}
            />
          </div>
          
          <div className="p-8">
            <div className="mb-4">
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            
            <h2 className="text-white text-4xl font-bold mb-6">{project.name}</h2>
            
            <div className="mb-8">
              <h3 className="text-gray-300 text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-400 text-md leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-700"
              >
                <Github size={20} />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[#c9abfa] text-sm font-medium uppercase tracking-wider mb-4">
            My Work
          </p>
          <h1 className="text-5xl md:text-5xl font-semibold mb-6">
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
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.general.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
  );
};

export default ProjectsPortfolio;