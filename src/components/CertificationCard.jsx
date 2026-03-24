import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const CertificationCard = ({ name, organization, issueDate, credentialId, logoPath, link, skills = [] }) => {
  return (
    <div className="flex gap-4 p-4 border-b border-[#e0e0e0] last:border-0 hover:bg-gray-50 transition-colors text-left font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif]">
      {/* Organization Logo */}
      <div className="w-12 h-12 bg-white flex-shrink-0 relative overflow-hidden rounded-sm border border-gray-100">
        {logoPath ? (
          <Image src={logoPath} alt={organization} fill className="object-contain p-1" />
        ) : (
          <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400 text-[10px] font-bold uppercase">
            {organization.substring(0,2)}
          </div>
        )}
      </div>

      <div className="flex-1">
        {/* Certification Name */}
        <h3 className="text-[16px] font-semibold text-[rgba(0,0,0,0.9)] leading-tight mb-0.5">
          {name}
        </h3>
        
        {/* Issuing Organization */}
        <p className="text-[14px] text-[rgba(0,0,0,0.9)]">
          {organization}
        </p>
        
        {/* Date Issued */}
        <p className="text-[14px] text-[rgba(0,0,0,0.6)] mt-0.5">
          Issued {issueDate}
        </p>

        {/* Optional Credential ID */}
        {credentialId && (
          <p className="text-[14px] text-[rgba(0,0,0,0.6)]">
            Credential ID {credentialId}
          </p>
        )}

        {/* LinkedIn-Style Skills Block */}
        {skills && skills.length > 0 && (
          <div className="mt-2 flex items-start gap-1">
            <span className="text-[14px] font-semibold text-[rgba(0,0,0,0.9)] whitespace-nowrap">Skills:</span>
            <p className="text-[14px] text-[rgba(0,0,0,0.9)] leading-[1.42857]">
              {skills.map((skill, index) => (
                <React.Fragment key={skill}>
                  {skill}{index < skills.length - 1 && <span className="mx-1 text-[rgba(0,0,0,0.6)]">·</span>}
                </React.Fragment>
              ))}
            </p>
          </div>
        )}

        {/* Show Credential Button */}
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 border border-[rgba(0,0,0,0.6)] text-[rgba(0,0,0,0.7)] hover:bg-gray-100 hover:border-[rgba(0,0,0,0.9)] px-3 py-1 rounded-full text-[14px] font-semibold transition-all w-fit"
          >
            Show credential <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;