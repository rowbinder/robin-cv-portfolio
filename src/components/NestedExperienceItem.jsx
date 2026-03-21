"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const NestedExperienceCard = ({ company, logoPath, roles = [] }) => {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-200 last:border-0 hover:bg-gray-50/30 transition-colors text-left font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
      {/* 1. Logo */}
      <div className="w-12 h-12 bg-white border border-gray-100 flex-shrink-0 relative overflow-hidden rounded-sm mt-1">
        {logoPath ? (
          <Image src={logoPath} alt={`${company} logo`} fill className="object-contain p-1" />
        ) : (
          <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400 text-[10px] font-bold uppercase">
            {company.substring(0, 2)}
          </div>
        )}
      </div>

      {/* 2. Roles Container */}
      <div className="flex-1 min-w-0">
        <h2 className="text-[16px] font-bold text-gray-900 mb-4">{company}</h2>
        
        {/* The Timeline Line: Adjusted to be more subtle and centered */}
        <div className="relative">
          <div className="absolute left-[3.5px] top-2 bottom-2 w-[2px] bg-gray-200" />
          
          <div className="space-y-8">
            {roles.map((role, index) => (
              <NestedRoleItem key={index} {...role} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NestedRoleItem = ({ role, duration, location = "Melbourne, Australia", description, bullets = [], skills = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasBullets = bullets && bullets.length > 0;

  return (
    <div className="relative pl-7">
      {/* Timeline Dot: Smaller and solid to match your screenshot */}
      <div className="absolute left-0 top-[6px] w-[9px] h-[9px] bg-gray-300 rounded-full z-10 border-2 border-white" />
      
      <div>
        <h3 className="text-[16px] font-semibold text-gray-900 leading-tight">{role}</h3>
        <p className="text-[14px] text-gray-500 mt-0.5">{duration}</p>
        <p className="text-[14px] text-gray-500">{location}</p>
      </div>

      <div className="mt-2">
        <p className={`text-[14px] text-gray-700 leading-normal whitespace-pre-line ${!isExpanded ? 'line-clamp-2 inline' : 'block'}`}>
          {description}
        </p>
        
        {!isExpanded && (hasBullets || (description && description.length > 100)) && (
          <button 
            onClick={() => setIsExpanded(true)}
            className="text-[14px] font-semibold text-gray-500 hover:text-blue-700 ml-1"
          >
            ...see more
          </button>
        )}
      </div>

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

      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[12px] font-medium border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      )}

      {isExpanded && (
        <button 
          onClick={() => setIsExpanded(false)}
          className="text-[14px] font-semibold text-gray-500 hover:text-blue-700 mt-4 block"
        >
          show less
        </button>
      )}
    </div>
  );
};

export default NestedExperienceCard;