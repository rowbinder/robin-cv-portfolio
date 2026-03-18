import React from 'react';
import { BarChart3, Database, Globe } from 'lucide-react';

const ProjectCard = ({ title, category, description, techStack }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white text-left">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
          {category === 'Dashboard' ? <BarChart3 size={20} /> : <Database size={20} />}
        </div>
        <h3 className="font-bold text-gray-900 leading-tight">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-2 py-0.5 bg-gray-100 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;