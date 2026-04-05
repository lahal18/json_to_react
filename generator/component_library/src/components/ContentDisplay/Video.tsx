import React from 'react';

export interface VideoProps {
  src?: string; // Rule 1: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  onPlay?: () => void; // Rule 3: Make optional
  onPause?: () => void; // Rule 3: Make optional
  onEnded?: () => void; // Rule 3: Make optional
}

export const Video: React.FC<VideoProps> = ({
  src,
  children,
  className = '',
  width,
  height,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  poster,
  onPlay = () => {}, // Rule 3: Safe default
  onPause = () => {}, // Rule 3: Safe default
  onEnded = () => {}, // Rule 3: Safe default
}) => {
  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  // If no src, don't render
  if (!src) return null;

  return (
    <video
      src={src}
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
      className={className}
      style={{ width, height }}
    />
  );
};
export default Video;