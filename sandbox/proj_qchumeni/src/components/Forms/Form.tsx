import React from 'react';

export interface FormProps {
  children?: React.ReactNode;
  onSubmit?: (data: Record<string, any>) => void; // Made optional!
  className?: string;
  method?: 'GET' | 'POST';
  encType?: 'multipart/form-data' | 'application/x-www-form-urlencoded' | 'text/plain';
}

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  className = '',
  method = 'POST',
  encType,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });
    
    // Forgiving Logic: If no submit handler is passed, just log it.
    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log('Form Submitted (AI Placeholder):', data);
      alert('Form submitted! Check console for data.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method={method}
      encType={encType}
      className={className}
      noValidate
    >
      {children}
    </form>
  );
};
export default Form;