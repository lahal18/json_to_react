import React, { InputHTMLAttributes } from 'react';

export interface ToggleSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string; // Rule 1: Add label as alternative to children
  description?: string;
  className?: string;
  children?: React.ReactNode; // Rule 2: Add children support
  onChange?: (checked: boolean) => void; // Rule 3: Make optional
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  description,
  className = '',
  id,
  checked,
  children,
  disabled,
  onChange = () => {}, // Rule 3: Safe default
  ...props
}) => {
  const toggleId = id || `toggle-${Math.random().toString(36).substring(2, 11)}`;
  const labelContent = children || label; // Rule 1: Support both children and label
  
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-center">
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          id={toggleId}
          disabled={disabled}
          onClick={() => !disabled && onChange(!checked)}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full
            transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            ${checked ? 'bg-blue-600' : 'bg-gray-200'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition-transform
              ${checked ? 'translate-x-6' : 'translate-x-1'}
            `}
          />
        </button>
        {(labelContent || description) && (
          <div className="ml-3">
            {labelContent && (
              <label
                htmlFor={toggleId}
                className={`text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-700'}`}
              >
                {labelContent}
              </label>
            )}
            {description && (
              <p className={`text-sm ${disabled ? 'text-gray-300' : 'text-gray-500'}`}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default ToggleSwitch;