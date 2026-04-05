// Remove FormEvent from the import list
import React, { useState } from 'react';
import { InputField } from './InputField';
import { Textarea } from './Textarea';
import { SubmitButton } from './SubmitButton';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';

export interface ContactFormProps {
  apiEndpoint?: string; // This is where the API Key/URL goes!
  title?: string;
  successMessage?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  apiEndpoint = "", // The generator will pass the key here
  title = "Send us a message",
  successMessage = "Thank you! We will get back to you shortly.",
  className = "",
}) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Add "React." in front of FormEvent
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!apiEndpoint) {
      alert("No API endpoint configured! This is a UI preview.");
      return;
    }

    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    
    // The TypeScript-safe way to get form data
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      // This is the actual Backend connection!
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === 'success') {
    return (
      <div className={`p-8 bg-green-50 rounded-lg text-center border border-green-200 ${className}`}>
        <Heading level={3} color="text-green-800" className="mb-2">Success!</Heading>
        <TextBlock color="text-green-700">{successMessage}</TextBlock>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-white rounded-lg shadow-sm border border-gray-100 ${className}`}>
      {title && <Heading level={3} className="mb-6">{title}</Heading>}
      
      <form onSubmit={handleSubmit}>
        <InputField label="Name" name="name" required placeholder="John Doe" />
        <InputField label="Email" name="email" type="email" required placeholder="john@example.com" />
        <Textarea label="Message" name="message" required rows={4} placeholder="How can we help you?" />
        
        {status === 'error' && (
          <TextBlock color="text-red-600" size="sm" className="mb-4">{errorMessage}</TextBlock>
        )}
        
        <SubmitButton loading={status === 'loading'} loadingText="Sending..." fullWidth>
          Send Message
        </SubmitButton>
      </form>
    </div>
  );
};
export default ContactForm;