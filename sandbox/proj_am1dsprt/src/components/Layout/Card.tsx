import React from 'react';

export interface CardProps {
  children?: React.ReactNode; // Rule 2: Make optional
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  border?: boolean;
  hover?: boolean;
  as?: 'div' | 'article' | 'section'; // Rule 1: Add element type
  onClick?: () => void; // Rule 3: Add click handler
  title?: string; // Rule 1: Add title prop
  subtitle?: string; // Rule 1: Add subtitle prop
  image?: string; // Rule 1: Add image prop
  imageAlt?: string; // Rule 1: Add image alt prop
  footer?: React.ReactNode; // Rule 1: Add footer prop
}

const paddingClasses = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const shadowClasses = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-2xl',
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  rounded = 'lg',
  border = false,
  hover = false,
  as: Component = 'div',
  onClick,
  title,
  subtitle,
  image,
  imageAlt = '',
  footer,
}) => {
  // If no content at all, don't render
  if (!children && !title && !subtitle && !image && !footer) return null;

  return (
    <Component
      onClick={onClick}
      className={`
        bg-white
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${roundedClasses[rounded]}
        ${border ? 'border border-gray-200' : ''}
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Image */}
      {image && (
        <div className="overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-6">
          <img 
            src={image} 
            alt={imageAlt || title || 'Card image'} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      {/* Title */}
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {title}
        </h3>
      )}
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-gray-500 mb-4">
          {subtitle}
        </p>
      )}
      
      {/* Main content */}
      {children}
      
      {/* Footer */}
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          {footer}
        </div>
      )}
    </Component>
  );
};
export default Card;