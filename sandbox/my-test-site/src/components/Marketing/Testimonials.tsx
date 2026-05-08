import React, { useState } from 'react';
import { Card } from '../Layout/Card';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

export interface TestimonialsProps {
  testimonials?: Testimonial[]; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  variant?: 'grid' | 'slider' | 'single';
  columns?: 1 | 2 | 3;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = [], // Rule 2: Default to empty array
  children,
  className = '',
  variant = 'grid',
  columns = 2,
  autoplay = false,
  autoplaySpeed = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (autoplay && variant === 'slider' && testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplaySpeed, testimonials.length, variant]);

  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  // If no testimonials, don't render
  if (testimonials.length === 0) return null;

  if (variant === 'grid') {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    };

    return (
      <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    );
  }

  if (variant === 'slider') {
    return (
      <div className={`relative ${className}`}>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-2 h-2 rounded-full transition-colors
                  ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}
                `}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Single testimonial
  return <TestimonialCard {...testimonials[0]} className={className} />;
};

const TestimonialCard: React.FC<Testimonial & { className?: string }> = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating,
  className = '',
}) => {
  if (!quote || !author) return null;

  return (
    <Card className={`h-full ${className}`} padding="lg">
      {rating && (
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      
      <TextBlock size="lg" className="mb-4 italic">
        "{quote}"
      </TextBlock>
      
      <div className="flex items-center">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10 rounded-full mr-3"
          />
        )}
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          {(role || company) && (
            <div className="text-sm text-gray-500">
              {role}{role && company && ' at '}{company}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
export default Testimonials;