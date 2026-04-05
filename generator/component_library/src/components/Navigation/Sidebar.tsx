import React from 'react';

export interface SidebarProps {
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  isOpen?: boolean;
  onClose?: () => void; // Rule 3: Make optional
  position?: 'left' | 'right';
  width?: 'sm' | 'md' | 'lg' | 'full';
  title?: string; // Rule 1: Add title prop
}

const widthClasses = {
  sm: 'w-64',
  md: 'w-80',
  lg: 'w-96',
  full: 'w-full',
};

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className = '',
  isOpen = true,
  onClose = () => {}, // Rule 3: Safe default
  position = 'left',
  width = 'md',
  title,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 h-full bg-white shadow-xl z-50
          transition-transform duration-300
          ${widthClasses[width]}
          ${position === 'left' ? 'left-0' : 'right-0'}
          ${className}
        `}
      >
        <div className="h-full overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Title */}
          {title && (
            <div className="px-4 pt-4 pb-2 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            </div>
          )}
          
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;