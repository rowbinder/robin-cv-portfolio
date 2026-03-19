"use client";
import React, { useState } from 'react';

const ExperienceItem = ({ 
  title, 
  company, 
  period, 
  projectName, 
  summary, 
  bullets = [], 
  skills = [], 
  logoUrl, 
  location = "Melbourne, Australia" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasBullets = bullets && bullets.length > 0;
  const hasSkills = skills && skills.length > 0;

  return (
    <div className="flex gap-4 p-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors text-left font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
      
      {/* 1. Logo Section */}
      <div className="w-12 h-12 bg-white border border-gray-100 flex-shrink-0 relative overflow-hidden rounded-sm">
        {logoUrl ? (
          <img src={logoUrl} alt={`${company} logo`} className="w-full h-full object-contain p-1" />
        ) : (
          <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400 text-[10px] font-bold uppercase">
            {company ? company.substring(0,2) : "RS"}
          </div>
        )}
      </div>

      {/* 2. Content Section */}
      <div className="flex-1 min-w-0">
        <div>
          <h3 className="text-[16px] font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-[14px] text-gray-800">{company}</p>
          <p className="text-[14px] text-gray-500 mt-0.5">{period}</p>
          {location && <p className="text-[14px] text-gray-500">{location}</p>}
          
          {projectName && (
            <p className="text-[14px] text-[#057642] font-semibold mt-1">
              Project: {projectName}
            </p>
          )}
        </div>

        {/* 3. Summary & Expand Toggle */}
        <div className="mt-2">
          <p className={`text-[14px] text-gray-700 leading-normal whitespace-pre-line ${!isExpanded ? 'line-clamp-2 inline' : 'block'}`}>
            {summary}
          </p>
          
          {!isExpanded && hasBullets && (
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-[14px] font-semibold text-gray-500 hover:text-blue-700 ml-1"
            >
              ...see more
            </button>
          )}
        </div>

        {/* 4. Expanded Content: Bullets */}
        {isExpanded && hasBullets && (
          <div className="mt-3 animate-fadeIn">
            <ul className="space-y-2 mb-4">
              {bullets.map((point, index) => (
                <li key={index} className="flex gap-2 text-[14px] text-gray-700 leading-relaxed">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 5. Skills Section - Always visible, but placed at the bottom */}
        {hasSkills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[12px] font-medium border border-gray-200">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* 6. Show Less Button (Appears after the skills when expanded) */}
        {isExpanded && (
           <button 
           onClick={() => setIsExpanded(false)}
           className="text-[14px] font-semibold text-gray-500 hover:text-blue-700 mt-4 block"
         >
           show less
         </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;