import React from 'react';
import { Card } from '../Layout/Card';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';

export interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  children?: React.ReactNode; // Forgiving children
}

const variantClasses = {
  default: 'bg-white',
  outlined: 'border-2 border-gray-200 bg-transparent',
  elevated: 'shadow-xl',
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className = '',
  variant = 'default',
  children,
}) => {
  return (
    <Card
      className={`
        ${variantClasses[variant]}
        ${className}
      `}
      padding="lg"
      hover
    >
      {icon && <div className="mb-4 text-blue-600">{icon}</div>}
      
      {title && (
        <Heading level={3} className="mb-2">
          {title}
        </Heading>
      )}
      
      {description && (
        <TextBlock color="text-gray-600">
          {description}
        </TextBlock>
      )}

      {/* Render any AI-hallucinated children here */}
      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
};
export default FeatureCard;