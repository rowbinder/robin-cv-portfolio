import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const ExperienceCard = ({ role, company, duration, description, skills, dashboardLink }) => {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
      {/* LinkedIn-style Logo Placeholder */}
      <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
        <Briefcase className="text-gray-400" size={24} />
      </div>

      <div className="flex-1">
        <h3 className="text-md font-bold text-gray-900">{role}</h3>
        <p className="text-sm text-gray-800">{company}</p>
        <p className="text-xs text-gray-500 mb-2">{duration}</p>
        
        <p className="text-sm text-gray-700 leading-normal mb-3 whitespace-pre-line">
          {description}
        </p>

        {/* Dashboard Link for BI Projects */}
        {dashboardLink && (
          <a 
            href={dashboardLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline mb-3"
          >
            <ExternalLink size={14} /> View Power BI Dashboard
          </a>
        )}

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {skills?.map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-medium border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;