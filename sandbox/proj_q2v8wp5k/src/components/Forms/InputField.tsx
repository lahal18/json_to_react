import React, { InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Rule 3: Make optional (already optional in HTMLAttributes)
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  helper,
  className = '',
  id,
  onChange = () => {}, // Rule 3: Provide safe default
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        onChange={onChange}
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error ? 'border-red-300' : 'border-gray-300'}
          ${props.disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helper && !error && (
        <p className="mt-1 text-sm text-gray-500">{helper}</p>
      )}
    </div>
  );
};
export default InputField;