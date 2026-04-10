"use client";
import React, { useRef } from 'react';
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedProjects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const firstCard = scrollRef.current.querySelector('.snap-start');
      const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 0;

      if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth) return;
      if (direction === 'left' && scrollLeft <= 0) return;

      scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Multibag.app",
      tag: "RAG & GenAI",
      underDevelopment: true,
      description: "AI-powered research assistant for Australian listed companies, built using RAG to extract insights from official ASX filings with full source traceability.",
      tech: ["RAG", "GenAI", "Python", "Vector Search"],
      tagStyles: "bg-amber-50 text-amber-700 border-amber-100"
    },
    {
      title: "RitualMind.app",
      tag: "GenAI & Automation",
      underDevelopment: true,
      description: "A smart routine assistant designed to bridge the gap between intent and action. By integrating generative AI, the app moves beyond static lists to offer adaptive scheduling and behavioral nudges, demonstrating a user-centric approach to AI-augmented productivity.",
      tech: ["Natural Language Processing", "GenAI", "Python"],
      tagStyles: "bg-amber-50 text-amber-700 border-amber-100"
    },    
    {
      title: "Victorian COVID-19 Daily Briefing Dashboards",
      tag: "Dashboard",
      description: "Designed high-stakes Power BI reports used by the Premier's Office for daily public briefings, integrating data for case tracking and wastewater surveillance.",
      tech: ["Power BI", "SQL", "ArcGIS"],
      tagStyles: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      title: "Enterprise Data Warehouse Modernization",
      tag: "Architecture",
      description: "Architected the foundational Power BI environment and implemented Data Vault 2.0 methodologies to centralize finance, procurement, and HR data.",
      tech: ["Data Vault 2.0", "Fabric", "Synapse"],
      tagStyles: "bg-emerald-50 text-emerald-700 border-emerald-100"
    }    
  ];

  return (
    <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left mb-3 font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
      {/* Header */}
      <div className="p-4 border-b border-[#e0e0e0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe size={20} className="text-[rgba(0,0,0,0.6)]" />
          <h2 className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)] tracking-tight">Featured Projects</h2>
        </div>
        
        <div className="flex gap-1">
          <button onClick={() => scroll('left')} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft size={20} className="text-[rgba(0,0,0,0.6)]" />
          </button>
          <button onClick={() => scroll('right')} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronRight size={20} className="text-[rgba(0,0,0,0.6)]" />
          </button>
        </div>
      </div>
      
      <div className="relative p-4 overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-full md:w-[calc(50%-8px)] snap-start border border-[#e0e0e0] rounded-xl p-4 hover:shadow-md transition-shadow bg-[#fcfcfc] flex flex-col min-h-[180px]"
            >
              <div className="flex items-start gap-2 mb-2">
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border ${project.tagStyles}`}>
                  {project.tag}
                </span>
                {project.underDevelopment && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border bg-orange-50 text-orange-600 border-orange-200">
                    Under Development
                  </span>
                )}
              </div>
              <h3 className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight mb-2">
                {project.title}
              </h3>
              <p className="text-[14px] text-[rgba(0,0,0,0.7)] leading-[1.42857] mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="text-[12px] text-[rgba(0,0,0,0.6)] bg-gray-100 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;