import React from 'react';

export interface HeroWithImageProps {
  title?: string; // Rule 1: Make optional
  subtitle?: string; // Rule 1: Make optional
  imageUrl: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const HeroWithImage: React.FC<HeroWithImageProps> = ({
  title = '', // Rule 1: Default to empty string
  subtitle = '', // Rule 1: Default to empty string
  imageUrl,
  imageAlt = 'Hero background',
  children,
  className = '',
  overlay = true,
  overlayOpacity = 50,
}) => {
  return (
    <section
      className={`relative bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center text-white">
          {title && (
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-10">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default HeroWithImage;