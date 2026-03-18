"use client";
import React, { useState } from 'react';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import NestedExperienceCard from '@/components/NestedExperienceCard';
import CertificationCard from '@/components/CertificationCard';
import { 
  Download, 
  GraduationCap, 
  Award, 
  BrainCircuit, 
  CheckCircle2, 
  Globe, 
  BarChart3, 
  Database, 
  Cloud, 
  Zap, 
  Mail, 
  MapPin, 
  Cpu, 
  Briefcase, 
  ExternalLink,
  Phone,
  Linkedin 
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <main className="min-h-screen bg-[#f3f2ef] py-5 px-4">
      <div className="max-w-[1128px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 space-y-3">
          
          {/* Profile Card with Custom Banner */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-6">
              {/* Custom Banner Image */}
              <div className="h-40 relative w-full">
                <Image 
                  src="/banner.jpg" 
                  alt="Professional Banner" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-6 pb-6 text-left">
                <div className="flex justify-between items-end">
                  <div className="relative -mt-20 mb-4 inline-block">
                    <div className="w-40 h-40 bg-white rounded-full border-4 border-white overflow-hidden shadow-md relative">
                      <Image src="/profile.jpg" alt="Robin Singh" fill className="object-cover" />
                    </div>
                  </div>                
                </div>

                <h1 className="text-2xl font-bold text-gray-900">Robin Singh</h1>
                <p className="text-gray-700 text-lg font-medium">
                  Business Intelligence Strategist | Data Migration & Integration Lead | Delivering Unified Analytics Across Sectors
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <span>Greater Melbourne Area</span>
                  {/* <span className="text-blue-700 font-bold hover:underline cursor-pointer ml-1">• Contact info</span> */}
                </div>
              </div>
            </div>

          {/* LinkedIn About Section */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left mb-6 font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
            <h2 className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)] mb-4">About</h2>
            <div className="text-[14px] text-[rgba(0,0,0,0.9)] leading-[1.42857]">
              {/* Use backticks ` to wrap your text to keep paragraphs naturally */}
              <p className={`whitespace-pre-line ${!isAboutExpanded ? 'line-clamp-4' : ''}`}>
                {`With over 20 years of experience in business intelligence, data migration, and enterprise reporting, I specialize in modernizing legacy systems and building unified analytics ecosystems that drive strategic decision-making. My career spans telecom, retail, healthcare, and government sectors, where I’ve consistently delivered high-impact solutions by bridging business needs with scalable technical architectures.

                At The Salvation Army, I led the design and implementation of a centralized data warehouse and Power BI environment, integrating platforms like TechOne, Coupa, Workday, and ServiceNow. I introduced Data Vault 2.0 modeling, authored interface specifications, and enabled cross-functional reporting across finance, procurement, HR, and operations.

                Previously, I supported the Victorian Government’s COVID-19 response with mission-critical dashboards and geospatial analytics, and at Telstra, I drove IFRS15 compliance reporting, NBN rollout analytics, and finance data strategy through robust ETL, SSIS, and Power BI solutions.

                I’m passionate about transforming fragmented data into trusted insights, aligning stakeholders through clear communication, and delivering future-ready platforms using tools like SQL Server, Azure Synapse, Microsoft Fabric, and Tableau. Whether leading integration, modelling complex data flows, or mentoring teams, I bring a pragmatic, outcome-focused mindset to every engagement.`}
              </p>
              
              <button 
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className="text-[14px] font-semibold text-[rgba(0,0,0,0.6)] hover:text-[#0a66c2] hover:underline mt-2 block"
              >
                {isAboutExpanded ? '...see less' : '...see more'}
              </button>
            </div>
          </section>

          {/* Project Section */}
            <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden text-left mb-6">
              <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Featured BI Projects</h2>
                <Globe size={20} className="text-gray-400" />
              </div>
              
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard 
                  title="Victorian COVID-19 Daily Briefing Dashboards"
                  category="Dashboard"
                  description="Designed high-stakes Power BI reports used by the Premier’s Office for daily public briefings, integrating data for case tracking and wastewater surveillance."
                  techStack={["Power BI", "SQL", "ArcGIS", "Stakeholder Management"]}
                />
                <ProjectCard 
                  title="Enterprise Data Warehouse Modernization"
                  category="Architecture"
                  description="Architected the foundational Power BI environment and implemented Data Vault 2.0 methodologies to centralize finance, procurement, and HR data."
                  techStack={["Data Vault 2.0", "Microsoft Fabric", "Azure Synapse", "Power BI"]}
                />
              </div>
            </section>

         {/* Experience Section */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden text-left">
            <div className="p-5 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Experience</h2>
            </div>

            {/* The Salvation Army */}
            <ExperienceCard 
              role="Senior Technical Business Analyst"
              company="The Salvation Army (TSA)"
              duration="Mar 2022 – Sep 2025"
              location="Melbourne, Australia" // Optional Location
              logoPath="/logos/salvationarmyus_logo.jpg"
              description="Led enterprise-wide data modernization. Architected the foundational Power BI environment and established governance standards. Performed data modeling using Data Vault 2.0 methodologies for scalable analytics."
              skills={["Power BI", "Data Vault 2.0", "Azure Synapse", "Microsoft Fabric", "SQL"]}
            />

            {/* ARQ Group / DHHS */}
            <ExperienceCard 
              role="Senior Business Intelligence Analyst"
              company="ARQ Group | Department of Health & Human Services"
              duration="Jul 2020 – Mar 2022"
              logoPath="/logos/arqgroup_logo.jpg"
              description="Delivered high-stakes reporting for the Victorian Government’s COVID-19 response. Developed dashboards used by the Premier’s Office for daily briefings. Built ArcGIS-powered visualizations for wastewater surveillance."
              skills={["Power BI", "ArcGIS", "SQL", "Stakeholder Management"]}
            />

            {/* Saputo Dairy */}
            <ExperienceCard 
              role="Senior Business Intelligence Analyst"
              company="Saputo Dairy Australia"
              duration="Mar 2020 – Jun 2020"
              logoPath="/logos/saputo_logo.jpg"
              description="Migrated legacy reporting systems into Power BI Report Builder. Developed complex SQL queries using Stored Procedures and CTEs to support advanced analytics."
              skills={["Power BI Report Builder", "SQL", "Data Migration"]}
            />

          <NestedExperienceCard 
              company="Telstra"
              logoPath="/logos/telstra_logo.jpeg"
              roles={[
                {
                  role: "Lead Business Analyst - NBN Reporting",
                  duration: "Oct 2016 – Jan 2019",
                  description: "Led the design & development of reporting data modules for Consumer & Wholesale data. Transitioned NBN reporting to an automated platform and led a team of ETL developers, BAs, and Testers.",
                  skills: ["DAX", "Team Leadership", "Power BI", "Agile/Scrum"]
                },
                {
                  role: "Senior Business Analyst - Finance & Strategy",
                  duration: "Jul 2015 – Oct 2016",
                  description: "Assessed new requirements for BI solutions across finance applications. Liaised with partners/vendors for OOM cost estimates and managed funding for large initiatives.",
                  skills: ["Stakeholder Management", "Solution Definition", "Financial Analysis"]
                },
                {
                  role: "Senior Technical Analyst - Microsoft BI",
                  duration: "Jan 2014 – Jul 2015",
                  description: "Developed SSIS packages to load contact center data into SQL Server. Managed SSAS cubes for coaching and reporting across the enterprise.",
                  skills: ["SSIS", "SSAS", "SQL Server", "ETL"]
                }
              ]}
            />
          </section>
            
         {/* Certifications Section */}   
          <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left mb-3">
            <div className="p-5 border-b border-[#e0e0e0]">
              <h2 className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">Licenses & Certifications</h2>
            </div>
            
            <div className="divide-y divide-[#e0e0e0]">
              <CertificationCard 
                name="Prompt Engineering & Programming with OpenAI"
                organization="Columbia+"
                issueDate="Mar 2026"
                credentialId="176670113"
                logoPath="/logos/columbiaplus_logo.jpeg"
                link="https://badges.plus.columbia.edu/08d21e32-8736-4524-9054-6ec9afcd4034" // Replace with actual link
              />

              <CertificationCard 
                name="Certificate of completion: Claude 101"
                organization="Anthropic"
                issueDate="Mar 2026"
                credentialId="ahcc3zmjdqp7"
                logoPath="/logos/anthropicresearch_logo.jpeg"
                link="https://verify.skilljar.com/c/ahcc3zmjdqp7" // Replace with actual link
              />

              <CertificationCard 
                name="AI Agent Fundamentals"
                organization="Databricks"
                issueDate="Mar 2026"
                credentialId="176508703"
                logoPath="/logos/databricks_logo.jpeg"
                link="https://credentials.databricks.com/280dd828-7230-4954-94dc-19439d8e3c2b" // Replace with actual link
              />

              <CertificationCard 
                name="Generative AI Fundamentals"
                organization="Databricks"
                issueDate="Nov 2025"
                credentialId="166522031"
                logoPath="/logos/databricks_logo.jpeg"
                link="https://credentials.databricks.com/521a5f9f-c66b-44cb-be64-be21bd500d7d" // Replace with actual link
              />
              
              <CertificationCard 
                name="Google Generative AI Leader"
                organization="Google"
                issueDate="Oct 2025"
                logoPath="/logos/google_logo.jpeg"
                link="https://www.credly.com/badges/7f4465f6-3f8c-4841-bc66-cca9192b8378/linked_in_profile" // Replace with actual link
              />
              
              <CertificationCard 
                name="Microsoft Certified: Power BI Data Analyst Associate"
                organization="Microsoft"
                issueDate="Jan 2024"
                credentialId="PL-300"
                logoPath="/logos/microsoft_logo.jpeg"
                link="https://learn.microsoft.com/..."
              />

              {/* Add your other certifications here */}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <div className="lg:col-span-4 space-y-3">

            {/* Contact Section */}
              <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left mb-3">
                <div className="p-4 border-b border-[#e0e0e0] flex items-center gap-2">
                  <div className="text-[rgba(0,0,0,0.6)]">
                    <Mail size={20} />
                  </div>
                  <h2 className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)]">Contact Information</h2>
                </div>
                
                <div className="p-4 space-y-4">
                  {/* Mobile Number */}
                  <div className="flex items-center gap-3">
                    <div className="text-[rgba(0,0,0,0.6)]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] text-[rgba(0,0,0,0.6)]">Mobile</p>
                      <a href="tel:+61400000000" className="text-[14px] font-medium text-[rgba(0,0,0,0.9)] hover:text-[#0a66c2] transition-colors">
                        +61 416 973 865
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn Profile */}
                  <div className="flex items-center gap-3">
                    <div className="text-[rgba(0,0,0,0.6)]">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] text-[rgba(0,0,0,0.6)]">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/rowbinder/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[14px] font-medium text-[#0a66c2] hover:underline flex items-center gap-1"
                      >
                        View Profile <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Email (Existing) */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="text-[rgba(0,0,0,0.6)]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] text-[rgba(0,0,0,0.6)]">Email</p>
                      <p className="text-[14px] font-medium text-[rgba(0,0,0,0.9)]">rowbinder@gmail.com</p>
                    </div>
                  </div>

                  {/* Location (Existing) */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="text-[rgba(0,0,0,0.6)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] text-[rgba(0,0,0,0.6)]">Location</p>
                      <p className="text-[14px] font-medium text-[rgba(0,0,0,0.9)]">Point Cook, VIC</p>
                    </div>
                  </div>

                  {/* Download CV Button */}
                  <div className="pt-4 border-t border-[#f3f2ef]">
                    <a 
                      href="/Robin_Singh_CV.pdf" 
                      download
                      className="w-full flex items-center justify-center gap-2 py-2 border border-[#0a66c2] text-[#0a66c2] hover:bg-[#f0f7ff] rounded-full font-semibold text-[14px] transition-colors"
                    >
                      <Download size={16} />
                      Download CV
                    </a>
                  </div>
                </div>
              </section>

          {/* Certifications Section */}
            <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left">
              {/* Header with Icon */}
              <div className="p-4 border-b border-[#e0e0e0] flex items-center gap-2">
                <div className="text-[rgba(0,0,0,0.6)]">
                  <Award size={20} /> {/* Ensure Award is imported from lucide-react */}
                </div>
                <h2 className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)]">Certifications</h2>
              </div>

              {/* Content Area */}
              <div className="divide-y divide-[#f3f2ef]">
                <div className="p-4">
                  <p className="text-[14px] font-semibold text-[rgba(0,0,0,0.9)]">Google Generative AI Leader</p>
                  <p className="text-[12px] text-[rgba(0,0,0,0.6)]">Issued Oct 2025</p>
                  <a 
                    href="https://www.credential.net/..." 
                    target="_blank" 
                    className="mt-2 inline-block text-[13px] font-semibold text-[#0a66c2] hover:underline"
                  >
                    Show credential →
                  </a>
                </div>
                {/* Additional Certifications... */}
              </div>
            </section>

          {/* Technical Stack Section */}
            <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left mb-3">
              {/* Header with Icon */}
              <div className="p-4 border-b border-[#e0e0e0] flex items-center gap-2">
                <div className="text-[rgba(0,0,0,0.6)]">
                  <Cpu size={20} />
                </div>
                <h2 className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)]">Technical Stack</h2>
              </div>

              <div className="p-4 space-y-4">
                {/* Category: AI & Machine Learning (Indigo) */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-left">Artificial Intelligence</p>
                  <div className="flex flex-wrap gap-2">
                    {["Generative AI", "AI Agents", "Large Language Models", "Prompt Engineering"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-[13px] font-medium border border-amber-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category: BI & Visualization (Blue) */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">BI & Visualization</p>
                  <div className="flex flex-wrap gap-2">
                    {["Power BI", "DAX", "Tableau", "SSRS"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[13px] font-medium border border-blue-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category: Engineering & ETL (Green) */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-left">Engineering & ETL</p>
                  <div className="flex flex-wrap gap-2">
                    {["Microsoft Fabric", "SQL Server", "Python", "Data Vault 2.0", "Azure Synapse", "SSIS/SSAS"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[13px] font-medium border border-emerald-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category: Cloud & Data Architectures (Purple) */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-left">Cloud & Data Architectures</p>
                  <div className="flex flex-wrap gap-2">
                    {["Microsoft Fabric", "Azure Synapse", "Google Cloud", "Lakehouse"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-[13px] font-medium border border-purple-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>                
              </div>
            </section>
        
            {/* Education Section */}
            <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left mb-3">
              {/* Header with Icon and Standardized Text */}
              <div className="p-4 border-b border-[#e0e0e0] flex items-center gap-2">
                <div className="text-[rgba(0,0,0,0.6)]">
                  <GraduationCap size={20} />
                </div>
                <h2 className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)]">Education</h2>
              </div>

              <div className="p-4 space-y-4">
                {/* Master's Degree */}
                <div>
                  <p className="text-[14px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight">
                    Master of Computer Applications (MCA)
                  </p>
                  <p className="text-[13px] text-[rgba(0,0,0,0.9)] mt-0.5">
                    Punjab Technical University
                  </p>
                  <p className="text-[12px] text-[rgba(0,0,0,0.6)]">
                    2004 – 2006
                  </p>
                </div>

                {/* Bachelor's Degree */}
                <div>
                  <p className="text-[14px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight">
                    Bachelor of Computer Applications (BCA)
                  </p>
                  <p className="text-[13px] text-[rgba(0,0,0,0.9)] mt-0.5">
                    Guru Nanak Dev University
                  </p>
                  <p className="text-[12px] text-[rgba(0,0,0,0.6)]">
                    2001 – 2004
                  </p>
                </div>
              </div>
            </section>
        </div>

        {/* Footer Section */}
          <footer className="mt-12 py-10 border-t border-gray-200 w-full">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
              {/* Link Row */}
                        
              {/* Copyright Row */}
              <p className="text-xs text-gray-400 text-center">
                © {new Date().getFullYear()} Robin Singh.
              </p>
            </div>
</footer>
      </div>
    </main>
  );
}