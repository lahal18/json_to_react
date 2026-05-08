import React from 'react';

export interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string; // <-- Forgiving Prop added!
  children?: React.ReactNode;
  className?: string;
  background?: string;
  textAlign?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'py-16',
  md: 'py-24',
  lg: 'py-32',
};

const textAlignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  children,
  className = '',
  background = 'bg-gray-50',
  textAlign = 'center',
  size = 'md',
}) => {
  return (
    <section className={`${background} ${sizeClasses[size]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={textAlignClasses[textAlign]}>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          
          {subtitle && (
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* <-- Forgiving Button Logic --> */}
          {buttonText && (
            <div className="mt-8 flex justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm">
                {buttonText}
              </button>
            </div>
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
export default Hero;