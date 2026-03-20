"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const ExperienceCard = ({ company, role, period, description, achievements }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-l-4 border-[#0a66c2] bg-white p-6 mb-6 shadow-sm rounded-r-lg transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{role}</h3>
          <p className="text-[#0a66c2] font-semibold">{company}</p>
          <p className="text-sm text-gray-500 mt-1 italic">{period}</p>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#0a66c2] hover:bg-blue-50 p-2 rounded-full transition-colors"
        >
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      <p className="text-gray-700 mt-4 leading-relaxed">
        {description}
      </p>

      {/* Expandable Section */}
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <h4 className="font-bold text-gray-800 mb-4 border-b pb-2">Key Responsibilities & Achievements:</h4>
        <ul className="space-y-4">
          {achievements.map((item, index) => (
            <li key={index} className="flex gap-3 text-gray-700 leading-relaxed">
              <CheckCircle2 size={18} className="text-[#057642] shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-[13px] font-bold text-[#0a66c2] hover:underline flex items-center gap-1"
      >
        {isExpanded ? "Show Less" : "View Full Details & Achievements"}
      </button>
    </div>
  );
};

export default ExperienceCard;