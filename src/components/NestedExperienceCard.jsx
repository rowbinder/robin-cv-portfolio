"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const NestedExperienceCard = ({ company, logoPath, roles }) => {
  return (
    <div className="flex gap-4 p-4 border-b border-[#e0e0e0] last:border-0 hover:bg-gray-50 transition-colors text-left">
      {/* Company Logo */}
      <div className="w-12 h-12 bg-white border border-[#e0e0e0] flex-shrink-0 relative overflow-hidden rounded-sm">
        <Image src={logoPath} alt={`${company} logo`} fill className="object-contain p-1" />
      </div>

      <div className="flex-1">
        {/* Company Title: Matched to ExperienceCard */}
        <p className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight mb-4">{company}</p>
        
        {/* Timeline of Roles */}
        <div className="relative border-l-2 border-[#f3f2ef] ml-2 pl-6 space-y-6">
          {roles.map((item, index) => (
            <RoleItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RoleItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-[#cbd5e1] rounded-full border-2 border-white"></div>
      
      {/* Role Title: Exactly 16px font-semibold */}
      <p className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight">{item.role}</p>
      
      {/* Duration & Location: 12px Grey */}
      <p className="text-[12px] text-[rgba(0,0,0,0.6)] mt-0.5">
        {item.duration} {item.location && ` • ${item.location}`}
      </p>
      
      <div className="mt-2">
        {/* Description: Exactly 14px text-gray-700 */}
        <p className={`text-[14px] text-gray-700 leading-[1.42857] whitespace-pre-line ${!isExpanded ? 'line-clamp-2 inline' : 'block'}`}>
          {item.description}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[14px] font-semibold text-[rgba(0,0,0,0.6)] hover:text-[#0a66c2] hover:underline ml-1"
        >
          {isExpanded ? '...see less' : '...see more'}
        </button>
      </div>

      {isExpanded && item.skills && (
        <div className="flex flex-wrap gap-2 mt-3 animate-fadeIn">
          {item.skills.map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-[#f3f2ef] text-[rgba(0,0,0,0.6)] rounded text-[12px] font-medium border border-[#e0e0e0]">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedExperienceCard;