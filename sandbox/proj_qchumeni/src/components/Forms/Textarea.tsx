import React, { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helper?: string;
  className?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Rule 3: Make optional
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helper,
  className = '',
  id,
  rows = 4,
  onChange = () => {}, // Rule 3: Safe default
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
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
export default Textarea;