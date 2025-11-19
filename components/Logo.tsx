import React from 'react';
import { COMPANY_NAME, TAGLINE_MAIN } from '../constants';
import { Home } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <section id="logo-branding" className="bg-brand-light py-16 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <img
          src="/logo.png"
          alt={`${COMPANY_NAME} Logo`}
          className="h-24 md:h-32 w-auto object-contain mb-6"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            target.parentElement?.querySelector('.logo-fallback-main')?.classList.remove('hidden');
          }}
        />
        {/* Fallback for main logo */}
        <div className="logo-fallback-main hidden flex flex-col items-center mb-6">
            <div className="flex items-center justify-center w-24 h-24 bg-brand-green rounded-lg text-white mb-4">
                <Home size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-green leading-none">{COMPANY_NAME}</h1>
        </div>

        <p className="text-2xl md:text-3xl font-serif font-semibold text-brand-dark max-w-2xl">
          {TAGLINE_MAIN}
        </p>
      </div>
    </section>
  );
};
