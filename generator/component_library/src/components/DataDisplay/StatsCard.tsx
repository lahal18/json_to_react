import React from 'react';
import { Card } from '../Layout/Card';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';

export interface StatsCardProps {
  title?: string; // Rule 1: Make optional
  value?: string | number; // Rule 1: Make optional
  icon?: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  description?: string;
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  change,
  description,
  children,
  className = '',
}) => {
  // If children provided, render them
  if (children) {
    return <Card className={className}>{children}</Card>;
  }

  return (
    <Card className={className} padding="md">
      <div className="flex items-center justify-between">
        <div>
          {title && (
            <TextBlock size="sm" color="text-gray-500" className="mb-1">
              {title}
            </TextBlock>
          )}
          
          {value && (
            <Heading level={2} className="text-2xl">
              {value}
            </Heading>
          )}
          
          {change && (
            <div className="flex items-center mt-2">
              <span
                className={`
                  inline-flex items-center text-sm
                  ${change.type === 'increase' ? 'text-green-600' : 'text-red-600'}
                `}
              >
                {change.type === 'increase' ? '↑' : '↓'} {Math.abs(change.value)}%
              </span>
              <span className="ml-2 text-sm text-gray-500">vs last month</span>
            </div>
          )}
          
          {description && (
            <TextBlock size="sm" color="text-gray-500" className="mt-2">
              {description}
            </TextBlock>
          )}
        </div>
        
        {icon && (
          <div className="text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
export default StatsCard;