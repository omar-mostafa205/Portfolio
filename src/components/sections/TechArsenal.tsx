"use client"
import React from 'react';
import { technologies } from '@/data';
const TechArsenal = () => {

  return (
    <section id="tech">
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl w-full">
        <div className="flex items-center gap-4 mb-16">
          <h1 className="text-5xl font-semibold">
            Tech <span className="text-[#c9abfa]">Arsenal</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-2 flex flex-col items-center justify-center gap-4 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: tech.name === 'Next.js' || tech.name === 'Express' || tech.name === 'Vercel' ? 'invert(1)' : 'none' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl font-bold" style="color: ${tech.color}">${tech.name[0]}</div>`;
                  }}
                />
              </div>
              
              <span className="text-gray-300 text-sm font-medium text-center">
                {tech.name}
              </span>

              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: tech.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default TechArsenal;