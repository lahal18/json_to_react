import React, { useState } from 'react';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';

export interface FileUploaderProps {
  apiEndpoint?: string;
  label?: string;
  acceptedTypes?: string;
  className?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  apiEndpoint = "https://httpbin.org/post", // Free public endpoint that safely echoes uploads
  label = "Upload your file",
  acceptedTypes = "image/*,.pdf",
  className = "",
}) => {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setStatus('uploading');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className={`p-6 border-2 border-dashed rounded-lg text-center ${className} ${
      status === 'success' ? 'border-green-400 bg-green-50' : 'border-gray-300 bg-gray-50'
    }`}>
      {status === 'success' ? (
        <div>
          <Heading level={4} color="text-green-800">Upload Complete!</Heading>
          <TextBlock size="sm" color="text-green-600">{fileName} has been securely uploaded.</TextBlock>
        </div>
      ) : (
        <div>
          <Heading level={4} className="mb-2 text-gray-700">{label}</Heading>
          <TextBlock size="sm" color="text-gray-500" className="mb-4">
            Accepted files: {acceptedTypes}
          </TextBlock>
          
          <label className="relative cursor-pointer inline-block">
            <span className={`px-4 py-2 rounded shadow-sm text-sm font-medium text-white transition-colors ${
              status === 'uploading' ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}>
              {status === 'uploading' ? 'Uploading...' : 'Choose File'}
            </span>
            <input
              type="file"
              className="hidden"
              accept={acceptedTypes}
              onChange={handleFileChange}
              disabled={status === 'uploading'}
            />
          </label>
          
          {status === 'error' && (
            <TextBlock size="sm" color="text-red-500" className="mt-3">Upload failed. Please try again.</TextBlock>
          )}
        </div>
      )}
    </div>
  );
};
export default FileUploader;