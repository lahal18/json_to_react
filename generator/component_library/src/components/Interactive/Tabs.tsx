import React, { useState } from 'react';

export interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs?: TabItem[]; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  defaultActiveIndex?: number;
  onChange?: (index: number) => void; // Rule 3: Make optional
  variant?: 'underline' | 'pills' | 'enclosed';
}

const variantClasses = {
  underline: 'border-b border-gray-200',
  pills: 'space-x-2',
  enclosed: 'border-b border-gray-200',
};

const tabVariantClasses = {
  underline: {
    base: 'py-2 px-4 -mb-px',
    active: 'border-b-2 border-blue-600 text-blue-600',
    inactive: 'text-gray-500 hover:text-gray-700 hover:border-gray-300',
    disabled: 'text-gray-300 cursor-not-allowed',
  },
  pills: {
    base: 'py-2 px-4 rounded-md',
    active: 'bg-blue-600 text-white',
    inactive: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
    disabled: 'text-gray-300 cursor-not-allowed',
  },
  enclosed: {
    base: 'py-2 px-4 rounded-t-lg',
    active: 'bg-white text-blue-600 border border-gray-200 border-b-white',
    inactive: 'text-gray-500 hover:text-gray-700',
    disabled: 'text-gray-300 cursor-not-allowed',
  },
};

export const Tabs: React.FC<TabsProps> = ({
  tabs = [], // Rule 2: Default to empty array
  children,
  className = '',
  defaultActiveIndex = 0,
  onChange = () => {}, // Rule 3: Provide safe default
  variant = 'underline',
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  // If no tabs, don't render
  if (tabs.length === 0) return null;

  const handleTabClick = (index: number) => {
    if (!tabs[index].disabled) {
      setActiveIndex(index);
      onChange(index);
    }
  };

  return (
    <div className={className}>
      <div className={`flex ${variantClasses[variant]}`}>
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          const isDisabled = tab.disabled;
          
          let stateClass = '';
          if (isDisabled) {
            stateClass = tabVariantClasses[variant].disabled;
          } else if (isActive) {
            stateClass = tabVariantClasses[variant].active;
          } else {
            stateClass = tabVariantClasses[variant].inactive;
          }

          return (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              disabled={isDisabled}
              className={`
                text-sm font-medium
                ${tabVariantClasses[variant].base}
                ${stateClass}
                ${variant === 'enclosed' && isActive ? 'mb-[-1px]' : ''}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};
export default Tabs;