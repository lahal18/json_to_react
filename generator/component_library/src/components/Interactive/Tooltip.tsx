import React, { useState, useRef, useEffect } from 'react';

export interface TooltipProps {
  children: React.ReactNode;
  content?: React.ReactNode; // Rule 1: Make optional
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
  onShow?: () => void; // Rule 3: Make optional
  onHide?: () => void; // Rule 3: Make optional
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delay = 200,
  className = '',
  onShow = () => {}, // Rule 3: Safe default
  onHide = () => {}, // Rule 3: Safe default
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 translate-y-2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 -translate-x-2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 translate-x-2 ml-2',
  };

  const arrowClasses = {
    top: 'bottom-[-4px] left-1/2 transform -translate-x-1/2 border-t-gray-900',
    bottom: 'top-[-4px] left-1/2 transform -translate-x-1/2 border-b-gray-900',
    left: 'right-[-4px] top-1/2 transform -translate-y-1/2 border-l-gray-900',
    right: 'left-[-4px] top-1/2 transform -translate-y-1/2 border-r-gray-900',
  };

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
      onShow();
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
    onHide();
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  // Don't show tooltip if no content
  if (!content) {
    return <>{children}</>;
  }

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`
            absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded
            whitespace-nowrap
            ${positionClasses[position]}
          `}
        >
          {content}
          <div
            className={`
              absolute w-0 h-0 border-4 border-transparent
              ${arrowClasses[position]}
            `}
          />
        </div>
      )}
    </div>
  );
};
export default Tooltip; 