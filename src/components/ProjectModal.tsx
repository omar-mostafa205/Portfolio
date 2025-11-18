/* eslint-disable @next/next/no-img-element */
import { X , ExternalLink , Github} from 'lucide-react';
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
  onClose: () => void;
}
export const ProjectModal = ({ project, onClose } : ProjectCardProps) => (
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