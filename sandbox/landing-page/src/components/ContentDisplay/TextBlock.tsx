import React from 'react';

export interface TextBlockProps {
  children?: React.ReactNode; // Made optional
  text?: string; // Forgiving fallback
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  color?: string;
  align?: 'left' | 'center' | 'right';
  as?: 'p' | 'span' | 'div';
}

const sizeClasses = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const TextBlock: React.FC<TextBlockProps> = ({
  children,
  text,
  className = '',
  size = 'base',
  color = 'text-gray-700',
  align = 'left',
  as: Component = 'p',
}) => {
  return (
    <Component
      className={`
        ${sizeClasses[size]}
        ${alignClasses[align]}
        ${color}
        ${className}
      `}
    >
      {children || text}
    </Component>
  );
};
export default TextBlock;