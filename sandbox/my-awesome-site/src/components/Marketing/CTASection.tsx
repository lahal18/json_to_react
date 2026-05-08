import React from 'react';
import { Container } from '../Layout/Container';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';

export interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string; // <-- Forgiving Prop added!
  primaryButton?: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  className?: string;
  background?: string;
  textColor?: string;
  align?: 'left' | 'center' | 'right';
}

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  primaryButton,
  secondaryButton,
  className = '',
  background = 'bg-gradient-to-r from-blue-600 to-indigo-700',
  textColor = 'text-white',
  align = 'center',
}) => {
  return (
    <section className={`${background} ${textColor} ${className}`}>
      <Container maxWidth="xl" padding>
        <div className={`py-16 md:py-24 ${alignClasses[align]}`}>
          <Heading level={2} className="mb-4" color="inherit">
            {title}
          </Heading>
          
          {description && (
            <TextBlock size="lg" className="mb-8 max-w-2xl mx-auto" color="inherit">
              {description}
            </TextBlock>
          )}
          
          <div className="flex flex-wrap gap-4 justify-center">
            
            {/* <-- Forgiving Button Logic --> */}
            {(buttonText || primaryButton) && (
              <button
                onClick={primaryButton?.onClick || (() => console.log('Button clicked!'))}
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-sm"
              >
                {primaryButton?.text || buttonText}
              </button>
            )}
            
            {secondaryButton && (
              <button
                onClick={secondaryButton?.onClick || (() => console.log('Secondary clicked!'))}
                className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default CTASection;