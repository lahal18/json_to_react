import React, { InputHTMLAttributes } from 'react';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Rule 1: Add label as alternative to children
  error?: string;
  className?: string;
  children?: React.ReactNode; // Rule 2: Add children support
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Rule 3: Make optional
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  error,
  className = '',
  id,
  children,
  onChange = () => {}, // Rule 3: Safe default
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  const labelContent = children || label; // Rule 1: Support both children and label
  
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-center">
        <input
          type="radio"
          id={radioId}
          onChange={onChange}
          className={`
            w-4 h-4 text-blue-600 border-gray-300
            focus:ring-blue-500
            ${props.disabled ? 'cursor-not-allowed' : ''}
          `}
          {...props}
        />
        {labelContent && (
          <label
            htmlFor={radioId}
            className={`ml-2 text-sm ${props.disabled ? 'text-gray-400' : 'text-gray-700'}`}
          >
            {labelContent}
          </label>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};
export default RadioButton;