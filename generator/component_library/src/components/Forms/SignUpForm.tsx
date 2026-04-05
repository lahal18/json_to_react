import React, { useState } from 'react';
import { InputField } from './InputField';
import { SubmitButton } from './SubmitButton';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';

export interface SignUpFormProps {
  apiEndpoint?: string;
  title?: string;
  redirectUrl?: string;
  className?: string;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  apiEndpoint = "https://dummyjson.com/users/add", // Free testing endpoint!
  title = "Create an Account",
  redirectUrl = "/login",
  className = "",
}) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {};
    formData.forEach((value, key) => { data[key] = value; });

    // Basic validation
    if (data.password !== data.confirmPassword) {
      setStatus('error');
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          username: data.username,
          password: data.password,
        })
      });

      if (!response.ok) throw new Error("Failed to create account");
      
      setStatus('success');
      
      // Simulate redirect to login page
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 2000);

    } catch (error) {
      setStatus('error');
      setErrorMessage("Registration failed. Username or email may already exist.");
    }
  };

  if (status === 'success') {
    return (
      <div className={`p-8 bg-green-50 rounded-lg text-center ${className}`}>
        <Heading level={3} color="text-green-800">Account Created!</Heading>
        <TextBlock color="text-green-700">Please log in with your new credentials.</TextBlock>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-white rounded-lg shadow-sm border border-gray-100 ${className}`}>
      {title && <Heading level={3} className="mb-6">{title}</Heading>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField label="First Name" name="firstName" required placeholder="Jane" />
          <InputField label="Last Name" name="lastName" required placeholder="Doe" />
        </div>
        <InputField label="Username" name="username" required placeholder="janedoe123" />
        <InputField label="Email" name="email" type="email" required placeholder="jane@example.com" />
        <InputField label="Password" name="password" type="password" required placeholder="Create a password" />
        <InputField label="Confirm Password" name="confirmPassword" type="password" required placeholder="Confirm password" />
        
        {status === 'error' && (
          <TextBlock color="text-red-600" size="sm" className="mb-4">{errorMessage}</TextBlock>
        )}
        
        <SubmitButton loading={status === 'loading'} loadingText="Creating Account..." fullWidth className="mt-6">
          Sign Up
        </SubmitButton>
      </form>
    </div>
  );
};
export default SignUpForm;