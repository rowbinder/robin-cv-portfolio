"use client";
import React, { useState } from 'react';
import ExperienceCard from '@/components/ExperienceCard';
import ExperienceItem from '@/components/ExperienceItem';
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
          
          {/* Profile Header Section */}
            <div className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden shadow-none mb-3 font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
              {/* Custom Banner Image */}
              <div className="h-48 relative w-full bg-[#a0b4b7]">
                <Image 
                  src="/banner.jpg" 
                  alt="Professional Banner" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-6 pb-6 text-left">
                <div className="flex justify-between items-start">
                  {/* Profile Picture Overlay */}
                  <div className="relative -mt-24 mb-4 inline-block">
                    <div className="w-40 h-40 bg-white rounded-full border-4 border-white overflow-hidden shadow-sm relative">
                      <Image src="/profile.jpg" alt="Robin Singh" fill className="object-cover" />
                    </div>
                  </div> 
                  
                  {/* Optional: Add a small logo of your current/latest company here on the right like LinkedIn does */}
                </div>

                {/* Name: Exactly 24px Semi-bold */}
                <h1 className="text-[24px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight">
                  Robin Singh
                </h1>

                {/* Headline: Exactly 16px Regular */}
                <p className="text-[16px] text-[rgba(0,0,0,0.9)] mt-1 leading-[1.5]">
                  Business Intelligence Strategist | Data Migration & Integration Lead | Delivering Unified Analytics Across Sectors
                </p>

                {/* Location and Contact: 14px Grey */}
                <div className="flex flex-wrap items-center gap-1 mt-2 text-[14px]">
                  <span className="text-[rgba(0,0,0,0.6)]">Greater Melbourne Area</span>
                  <span className="text-[rgba(0,0,0,0.6)] mx-1">•</span>
                  <button 
                    onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#0a66c2] font-semibold hover:underline"
                  >
                    Contact info
                  </button>
                </div>

                {/* Connections/Followers Placeholder (Standard LinkedIn Look) */}
                <div className="mt-2 text-[14px] font-semibold text-[#0a66c2] hover:underline cursor-pointer">
                  500+ connections
                </div>
              </div>
            </div>

          {/* LinkedIn About Section */}
            <section className="bg-white border border-[#e0e0e0] rounded-xl p-6 shadow-none text-left mb-3">
              {/* Header: 20px Semi-bold */}
              <h2 className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)] mb-2">About</h2>
              
              <div className="text-[14px] text-[rgba(0,0,0,0.9)] leading-[1.42857]">
                {/* Paragraphs with preserved spacing */}
                <p className={`whitespace-pre-line ${!isAboutExpanded ? 'line-clamp-3' : ''}`}>
                  {`With over 20 years of experience in business intelligence, data migration, and enterprise reporting, I specialize in modernizing legacy systems and building unified analytics ecosystems that drive strategic decision-making. My career spans telecom, retail, healthcare, and government sectors, where I’ve consistently delivered high-impact solutions by bridging business needs with scalable technical architectures.

                  At The Salvation Army, I led the design and implementation of a centralized data warehouse and Power BI environment, integrating platforms like TechOne, Coupa, Workday, and ServiceNow. I introduced Data Vault 2.0 modeling, authored interface specifications, and enabled cross-functional reporting across finance, procurement, HR, and operations.

                  Previously, I supported the Victorian Government’s COVID-19 response with mission-critical dashboards and geospatial analytics, and at Telstra, I drove IFRS15 compliance reporting, NBN rollout analytics, and finance data strategy through robust ETL, SSIS, and Power BI solutions.

                  I’m passionate about transforming fragmented data into trusted insights, aligning stakeholders through clear communication, and delivering future-ready platforms using tools like SQL Server, Azure Synapse, Microsoft Fabric, and Tableau. Whether leading integration, modelling complex data flows, or mentoring teams, I bring a pragmatic, outcome-focused mindset to every engagement.`}
                </p>
                
                {/* See More/Less Button: Styled to match LinkedIn's 'faint' look */}
                <button 
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className="text-[14px] font-semibold text-[rgba(0,0,0,0.6)] hover:text-[#0a66c2] hover:underline mt-1 block w-fit"
                >
                  {isAboutExpanded ? '...see less' : '...see more'}
                </button>
              </div>
            </section>

          {/* Featured BI Projects Section */}
            <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left mb-3">
              {/* Header: 20px Semi-bold with Globe Icon */}
              <div className="p-4 border-b border-[#e0e0e0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-[rgba(0,0,0,0.6)]">
                    <Globe size={20} />
                  </div>
                  <h2 className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)] tracking-tight">Featured Projects</h2>
                </div>
                <span className="text-[12px] font-semibold text-[#0a66c2] hover:underline cursor-pointer">Manage</span>
              </div>
              
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Project 1: Victorian Government */}
                <div className="border border-[#e0e0e0] rounded-xl p-4 hover:shadow-md transition-shadow bg-[#fcfcfc]">
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px] font-bold uppercase tracking-wider border border-blue-100">
                      Dashboard
                    </span>
                  </div>
                  <h3 className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight mb-2">
                    Victorian COVID-19 Daily Briefing Dashboards
                  </h3>
                  <p className="text-[14px] text-[rgba(0,0,0,0.7)] leading-[1.42857] mb-4">
                    Designed high-stakes Power BI reports used by the Premier’s Office for daily public briefings, integrating data for case tracking and wastewater surveillance.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {["Power BI", "SQL", "ArcGIS"].map(tech => (
                      <span key={tech} className="text-[12px] text-[rgba(0,0,0,0.6)] bg-gray-100 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project 2: Data Warehouse Modernization */}
                <div className="border border-[#e0e0e0] rounded-xl p-4 hover:shadow-md transition-shadow bg-[#fcfcfc]">
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[11px] font-bold uppercase tracking-wider border border-emerald-100">
                      Architecture
                    </span>
                  </div>
                  <h3 className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight mb-2">
                    Enterprise Data Warehouse Modernization
                  </h3>
                  <p className="text-[14px] text-[rgba(0,0,0,0.7)] leading-[1.42857] mb-4">
                    Architected the foundational Power BI environment and implemented Data Vault 2.0 methodologies to centralize finance, procurement, and HR data.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {["Data Vault 2.0", "Fabric", "Synapse"].map(tech => (
                      <span key={tech} className="text-[12px] text-[rgba(0,0,0,0.6)] bg-gray-100 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          {/* Experience Section */}
          <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left mb-3">
          {/* Header with Icon: Matched to Featured Projects & Sidebar */}
          <div className="p-4 border-b border-[#e0e0e0] flex items-center gap-2">
            <div className="text-[rgba(0,0,0,0.6)]">
              <Briefcase size={20} />
            </div>
            <h2 className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">Experience</h2>
          </div>

          <div className="divide-y divide-[#f3f2ef]">

            {/* The Salvation Army */}
            <ExperienceItem 
                title="Senior Technical Business Analyst"
                company="The Salvation Army - Contract"
                period="Mar 2022 – Sep 2025"
                logoUrl="/logos/salvationarmyus_logo.jpg"
                summary="Led enterprise-wide reporting and data modernization initiatives, playing a pivotal role in designing and implementing a centralized data warehouse and analytics ecosystem that supports strategic decision-making across finance, procurement, HR, and operations."
                bullets={[
                        "Architected the foundational Power BI environment for TSA, establishing governance, workspace strategy, and reporting standards to support scalable analytics across the organization.",
                        "Collaborated with stakeholders across multiple business units to assess existing reporting solutions, capture future-state requirements, and design a unified data warehouse architecture to consolidate data from diverse systems.",
                        "Worked closely with SMEs from core platforms including TechOne, Coupa, Workday, and ServiceNow to understand source system structures and business logic, ensuring accurate data mapping and integration.",
                        "Authored comprehensive Interface Specification Documents to define data flows across ingestion, staging, and presentation layers, enabling seamless integration and traceability.",
                        "Performed data modeling using Data Vault 2.0 methodologies, designing scalable and auditable structures for key source systems and supporting long-term data governance.",
                        "Led bug resolution and data validation efforts, identifying and fixing critical issues in ETL pipelines to ensure data accuracy and reliability for downstream reporting.",
                        "Delivered targeted Power BI reports and dashboards for stakeholders across finance, procurement, and executive leadership, improving visibility into operational metrics and strategic KPIs.",
                        "Recently contributed to data engineering tasks, ingesting data from multiple systems into the warehouse using existing frameworks and enhancing pipeline performance and maintainability.",
                        "Managed stakeholder relationships and expectations, serving as a trusted advisor across departments and ensuring alignment between business needs and technical delivery.",
                ]}
                skills={["Power BI", "Data Vault 2.0", "Azure Synapse", "Microsoft Fabric", "SQL"]}
              />

            {/* ARQ Group / DHHS */}
            <ExperienceItem 
                title="Senior Business Intelligence Analyst"
                company="ARQ Group | Department of Health & Human Services - Contract"
                period="Jul 2020 – Mar 2022"
                logoUrl="/logos/arqgroup_logo.jpg"
                summary="Delivered high-stakes reporting and analytics solutions that directly supported the Victorian Government’s COVID-19 response, enabling timely public briefings, resource allocation, and policy decisions."
                bullets={[
                        "Designed and developed Power BI reports used by the Victorian Premier’s Office for daily COVID-19 briefings, ensuring data accuracy and clarity under intense public and media scrutiny.",
                        "Built and maintained the Power BI data model for case and testing analytics, serving as a core reporting asset within DHHS.",
                        "Integrated data from multiple departmental and vendor sources, enabling unified dashboards for case tracking, testing volumes, and geographic spread.",
                        "Created ArcGIS-powered visualizations to map COVID-19 cases and testing activity across LGAs and postcodes, including custom polygons for wastewater surveillance reporting.",
                        "Conducted weekly stakeholder presentations to review report changes, gather feedback, and align analytics with evolving policy and operational priorities.",
                        "Authored SQL queries and stored procedures to support Power BI data ingestion and transformation, optimizing performance and reliability.",
                ]}
                skills={["Power BI", "ArcGIS", "SQL", "Stakeholder Management"]}
              />

            {/* Saputo */}
            <ExperienceItem 
                title="Senior Business Intelligence Analyst"
                company="Saputo Inc. - Contract"
                period="Mar 2020 – Jul 2020"
                logoUrl="/logos/saputo_logo.jpg"
                summary=""
                bullets={[
                        "Engage with the key stake holders to understand the current state of the reporting environment.",
                        "Develop a future plan for new reports and analytics environment.",
                        "Migrated old reports into Power BI Report Builder to decommission old systems.",
                        "Built reports and dashboards in Power BI to showcase the analytics capabilities and gathered feedback and future requirements around analytics.",
                        "Developed complex SQL queries using stored procedures, common tables expressions (CTEs), temporary table to support Power BI and other reports.",
                        "Integrated Custom Visuals based on business requirements using Power BI desktop.",
                        "Conduct workshops to understand the requirements of the business. The workshops also provide an opportunity to demo the capabilities in the latest sprints.",
                        "Create business requirements documents. ",
                ]}
                skills={["Power BI", "Power BI Report Builder", "Data Migration", "DAX", "SQL", "Stakeholder Management"]}
              />



{/*
            <ExperienceCard 
              role="Senior Technical Business Analyst"
              company="The Salvation Army - Contract"
              duration="Mar 2022 – Sep 2025"
              location="Melbourne, Australia"
              logoPath="/logos/salvationarmyus_logo.jpg"
              description="Led enterprise-wide data modernization. Architected the foundational Power BI environment and established governance standards. Performed data modeling using Data Vault 2.0 methodologies for scalable analytics."
              skills={["Power BI", "Data Vault 2.0", "Azure Synapse", "Microsoft Fabric", "SQL"]}
            />

            
            <ExperienceCard 
              role="Senior Business Intelligence Analyst"
              company="ARQ Group | Department of Health & Human Services"
              duration="Jul 2020 – Mar 2022"
              logoPath="/logos/arqgroup_logo.jpg"
              description="Delivered high-stakes reporting for the Victorian Government’s COVID-19 response. Developed dashboards used by the Premier’s Office for daily briefings. Built ArcGIS-powered visualizations for wastewater surveillance."
              skills={["Power BI", "ArcGIS", "SQL", "Stakeholder Management"]}
            />

            <ExperienceCard 
              role="Senior Business Intelligence Analyst"
              company="Saputo Dairy Australia"
              duration="Mar 2020 – Jun 2020"
              logoPath="/logos/saputo_logo.jpg"
              description="Migrated legacy reporting systems into Power BI Report Builder. Developed complex SQL queries using Stored Procedures and CTEs to support advanced analytics."
              skills={["Power BI Report Builder", "SQL", "Data Migration"]}
            />
*/}
            {/* Telstra - Nested Section */}
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


            {/* ASSA ABLOY */}
            <ExperienceItem 
                title="Reporting Analyst"
                company="ASSA ABLOY - Contract"
                period="Oct 2012 – Dec 2013"
                logoUrl="/logos/assaabloy_logo.jpeg"
                summary=""
                bullets={[
                        "Develop SQL Server Integration Services (SSIS) package to extract transform and load (ETL) data from Microsoft Dynamics AX 2012 into SQL Server 2008 R2 database.",
                        "Identify data from BPCS ERP in legacy applications & map to Microsoft Dynamics AX 2012.",
                        "Develop a local data warehouse in SQL Server 2008 R2.",
                        "Gather user requirements for critical documents like Invoices, Purchase Order, Sales Order, Customer Statements, etc. to be developed as customized reports for Microsoft Dynamics AX 2012.",
                        "Map data in functional specs to XML files for customized reports in MS Dynamics AX 2012.",
                        "Dealing with Vendor Company to get customized reports for Microsoft Dynamics AX 2012 developed, testing reports and delivering them to the end users.",
                        "Convert Data Transformation Services (DTS) apps to SQL Server Integrated Services (SSIS).",
                        "Designed SSIS Packages to extract, transfer, load (ETL) existing data into SQL Server from different environments for the SSAS cubes.",
                        "Creating drill down and drill through reports using SSRS.",
                        "Provide technical documentation of the system.",
                        "Created SQL server Reports using SSRS 2008. Identified the data source & defined them to build data source views.",
                ]}
                skills={["SSIS", "ETL", "Data Migration", "Microsoft Dynamics AX 2012", "SQL Server", "Data Warehouse", "XML", "Vendor Management", "Data Transformation Services (DTS)"]}
              />

            {/* Rowben Consulting */}
            <ExperienceItem 
                title=".Net Developer"
                company="Rowben Consulting - Contract"
                period="Jul 2012 – Aug 2012"
                logoUrl="/logos/rowben_consulting_logo.jpeg"
                summary="Develop customized reports for various applications using SQL Server, Crystal Reports and Visual Studio 2008."
                skills={["SQL Server", "Crystal Reports", "Visual Studio 2008"]}
              />

            {/* Pratyaksh Interactive Services Ptv. Ltd. */}
            <ExperienceItem 
                title="Team Lead - .Net Development"
                company="Pratyaksh Interactive Services Ptv. Ltd."
                period="Dec 2010 – Apr 2012"
                logoUrl="/logos/pratyaksh.png"
                summary="Develop, maintain and upgrade cutting-edge travel-industry software and mobile applications. Coordinate design and implementation of applications, collaborating with project managers, engineering teams, and clients to ensure on-time completion of project deliverables. Design Web applications and maintain content for .NET based systems."
                skills={["SQL Server", "Crystal Reports", "Visual Studio 2008"]}
                location="New Delhi - India"
              />

            {/* Ricoh India Ltd. */}
            <ExperienceItem 
                title="IT Consultant"
                company="Ricoh India Ltd."
                period="Sep 2009 – Dec 2010"
                logoUrl="/logos/ricoh.png"
                summary="Develop a SQL Server 2008 Integration Services application to pull data from Progress database every mid-night. Write complex stored procedures for each report. Design and develop various reports using SQL Server Reporting Services and Crystal Reports. Develop windows application in Visual Studio 2008 that provides user interface to generate various reports and also provides graphical representation of the data using the MS Charts. I was responsible for understanding the business logic and requirement gathering. Installing the application and user training were also part of my role."
                skills={["SQL Server", "Crystal Reports", "Visual Studio 2008", "Data Warehouse"]}
                location="New Delhi - India"
              />

            {/* Humanitics Dimensions Software Ptv. Ltd. */}
            <ExperienceItem 
                title="Technical Lead"
                company="Humanitics Dimensions Software Ptv. Ltd."
                period="Jul 2007 – Sep 2009"
                logoUrl="/logos/humanitics.jpeg"
                summary="Develop, maintain and upgrade cutting-edge travel-industry software and mobile applications. Coordinate design and implementation of applications, collaborating with project managers, engineering teams, and clients to ensure on-time completion of project deliverables. Design Web applications and maintain content for .NET based systems."
                skills={["SQL Server", "Visual Studio 2008", "Data Warehouse"]}
                location="New Delhi - India"
              />

            {/* TSYS Card Tech */}
            <ExperienceItem 
                title="Software Analyst"
                company="TSYS Card Tech"
                period="Feb 2007 – Jul 2007"
                logoUrl="/logos/tsys_logo.jpeg"
                summary="Involved in analysis and development of database scripts, processing the incoming interchange files from VISA & MasterCard. Responsible for developing customized reports for the client, using Oracle9i & Crystal Reports 9."
                skills={[ "Oracle", "Crystal Reports", "Visual Studio 2008"]}
                location="Cyprus/India"
              />
          </div>
          </section>
            
          {/* Licenses & Certifications Section */}
          <section className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden text-left mb-3">
          {/* Header with Icon: Standardized to match Experience/About */}
          <div className="p-4 border-b border-[#e0e0e0] flex items-center gap-2">
            <div className="text-[rgba(0,0,0,0.6)]">
              <Award size={20} />
            </div>
            <h2 className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">Licenses & Certifications</h2>
          </div>
           
          <div className="divide-y divide-[#f3f2ef]">
            {/* Columbvia+ - Prompt Engineering & Programming with OpenAI */}
            <CertificationCard 
              name="Prompt Engineering & Programming with OpenAI"
              organization="Columbia+"
              issueDate="Mar 2026"
              credentialId="176670113"
              logoPath="/logos/columbiaplus_logo.jpeg"
              link="https://badges.plus.columbia.edu/08d21e32-8736-4524-9054-6ec9afcd4034"
              skills={["Generative AI", "OpenAI API", "Large Language Models (LLM)"]}
            />

             {/* Anthropic - Certificate of completion: Claude 101 */}
            <CertificationCard 
              name="Certificate of completion: Claude 101"
              organization="Anthropic"
              issueDate="Mar 2026"
              credentialId="ahcc3zmjdqp7"
              logoPath="/logos/anthropicresearch_logo.jpeg"
              link="https://verify.skilljar.com/c/ahcc3zmjdqp7"
            />

            {/* Databricks - AI Agent Fundamentals */}
            <CertificationCard 
              name="AI Agent Fundamentals"
              organization="Databricks"
              issueDate="Mar 2026"
              credentialId="176508703"
              logoPath="/logos/databricks_logo.jpeg"
              link="https://credentials.databricks.com/280dd828-7230-4954-94dc-19439d8e3c2b"
            />

            {/* Databricks - Generative AI Fundamentals */}
            <CertificationCard 
              name="Generative AI Fundamentals"
              organization="Databricks"
              issueDate="Nov 2025"
              credentialId="166522031"
              logoPath="/logos/databricks_logo.jpeg"
              link="https://credentials.databricks.com/521a5f9f-c66b-44cb-be64-be21bd500d7d"
            />
            
            {/* Google - Google Generative AI Leader */}
            <CertificationCard 
              name="Google Generative AI Leader"
              organization="Google"
              issueDate="Oct 2025"
              logoPath="/logos/google_logo.jpeg"
              link="https://www.credly.com/badges/7f4465f6-3f8c-4841-bc66-cca9192b8378/linked_in_profile"
            />

             {/* Google - Google AI Essentials */}
            <CertificationCard 
              name="Google AI Essentials"
              organization="Google"
              issueDate="Sep 2025"
              credentialId="T63MC1LAQJK8"
              logoPath="/logos/google_logo.jpeg"
              link="https://www.coursera.org/account/accomplishments/specialization/T63MC1LAQJK8"
              skills={["Generative AI", "AI Strategy", "Machine Learning"]}
            />

            {/* Databricks - Databricks Fundamentals */}
            <CertificationCard 
              name="Databricks Fundamentals"
              organization="Databricks"
              issueDate="Sep 2025"
              credentialId="bac61eed-5ed0-4643-8d9a-4e955b4b3e4e#acc.l4QPOzgR"
              logoPath="/logos/databricks_logo.jpeg"
              link="https://credentials.databricks.com/bac61eed-5ed0-4643-8d9a-4e955b4b3e4e#acc.l4QPOzgR"
            />

            {/* Microsoft - Microsoft Certified: Azure Fundamentals */}
            <CertificationCard 
              name="Microsoft Certified: Azure Fundamentals"
              organization="Microsoft"
              issueDate="Oct 2020"
              logoPath="/logos/microsoft_logo.jpeg"
              link="https://www.youracclaim.com/badges/e1cbd458-0b78-44bf-bf36-7bff27ba1b8b?source=linked_in_profile"
            />

                {/* Tableau - Tableau Analyst */}
            <CertificationCard 
              name="Tableau Analyst"
              organization="Tableau Software"
              issueDate="Nov 2019"
              logoPath="/logos/tableau_software_logo.jpeg"
              link="https://www.youracclaim.com/badges/71a7a26d-54d8-4687-a8b4-4b6fb55ae826/linked_in_profile"
            />

            {/* Microsoft - Analyzing and Visualizing Data with Microsoft Power BI */}
            <CertificationCard 
              name="Analyzing and Visualizing Data with Microsoft Power BI"
              organization="Microsoft"
              issueDate="Nov 2019"
              credentialId="804df98a3914471ea0aacd4a40da046b"
              logoPath="/logos/microsoft_logo.jpeg"
              link="https://courses.edx.org/certificates/804df98a3914471ea0aacd4a40da046b"
            />

            {/* LinkedIn - Power BI Essential Training */}
            <CertificationCard 
              name="Power BI Essential Training"
              organization="LinkedIn"
              issueDate="Oct 2019"
              credentialId="AYj96u2EWBwDa6XI9T22usVODeUN"
              logoPath="/logos/linkedin_logo.jpeg"
              link="https://www.linkedin.com/in/rowbinder/details/certifications/"
            />

             {/* LinkedIn - Learning Microsoft Power BI Desktop */}
            <CertificationCard 
              name="Learning Microsoft Power BI Desktop"
              organization="LinkedIn"
              issueDate="Oct 2019"
              credentialId="AX-bk0F44HnBROKd0M7FBKA88v7-"
              logoPath="/logos/linkedin_logo.jpeg"
              link="https://www.linkedin.com/in/rowbinder/details/certifications/"
            />

            {/* Microsoft - Microsoft Certified Professional, Developing and Implementing Windows-based Applications with Microsoft Visual Basic .NET and Microsoft Visual Studio .NET  */}
            <CertificationCard 
              name="Microsoft Certified Professional, Developing and Implementing Windows-based Applications with Microsoft Visual Basic .NET and Microsoft Visual Studio .NET "
              organization="Microsoft"
              issueDate="Sep 2004"
              logoPath="/logos/microsoft_logo.jpeg"
              link="https://www.linkedin.com/in/rowbinder/details/certifications/"
            />

            {/* Microsoft - Microsoft Certified Professional, Developing & Implementing Web Applications with Microsoft Visual Basic.NET and Microsoft Visual Studio.NET  */}
            <CertificationCard 
              name="Microsoft Certified Professional, Developing & Implementing Web Applications with Microsoft Visual Basic.NET and Microsoft Visual Studio.NET"
              organization="Microsoft"
              issueDate="Aug 2004"
              logoPath="/logos/microsoft_logo.jpeg"
              link="https://www.linkedin.com/in/rowbinder/details/certifications/"
            />

            {/* Oracle - Oracle Database PL/SQL Developer Certified Professional  */}
            <CertificationCard 
              name="Oracle Database PL/SQL Developer Certified Professional"
              organization="Oracle"
              issueDate="Jul 2004"
              logoPath="/logos/oracle_logo.jpeg"
              link="https://www.linkedin.com/in/rowbinder/details/certifications/"
            />

            {/* LinkedIn - Scrum: The Basics */}
            <CertificationCard 
              name="Scrum: The Basics"
              organization="LinkedIn"
              issueDate="Sep 2019"
              logoPath="/logos/linkedin_logo.jpeg"
              link="https://www.linkedin.com/learning/certificates/2c12c5621aeac613bd6e6617e9327524fe4c5f3f3e96be7ed0bdcd479874c14a?trk=backfilled_certificate"
              skills={["Scrum"]}
            />
            
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
      <footer className="mt-8 pb-12 w-full font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
        <div className="max-w-[1128px] mx-auto px-4 border-t border-[#e0e0e0] pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Brand / Copyright Section */}
            <div className="flex items-center gap-4">
              <p className="text-[12px] text-[rgba(0,0,0,0.6)] font-semibold">
                rowbinder<span className="text-[#0a66c2]">.com</span>
              </p>
              <p className="text-[12px] text-[rgba(0,0,0,0.6)]">
                © {new Date().getFullYear()} Robin Singh
              </p>
            </div>

            {/* Navigation Links - Single line on desktop */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['About', 'Experience', 'Projects', 'Privacy Policy'].map((link) => (
                <button 
                  key={link}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-[12px] font-semibold text-[rgba(0,0,0,0.6)] hover:text-[#0a66c2] hover:underline transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>       
        </div>
      </footer>
      </div>
    </main>
  );
}