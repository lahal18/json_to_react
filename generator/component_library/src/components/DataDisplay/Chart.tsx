import React from 'react';

// Note: In a real project, you'd want to use a charting library like recharts or visx
// This is a simple placeholder component
export interface ChartProps {
  type?: 'line' | 'bar' | 'pie' | 'area'; // Rule 1: Make optional
  data?: any[]; // Rule 2: Make optional
  className?: string;
  title?: string;
  height?: number;
  children?: React.ReactNode; // Rule 2: Add children support
}

export const Chart: React.FC<ChartProps> = ({
  type = 'line', // Rule 1: Default value
  data = [], // Rule 2: Default to empty array
  className = '',
  title,
  height = 300,
  children,
}) => {
  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div
        className="flex items-center justify-center bg-gray-50 rounded border-2 border-dashed border-gray-300"
        style={{ height }}
      >
        <p className="text-gray-500">
          {data.length > 0 ? (
            <>Chart component - {type.charAt(0).toUpperCase() + type.slice(1)} Chart</>
          ) : (
            <>No data available</>
          )}
          <br />
          <span className="text-sm">(Integrate with a charting library)</span>
        </p>
      </div>
    </div>
  );
};
export default Chart;