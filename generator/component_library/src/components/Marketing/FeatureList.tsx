import React from 'react';

export interface FeatureListProps {
  features?: Array<{
    title: string;
    description?: string;
    icon?: React.ReactNode;
  }>; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  layout?: 'vertical' | 'horizontal';
}

export const FeatureList: React.FC<FeatureListProps> = ({
  features = [], // Rule 2: Default to empty array
  children,
  className = '',
  layout = 'vertical',
}) => {
  return (
    <>
      {/* Render children directly if provided */}
      {children}
      
      {/* Render features array if provided */}
      {features.length > 0 && (
        <ul
          className={`
            ${layout === 'horizontal' ? 'flex flex-wrap gap-8' : 'space-y-4'}
            ${className}
          `}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className={`
                ${layout === 'horizontal' ? 'flex-1 min-w-[200px]' : ''}
              `}
            >
              <div className="flex items-start">
                {feature.icon && (
                  <div className="flex-shrink-0 mr-3 text-blue-600">
                    {feature.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="mt-1 text-gray-600">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default FeatureList;