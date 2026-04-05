import React from 'react';

export interface ProgressBarProps {
  value?: number; // Rule 1: Make optional
  max?: number;
  className?: string;
  showLabel?: boolean;
  labelPosition?: 'top' | 'right' | 'bottom';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  children?: React.ReactNode; // Rule 2: Add children support
}

const variantClasses = {
  primary: 'bg-blue-600',
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  danger: 'bg-red-600',
};

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-4',
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0, // Rule 1: Default to 0
  max = 100,
  className = '',
  showLabel = false,
  labelPosition = 'top',
  variant = 'primary',
  size = 'md',
  animated = false,
  children,
}) => {
  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const label = showLabel && (
    <span className="text-sm text-gray-600">{percentage.toFixed(0)}%</span>
  );

  return (
    <div className={className}>
      {labelPosition === 'top' && showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          {label}
        </div>
      )}
      
      <div className="relative">
        <div
          className={`
            w-full bg-gray-200 rounded-full overflow-hidden
            ${sizeClasses[size]}
          `}
        >
          <div
            className={`
              ${variantClasses[variant]}
              ${sizeClasses[size]}
              ${animated ? 'progress-bar-animated' : ''}
            `}
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        {labelPosition === 'right' && showLabel && (
          <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-sm">
            {label}
          </span>
        )}
      </div>
      
      {labelPosition === 'bottom' && showLabel && (
        <div className="flex justify-between mt-1">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          {label}
        </div>
      )}
    </div>
  );
};
export default ProgressBar;