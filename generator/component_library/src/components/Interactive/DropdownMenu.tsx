import React, { useState, useRef, useEffect } from 'react';

export interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
}

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items?: DropdownItem[]; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  position?: 'left' | 'right';
  width?: 'auto' | 'sm' | 'md' | 'lg';
  onOpen?: () => void; // Rule 3: Make optional
  onClose?: () => void; // Rule 3: Make optional
}

const widthClasses = {
  auto: 'w-auto',
  sm: 'w-48',
  md: 'w-56',
  lg: 'w-64',
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items = [], // Rule 2: Default to empty array
  children,
  className = '',
  position = 'left',
  width = 'auto',
  onOpen = () => {}, // Rule 3: Safe default
  onClose = () => {}, // Rule 3: Safe default
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (newState) {
      onOpen();
    } else {
      onClose();
    }
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <div onClick={handleToggle}>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`
            absolute z-50 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
            ${position === 'left' ? 'left-0' : 'right-0'}
            ${widthClasses[width]}
          `}
        >
          {children ? (
            children
          ) : (
            <div className="py-1">
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  {item.divider ? (
                    <div className="border-t border-gray-100 my-1" />
                  ) : (
                    <button
                      onClick={() => {
                        if (!item.disabled) {
                          item.onClick();
                          setIsOpen(false);
                          onClose();
                        }
                      }}
                      disabled={item.disabled}
                      className={`
                        w-full text-left px-4 py-2 text-sm
                        flex items-center space-x-2
                        ${item.disabled 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        }
                      `}
                    >
                      {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                      <span>{item.label}</span>
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default DropdownMenu;