import React from 'react';

export interface HeroSplitProps {
  title?: string; // Rule 1: Make optional
  description?: string; // Rule 1: Make optional
  image?: string;
  children?: React.ReactNode;
  className?: string;
  imagePosition?: 'left' | 'right';
  reverse?: boolean;
}

export const HeroSplit: React.FC<HeroSplitProps> = ({
  title = '', // Rule 1: Default to empty string
  description = '', // Rule 1: Default to empty string
  image,
  children,
  className = '',
  imagePosition = 'right',
  reverse = false,
}) => {
  const contentOrder = reverse
    ? imagePosition === 'right' ? 'order-1 md:order-2' : 'order-1 md:order-1'
    : imagePosition === 'right' ? 'order-1 md:order-1' : 'order-1 md:order-2';

  const imageOrder = reverse
    ? imagePosition === 'right' ? 'order-2 md:order-1' : 'order-2 md:order-2'
    : imagePosition === 'right' ? 'order-2 md:order-2' : 'order-2 md:order-1';

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={contentOrder}>
            {title && (
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-6 text-xl text-gray-500">
                {description}
              </p>
            )}
            {children && (
              <div className="mt-10">
                {children}
              </div>
            )}
          </div>
          
          {image && (
            <div className={imageOrder}>
              <img
                src={image}
                alt={title || 'Hero image'}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default HeroSplit;