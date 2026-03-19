"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ExperienceCard = ({ role, company, duration, location, description, skills, logoPath }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-4 p-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors text-left font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
      {/* Company Logo */}
      <div className="w-12 h-12 bg-white border border-gray-100 flex-shrink-0 relative overflow-hidden rounded-sm">
        {logoPath ? (
          <Image src={logoPath} alt={`${company} logo`} fill className="object-contain p-1" />
        ) : (
          <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400 text-[10px] font-bold uppercase">
            {company.substring(0,2)}
          </div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-[16px] font-semibold text-gray-900 leading-tight">{role}</h3>
        <p className="text-[14px] text-gray-800">{company}</p>
        <p className="text-[12px] text-gray-500 mt-0.5">{duration}</p>
        {location && <p className="text-[12px] text-gray-500">{location}</p>}

        {/*<p className="text-[14px] text-[rgba(0,0,0,0.9)] mt-0.5">{company}</p>
            <p className="text-[14px] text-[rgba(0,0,0,0.6)] mt-0.5">{period}</p>
            <p className="text-[14px] text-[rgba(0,0,0,0.6)]">{location}</p>
       */}
        
        <div className="mt-2">
          {/* The inline/block toggle ensures the 'see more' stays on the 2nd line */}
          <p className={`text-[14px] text-gray-700 leading-normal whitespace-pre-line ${!isExpanded ? 'line-clamp-2 inline' : 'block'}`}>
            {description}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[14px] font-semibold text-gray-500 hover:text-blue-700 hover:underline ml-1"
          >
            {isExpanded ? '...see less' : '...see more'}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-3 animate-fadeIn">
            {skills && (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[12px] font-medium border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;