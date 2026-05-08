import React, { useState } from 'react';

export interface ImageProps {
  src?: string; // Rule 1: Make optional
  alt?: string; // Rule 1: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  width?: number | string;
  height?: number | string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  lazy?: boolean;
  fallback?: string;
  onLoad?: () => void; // Rule 3: Make optional
  onError?: () => void; // Rule 3: Make optional
}

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

const objectFitClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  children,
  className = '',
  width,
  height,
  rounded = 'none',
  objectFit = 'cover',
  lazy = true,
  fallback,
  onLoad = () => {}, // Rule 3: Safe default
  onError = () => {}, // Rule 3: Safe default
}) => {
  const [error, setError] = useState(false);

  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  // If no src, don't render
  if (!src) return null;

  return (
    <img
      src={error && fallback ? fallback : src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      onLoad={onLoad}
      onError={() => {
        setError(true);
        onError();
      }}
      className={`
        ${roundedClasses[rounded]}
        ${objectFitClasses[objectFit]}
        ${className}
      `}
      style={{ width, height }}
    />
  );
};
export default Image;