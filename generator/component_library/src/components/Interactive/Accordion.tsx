import React, { useState } from 'react';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items?: AccordionItem[]; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  allowMultiple?: boolean;
  defaultExpanded?: number[];
}

export const Accordion: React.FC<AccordionProps> = ({
  items = [], // Rule 2: Default to empty array
  children,
  className = '',
  allowMultiple = false,
  defaultExpanded = [],
}) => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>(defaultExpanded);

  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  // If no items, don't render
  if (items.length === 0) return null;

  const toggleItem = (index: number) => {
    if (items[index].disabled) return;

    if (allowMultiple) {
      setExpandedIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setExpandedIndices((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={`divide-y divide-gray-200 border border-gray-200 rounded-lg ${className}`}>
      {items.map((item, index) => {
        const isExpanded = expandedIndices.includes(index);
        const isDisabled = item.disabled;

        return (
          <div key={index} className="bg-white">
            <button
              onClick={() => toggleItem(index)}
              disabled={isDisabled}
              className={`
                w-full px-4 py-4 text-left flex items-center justify-between
                ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}
                focus:outline-none focus:bg-gray-50
              `}
            >
              <span className="font-medium text-gray-900">{item.title}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  isExpanded ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isExpanded && (
              <div className="px-4 pb-4">
                <div className="text-gray-600">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;