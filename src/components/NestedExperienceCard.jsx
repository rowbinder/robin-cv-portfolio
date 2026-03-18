"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const NestedExperienceCard = ({ company, logoPath, roles }) => {
  return (
    <div className="flex gap-4 p-5 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors text-left font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
      {/* Company Logo */}
      <div className="w-12 h-12 bg-white border border-gray-100 flex-shrink-0 relative overflow-hidden rounded-sm">
        <Image src={logoPath} alt={`${company} logo`} fill className="object-contain p-1" />
      </div>

      <div className="flex-1">
        <h3 className="text-[18px] font-bold text-gray-900 mb-4">{company}</h3>
        
        {/* Timeline of Roles */}
        <div className="relative border-l-2 border-gray-100 ml-2 pl-6 space-y-8">
          {roles.map((item, index) => (
            <RoleItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Sub-component for individual roles to manage their own "see more" state
const RoleItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
      
      <h4 className="text-[16px] font-bold text-gray-800 leading-tight">{item.role}</h4>
      <p className="text-[12px] text-gray-500 mt-0.5">{item.duration}</p>
      {item.location && <p className="text-[12px] text-gray-500">{item.location}</p>}
      
      <div className="mt-2">
        <p className={`text-[14px] text-gray-700 leading-normal whitespace-pre-line ${!isExpanded ? 'line-clamp-2 inline' : 'block'}`}>
          {item.description}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[14px] font-semibold text-gray-500 hover:text-blue-700 hover:underline ml-1"
        >
          {isExpanded ? '...see less' : '...see more'}
        </button>
      </div>

      {isExpanded && item.skills && (
        <div className="flex flex-wrap gap-2 mt-3 animate-fadeIn">
          {item.skills.map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[12px] font-medium border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedExperienceCard;