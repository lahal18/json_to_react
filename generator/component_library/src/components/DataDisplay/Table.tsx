import React from 'react';

export interface Column<T = any> {
  key: string;
  title: string;
  render?: (value: any, record: T) => React.ReactNode;
}

export interface TableProps<T = any> {
  columns?: Column<T>[]; // Rule 2: Make optional
  data?: T[]; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
}

export const Table = <T extends Record<string, any>>({
  columns = [], // Rule 2: Default to empty array
  data = [], // Rule 2: Default to empty array
  children,
  className = '',
  striped = true,
  hoverable = true,
  bordered = true,
}: TableProps<T>) => {
  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  // If no columns or data, don't render
  if (columns.length === 0 || data.length === 0) return null;

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((record, index) => (
            <tr
              key={index}
              className={`
                ${striped && index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                ${hoverable ? 'hover:bg-gray-100' : ''}
                ${bordered ? '' : 'border-0'}
              `}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {column.render
                    ? column.render(record[column.key], record)
                    : record[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;