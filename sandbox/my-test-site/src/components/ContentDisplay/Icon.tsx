import React from 'react';

export interface IconProps {
  name?: string; // Rule 1: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  onClick?: () => void; // Rule 3: Make optional
}

const sizeClasses = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export const Icon: React.FC<IconProps> = ({
  name,
  children,
  className = '',
  size = 'md',
  color = 'currentColor',
  onClick = () => {}, // Rule 3: Safe default
}) => {
  // If children provided, render them
  if (children) {
    return <span className={className} onClick={onClick}>{children}</span>;
  }

  // If no name, render a default placeholder
  // This is a simple implementation. In practice, you'd want to use an icon library
  // or SVG sprite system
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={name === 'star' ? "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" : "M13 10V3L4 14h7v7l9-11h-7z"}
      />
    </svg>
  );
};
export default Icon;