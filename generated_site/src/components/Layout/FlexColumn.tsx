import React from 'react';

export interface FlexColumnProps {
  children?: React.ReactNode; // Rule 2: Make optional
  className?: string;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'section' | 'article' | 'aside'; // Rule 1: Add element type
  items?: React.ReactNode[]; // Rule 2: Add items array as alternative to children
}

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

export const FlexColumn: React.FC<FlexColumnProps> = ({
  children,
  className = '',
  align = 'stretch',
  justify = 'start',
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
        flex flex-col
        ${alignClasses[align]}
        ${justifyClasses[justify]}
        ${gapClasses[gap]}
        ${className}
      `}
    >
      {content}
    </Component>
  );
};
export default FlexColumn;