import React, { useState } from 'react';
import { InputField } from './InputField';
import { SubmitButton } from './SubmitButton';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';

export interface LoginFormProps {
  apiEndpoint?: string;
  title?: string;
  redirectUrl?: string;
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  apiEndpoint = "https://dummyjson.com/auth/login", // Free testing auth!
  title = "Sign In",
  redirectUrl = "/",
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

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          expiresInMins: 60, // Optional
        })
      });

      if (!response.ok) throw new Error("Invalid username or password");
      
      const result = await response.json();
      
      // Save the secure token to the browser
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('user', JSON.stringify(result));
      
      setStatus('success');
      
      // Simulate redirect
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1500);

    } catch (error) {
      setStatus('error');
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  if (status === 'success') {
    return (
      <div className={`p-8 bg-green-50 rounded-lg text-center ${className}`}>
        <Heading level={3} color="text-green-800">Login Successful!</Heading>
        <TextBlock color="text-green-700">Redirecting to dashboard...</TextBlock>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-white rounded-lg shadow-sm border border-gray-100 ${className}`}>
      {title && <Heading level={3} className="mb-6">{title}</Heading>}
      <form onSubmit={handleSubmit}>
        {/* Note: DummyJSON requires 'username' instead of email for testing */}
        <InputField label="Username" name="username" required placeholder="Try: emilys" />
        <InputField label="Password" name="password" type="password" required placeholder="Try: emilyspass" />
        
        {status === 'error' && (
          <TextBlock color="text-red-600" size="sm" className="mb-4">{errorMessage}</TextBlock>
        )}
        
        <SubmitButton loading={status === 'loading'} loadingText="Authenticating..." fullWidth>
          Sign In
        </SubmitButton>
      </form>
    </div>
  );
};
export default LoginForm;