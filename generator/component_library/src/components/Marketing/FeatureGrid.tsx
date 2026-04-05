import React from 'react';
import { Grid } from '../Layout/Grid';
import { FeatureCard, type FeatureCardProps } from './FeatureCard';

export interface FeatureGridProps {
  features?: Array<Omit<FeatureCardProps, 'className'>>; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  cols?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features = [], // Rule 2: Default to empty array
  children,
  className = '',
  cols = 3,
  gap = 'md',
}) => {
  return (
    <div className={className}>
      {/* Render children directly if provided */}
      {children}
      
      {/* Render features array if provided */}
      {features.length > 0 && (
        <Grid cols={cols} gap={gap}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Grid>
      )}
    </div>
  );
};
export default FeatureGrid;