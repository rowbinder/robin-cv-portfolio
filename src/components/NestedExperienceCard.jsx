import React from 'react';
import Image from 'next/image';

const NestedExperienceCard = ({ company, logoPath, roles }) => {
  return (
    <div className="flex gap-4 p-5 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors text-left font-sans">
      {/* Company Logo */}
      <div className="w-12 h-12 bg-white border border-gray-100 flex-shrink-0 relative overflow-hidden rounded-sm">
        <Image src={logoPath} alt={`${company} logo`} fill className="object-contain p-1" />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-4">{company}</h3>
        
        {/* Timeline of Roles */}
        <div className="relative border-l-2 border-gray-100 ml-2 pl-6 space-y-8">
          {roles.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
              
              <h4 className="text-md font-bold text-gray-800 leading-tight">{item.role}</h4>
              <p className="text-xs text-gray-500 mb-2">{item.duration}</p>
              
              <p className="text-sm text-gray-700 leading-normal mb-3 whitespace-pre-line">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.skills?.map((skill) => (
                  <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NestedExperienceCard;