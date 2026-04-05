import React from 'react';

export interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'medium' | 'thick';
  color?: string;
  label?: string; // Rule 1: Add label for text divider
  children?: React.ReactNode; // Rule 2: Add children support for custom content
  labelPosition?: 'left' | 'center' | 'right'; // Rule 1: Add label position
}

const thicknessClasses = {
  horizontal: {
    thin: 'h-px',
    medium: 'h-0.5',
    thick: 'h-1',
  },
  vertical: {
    thin: 'w-px',
    medium: 'w-0.5',
    thick: 'w-1',
  },
};

const labelPositionClasses = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-right',
};

export const Divider: React.FC<DividerProps> = ({
  className = '',
  orientation = 'horizontal',
  thickness = 'thin',
  color = 'bg-gray-200',
  label,
  children,
  labelPosition = 'center',
}) => {
  // If children provided, use them instead of label
  const content = children || label;
  
  if (orientation === 'vertical') {
    return (
      <div
        className={`
          ${thicknessClasses.vertical[thickness]}
          ${color}
          ${className}
        `}
      />
    );
  }

  if (content) {
    return (
      <div className={`flex items-center ${labelPositionClasses[labelPosition]} ${className}`}>
        <div className={`flex-grow ${thicknessClasses.horizontal[thickness]} ${color}`} />
        <span className="flex-shrink mx-4 text-sm text-gray-500">{content}</span>
        <div className={`flex-grow ${thicknessClasses.horizontal[thickness]} ${color}`} />
      </div>
    );
  }

  return (
    <div
      className={`
        ${thicknessClasses.horizontal[thickness]}
        ${color}
        ${className}
      `}
    />
  );
};
export default Divider;