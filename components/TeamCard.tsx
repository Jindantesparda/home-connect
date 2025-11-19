import React from 'react';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Header Gradient - Zimbabwe Theme (Green/Gold/Brown) */}
      <div className="h-32 bg-gradient-to-r from-brand-green via-brand-dark to-brand-brown relative">
        <div className="absolute top-0 right-0 w-20 h-full bg-brand-gold/20 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute -bottom-12 left-6">
          <img 
            src={member.imageUrl || `https://picsum.photos/seed/${member.imageSeed}/200/200`} 
            alt={member.name} 
            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md bg-white"
          />
        </div>
      </div>
      <div className="pt-14 px-6 pb-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 font-serif">{member.name}</h3>
        <p className="text-sm font-bold text-brand-orange uppercase tracking-wide mb-1">{member.role}</p>
        <p className="text-xs text-brand-brown italic mb-4">"{member.tagline}"</p>
        
        <div className="mt-auto">
          <ul className="space-y-2">
            {member.description.slice(0, 3).map((desc, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-brand-gold mt-1 text-lg">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};