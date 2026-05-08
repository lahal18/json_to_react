import React from 'react';

export interface GridProps {
  children?: React.ReactNode; // Rule 2: Make optional
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'section' | 'article'; // Rule 1: Add element type
  items?: React.ReactNode[]; // Rule 2: Add items array as alternative to children
}

const colsClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
  12: 'grid-cols-1 md:grid-cols-4 lg:grid-cols-12',
};

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-2 md:gap-4',
  md: 'gap-4 md:gap-6',
  lg: 'gap-6 md:gap-8',
};

export const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  cols = 3,
  gap = 'md',
  as: Component = 'div',
  items = [], // Rule 2: Default to empty array
}) => {
  // If no children and no items, don't render
  if (!children && items.length === 0) return null;

  // Determine what to render
  const content = children || items;

  return (
    <Component
      className={`
        grid
        ${colsClasses[cols]}
        ${gapClasses[gap]}
        ${className}
      `}
    >
      {content}
    </Component>
  );
};
export default Grid;