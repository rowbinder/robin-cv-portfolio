import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import NestedExperienceCard from '@/components/NestedExperienceCard';
import { Download, GraduationCap, Award, BrainCircuit, CheckCircle2, Globe, BarChart3, Database, Cloud, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f2ef] py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
        
        {/* LEFT COLUMN */}
        <div className="md:col-span-8 space-y-6 text-left">
          
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
                      
                      {/* LinkedIn-Style OpenToWork Banner 
                      <div className="absolute bottom-0 w-full bg-[#057642]/90 py-1.5 text-center">
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider">Open to work</span>
                      </div>*/}
                    </div>
                  </div>
                  
                  <a 
                    href="/Robin-Singh-Resume.pdf" 
                    download 
                    className="mb-6 inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-5 py-1.5 rounded-full text-sm font-bold transition-all shadow-sm"
                  >
                    <Download size={16} /> Download CV
                  </a>
                </div>

                <h1 className="text-2xl font-bold text-gray-900">Robin Singh</h1>
                <p className="text-gray-700 text-lg font-medium">
                  Senior Technical Business Analyst | BI Consultant | AI & Data Solutions
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <span>Point Cook, Victoria, Australia</span>
                  <span className="text-blue-700 font-bold hover:underline cursor-pointer ml-1">• Contact info</span>
                </div>
              </div>
            </div>

          {/* LinkedIn About Section */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Accomplished Business Intelligence Consultant with over 20 years of experience and a proven track record in BI, Data Warehouse (DWH), and Data Analytics projects. 
              <br /><br />
              I specialize in modern data architectures like **Lakehouse** and **Microsoft Fabric**, with a current focus on integrating **Generative AI** and **AI Agents** into enterprise reporting ecosystems. I am passionate about driving accuracy and process efficiency through data storytelling.
            </p>
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
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <div className="md:col-span-4 space-y-6 text-left">

          {/* Contact Section */}
            <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-left font-sans">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="text-sm text-gray-700">
                  <span className="font-bold block">Location</span>
                  Point Cook, VIC-3030 
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-bold block">Mobile</span>
                  +61-416 973 865 
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-bold block">Email</span>
                  <a href="mailto:rowbinder@gmail.com" className="text-blue-600 hover:underline">rowbinder@gmail.com</a> 
                </div>
              </div>
            </section>
          
          {/* AI & Certifications Section */}
            <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-left">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award size={20} className="text-blue-700" /> Certifications
              </h2>
              <div className="space-y-4">
                {/* Ongoing AI Agent Course */}
                <div className="flex gap-3">
                  <BrainCircuit size={24} className="text-purple-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Google AI Agents Intensive</p>
                    <p className="text-xs text-gray-600">Kaggle & Google Cloud</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded uppercase">In Progress</span>
                  </div>
                </div>

                {/* Credentials from Resume */}
                <div className="flex gap-3 text-left">
                  <CheckCircle2 size={24} className="text-blue-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Google Generative AI Leader</p>
                    <p className="text-xs text-gray-600">Issued Oct 2025</p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <CheckCircle2 size={24} className="text-blue-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Analyzing and Visualizing Data (MS Power BI)</p>
                    <p className="text-xs text-gray-600">Microsoft | Oct 2019</p>
                  </div>
                </div>
              </div>
            </section>

          {/* Top Skills Section */}
          <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Top Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["Power BI", "DAX", "SQL", "Python", "Google Cloud", "AI Agents", "Data Vault 2.0", "Lakehouse", "Microsoft Fabric"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold border border-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </section>


          {/* Technical Stack Section */}
            <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-left font-sans">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap size={20} className="text-yellow-500" /> Technical Stack
              </h2>
              <div className="space-y-4">
                {/* BI & Visualization */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">BI & Visualization</p>
                  <div className="flex flex-wrap gap-2">
                    {["Power BI", "DAX", "Tableau", "SSRS"].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-semibold border border-blue-100">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Engineering & ETL */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-left">Engineering & ETL</p>
                  <div className="flex flex-wrap gap-2 text-left">
                    {["SQL", "SSIS", "Data Vault 2.0", "ETL Pipelines", "Python"].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-semibold border border-green-100">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Cloud & Modern Architecture */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-left">Cloud & Data Architectures</p>
                  <div className="flex flex-wrap gap-2 text-left">
                    {["Microsoft Fabric", "Azure Synapse", "Google Cloud", "Lakehouse"].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-semibold border border-purple-100 text-left">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          {/* Education Section */}
          <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
               <GraduationCap size={20} className="text-gray-600" /> Education
            </h2>
            <div>
              <p className="text-sm font-bold text-gray-900">Masters of Information Technology</p>
              <p className="text-xs text-gray-600 italic">Major in Data Analytics</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Bachelor of Information Technology</p>
              <p className="text-xs text-gray-600 italic">Major in Data Analytics</p>
            </div>
          </section>

        </div>

        {/* Footer Section */}
          <footer className="mt-12 py-10 border-t border-gray-200 w-full">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
              {/* Link Row */}
              <div className="flex flex-row justify-center items-center gap-8 mb-4 w-full">
                <a 
                  href="https://www.linkedin.com/in/rowbinder/" 
                  target="_blank" 
                  className="text-gray-600 hover:text-blue-700 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  LinkedIn Profile
                </a>
                <a 
                  href="https://www.credly.com/users/robin-singh.7f4465f6" 
                  target="_blank" 
                  className="text-gray-600 hover:text-orange-600 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Verified Credentials (Credly)
                </a>
              </div>
              
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