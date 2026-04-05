import React from 'react';

export interface HeroCTAProps {
  title?: string; // Rule 1: Make optional
  description?: string; // Rule 1: Make optional
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  background?: string;
}

export const HeroCTA: React.FC<HeroCTAProps> = ({
  title = '', // Rule 1: Default to empty string
  description = '', // Rule 1: Default to empty string
  primaryButton,
  secondaryButton,
  children,
  className = '',
  background = 'bg-gradient-to-r from-blue-600 to-indigo-700',
}) => {
  return (
    <section className={`${background} text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          
          <div className="mt-8 flex justify-center gap-4">
            {primaryButton && (
              <button
                onClick={primaryButton.onClick}
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                {primaryButton.text}
              </button>
            )}
            
            {secondaryButton && (
              <button
                onClick={secondaryButton.onClick}
                className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
              >
                {secondaryButton.text}
              </button>
            )}
            
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroCTA;