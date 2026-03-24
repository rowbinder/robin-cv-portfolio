"use client";
import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full bg-white border-b border-gray-200 pt-8 pb-8 sm:pt-12 sm:pb-12 px-4 sm:px-6 font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
        
        {/* Profile Image - Responsive Circle */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-gray-100">
            <img 
              src="/avatar.png" 
              alt="Robin" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Status Dot */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
        </div>

        {/* Text Content - Centered on mobile, Left on desktop */}
        <div className="flex-1 text-center sm:text-left">
          <div className="mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Robin
            </h1>
            <p className="text-[#0a66c2] font-semibold text-sm sm:text-base mt-1">
              Top Data Voice | Project Manager | BI Consultant
            </p>
          </div>

          <p className="text-[16px] sm:text-[18px] text-gray-700 leading-snug mb-4 max-w-2xl">
            Specializing in Central Data Warehousing, GenAI strategy, and Data Vault 2.0. 
            Helping organizations transform raw data into strategic assets.
          </p>

          {/* Location & Contact */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-y-2 gap-x-4 text-[14px] text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Point Cook, Melbourne</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <a href="mailto:robin@example.com" className="hover:text-[#0a66c2] hover:underline">Contact</a>
            </div>
          </div>

          {/* Buttons - Stacked on Mobile, Row on Desktop */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-2 bg-[#0a66c2] text-white font-bold rounded-full hover:bg-[#084d91] transition-all text-[15px] active:scale-95">
              Contact Info
            </button>
            <button className="px-6 py-2 border-2 border-[#0a66c2] text-[#0a66c2] font-bold rounded-full hover:bg-blue-50 transition-all text-[15px] active:scale-95">
              LinkedIn Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;