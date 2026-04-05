import React from 'react';
import { Card } from '../Layout/Card';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';
import { Badge } from '../ContentDisplay/Badge';

export interface PricingPlan {
  name: string;
  price: string;
  description?: string;
  features: string[];
  cta: {
    text: string;
    onClick: () => void;
  };
  popular?: boolean;
  period?: 'month' | 'year';
}

export interface PricingTableProps {
  plans?: PricingPlan[]; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  columns?: 2 | 3 | 4;
}

export const PricingTable: React.FC<PricingTableProps> = ({
  plans = [], // Rule 2: Default to empty array
  children,
  className = '',
  columns = 3,
}) => {
  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  // If no plans, don't render
  if (plans.length === 0) return null;

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 ${className}`}>
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};

const PricingCard: React.FC<PricingPlan> = ({
  name,
  price,
  description,
  features = [], // Rule 2: Default to empty array
  cta,
  popular = false,
  period = 'month',
}) => {
  return (
    <Card
      className={`
        relative h-full
        ${popular ? 'border-2 border-blue-500 shadow-xl' : ''}
      `}
      padding="lg"
    >
      {popular && (
        <Badge
          variant="primary"
          className="absolute -top-3 left-1/2 transform -translate-x-1/2"
        >
          Most Popular
        </Badge>
      )}
      
      <div className="text-center">
        <Heading level={3} className="mb-2">
          {name}
        </Heading>
        
        {description && (
          <TextBlock size="sm" color="text-gray-500" className="mb-4">
            {description}
          </TextBlock>
        )}
        
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
        
        {cta && (
          <button
            onClick={cta.onClick}
            className={`
              w-full py-2 px-4 rounded-md font-medium transition-colors mb-6
              ${popular
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }
            `}
          >
            {cta.text}
          </button>
        )}
        
        {features.length > 0 && (
          <ul className="space-y-3 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};
export default PricingTable;