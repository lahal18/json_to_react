import React from 'react';

export interface SectionProps {
  children?: React.ReactNode; // Rule 2: Make optional
  className?: string;
  backgroundColor?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  id?: string; // Rule 1: Add id for anchoring
  as?: 'section' | 'div' | 'article' | 'header' | 'footer'; // Rule 1: Add element type
  title?: string; // Rule 1: Add title prop
  description?: string; // Rule 1: Add description prop
}

const paddingClasses = {
  none: 'py-0',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16 md:py-24',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  backgroundColor = 'transparent',
  padding = 'md',
  id,
  as: Component = 'section',
  title,
  description,
}) => {
  // If no children and no title/description, don't render
  if (!children && !title && !description) return null;

  return (
    <Component
      id={id}
      className={`
        ${paddingClasses[padding]}
        ${className}
      `}
      style={{ backgroundColor }}
    >
      {title && <h2 className="sr-only">{title}</h2>}
      {description && <div className="hidden">{description}</div>}
      {children}
    </Component>
  );
};
export default Section;