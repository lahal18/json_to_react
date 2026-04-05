import React from 'react';

export interface ContainerProps {
  children?: React.ReactNode; // Rule 2: Make optional
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  padding?: boolean;
  as?: 'div' | 'section' | 'article' | 'main'; // Rule 1: Add element type
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
  none: 'max-w-none',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = true,
  as: Component = 'div', // Rule 1: Allow custom element type
}) => {
  // If no children, don't render
  if (!children) return null;

  return (
    <Component
      className={`
        mx-auto
        ${maxWidthClasses[maxWidth]}
        ${padding ? 'px-4 sm:px-6 lg:px-8' : ''}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};
export default Container;