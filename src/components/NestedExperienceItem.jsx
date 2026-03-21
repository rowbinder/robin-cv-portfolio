"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const NestedExperienceItem = ({ company, logoPath, roles = [] }) => {
  return (
    // THE FIX: Reduced gap from 4 to 3 on mobile (gap-3 sm:gap-4)
    <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 border-b border-gray-200 last:border-0 hover:bg-gray-50/30 transition-colors text-left font-sans">
      
      {/* 1. Logo Column */}
      <div className="flex flex-col items-center shrink-0 w-10 sm:w-12 relative">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-100 relative overflow-hidden rounded-sm mt-1 z-20">
          {logoPath ? (
            <Image src={logoPath} alt={`${company} logo`} fill className="object-contain p-1" />
          ) : (
            <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400 text-[10px] font-bold uppercase">
              {company.substring(0, 2)}
            </div>
          )}
        </div>
        
        {/* THE LINE: Centered under the logo (20px on mobile, 24px on desktop) */}
        <div className="absolute top-10 sm:top-12 bottom-4 w-[1.5px] bg-gray-200 z-10" />
      </div>

      {/* 2. Roles Container */}
      <div className="flex-1 min-w-0 pt-1">
        <h2 className="text-[16px] font-bold text-gray-900 mb-4 sm:mb-6">{company}</h2>
        
        <div className="space-y-8 sm:space-y-10">
          {roles.map((roleData, index) => (
            <NestedRoleItem key={index} {...roleData} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NestedRoleItem = ({ role, duration, location, summary, description, bullets = [], skills = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const content = summary || description || "";
  const hasBullets = bullets && bullets.length > 0;

  return (
    <div className="relative">
      {/* THE FIX: Responsive Dot Positioning */}
      {/* Mobile: -left-[24px] | Desktop: sm:-left-[31px] */}
      <div className="absolute -left-[24.5px] sm:-left-[31px] top-[7px] w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-gray-300 rounded-full z-30 border-2 border-white" />
      
      <div>
        <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 leading-tight">{role}</h3>
        <p className="text-[13px] text-gray-500 mt-0.5">{duration}</p>
        <p className="text-[13px] text-gray-500">{location || "Melbourne, Australia"}</p>
      </div>

      <div className="mt-2">
        <div className="text-[14px] text-gray-700 leading-normal">
           <span className={!isExpanded ? "line-clamp-3" : "block whitespace-pre-line"}>
             {content}
           </span>
          
          {!isExpanded && (hasBullets || content.length > 80) && (
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-[#0a66c2] font-semibold hover:underline mt-1 inline-block"
            >
              ...see more
            </button>
          )}
        </div>
      </div>

      {isExpanded && hasBullets && (
        <div className="mt-3 animate-in fade-in duration-300">
          <ul className="space-y-2 mb-4">
            {bullets.map((point, index) => (
              <li key={index} className="flex gap-2 text-[14px] text-gray-700 leading-relaxed">
                <span className="text-gray-400 mt-1 shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills - Responsive spacing */}
      {skills?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
          {skills.map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-[#f3f2ef] text-gray-700 rounded text-[11px] sm:text-[12px] font-medium border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      )}

      {isExpanded && (
        <button 
          onClick={() => setIsExpanded(false)}
          className="text-[#0a66c2] font-semibold hover:underline mt-4 block text-[13px] sm:text-[14px]"
        >
          show less
        </button>
      )}
    </div>
  );
};

export default NestedExperienceItem;