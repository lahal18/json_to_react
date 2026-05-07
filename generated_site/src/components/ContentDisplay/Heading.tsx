import React from 'react';

export interface HeadingProps {
  children?: React.ReactNode; // Made optional
  text?: string; // Forgiving fallback
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
}

const levelClasses = {
  1: 'text-4xl md:text-5xl font-bold',
  2: 'text-3xl md:text-4xl font-bold',
  3: 'text-2xl md:text-3xl font-semibold',
  4: 'text-xl md:text-2xl font-semibold',
  5: 'text-lg md:text-xl font-medium',
  6: 'text-base md:text-lg font-medium',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  text,
  level = 1,
  className = '',
  color = 'text-gray-900',
  align = 'left',
}) => {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={`
        ${levelClasses[level]}
        ${alignClasses[align]}
        ${color}
        ${className}
      `}
    >
      {children || text}
    </Tag>
  );
};
export default Heading;