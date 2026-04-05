import React, { SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[]; // Rule 2: Make optional
  error?: string;
  helper?: string;
  className?: string;
  children?: React.ReactNode; // Rule 2: Add children support
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Rule 3: Make optional
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  label,
  options = [], // Rule 2: Default to empty array
  error,
  helper,
  className = '',
  id,
  children,
  onChange = () => {}, // Rule 3: Safe default
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          onChange={onChange}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm appearance-none
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${error ? 'border-red-300' : 'border-gray-300'}
            ${props.disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helper && !error && (
        <p className="mt-1 text-sm text-gray-500">{helper}</p>
      )}
    </div>
  );
};
export default SelectDropdown;