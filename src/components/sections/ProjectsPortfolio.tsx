"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectsPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project>();

  return (
    <section id="projects">
      <div className="min-h-screen text-white p-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="mb-12" variants={fadeUp}>
            <p className="text-[#c9abfa] text-sm font-medium uppercase tracking-wider mb-4">
              My Work
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              My Projects
            </h1>
            <p className="text-gray-400 text-lg">
              My skill reflects itself! Premier style in each distinct task
            </p>
          </motion.div>

          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-8 text-white">Complete SaaS</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-1 gap-20"
              variants={container}
            >
              {projects.saas.map((project) => (
                <motion.div key={project.id} variants={fadeUp}>
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              variants={container}
            >
              {projects.general.map((project) => (
                <motion.div key={project.id} variants={fadeUp}>
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

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