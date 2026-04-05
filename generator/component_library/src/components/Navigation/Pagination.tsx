import React from 'react';

export interface PaginationProps {
  currentPage?: number; // Rule 1: Make optional
  totalPages?: number; // Rule 1: Make optional
  onPageChange?: (page: number) => void; // Rule 3: Make optional
  className?: string;
  siblingCount?: number;
  children?: React.ReactNode; // Rule 2: Add children support
  showFirstLast?: boolean; // Rule 1: Add option
  showPrevNext?: boolean; // Rule 1: Add option
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1, // Rule 1: Default value
  totalPages = 1, // Rule 1: Default value
  onPageChange = (page) => console.log('Page changed to:', page), // Rule 3: Safe default
  className = '',
  siblingCount = 1,
  children,
  showFirstLast = true,
  showPrevNext = true,
}) => {
  // If children provided, render them
  if (children) {
    return <nav className={`flex justify-center ${className}`}>{children}</nav>;
  }

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);
    
    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    if (!showLeftDots && !showRightDots) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (showLeftDots && !showRightDots) {
      for (let i = 1; i <= rightSibling; i++) {
        pages.push(i);
      }
      if (rightSibling < totalPages) {
        pages.push('...');
        pages.push(totalPages);
      }
    } else if (!showLeftDots && showRightDots) {
      pages.push(1);
      if (leftSibling > 1) {
        pages.push('...');
      }
      for (let i = leftSibling; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = leftSibling; i <= rightSibling; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className={`flex justify-center ${className}`}>
      <ul className="flex items-center space-x-2">
        {showFirstLast && (
          <li>
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              aria-label="First page"
            >
              ⟪
            </button>
          </li>
        )}
        
        {showPrevNext && (
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              Previous
            </button>
          </li>
        )}
        
        {getPageNumbers().map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className="px-3 py-1">...</span>
            ) : (
              <button
                onClick={() => handlePageChange(page as number)}
                className={`
                  px-3 py-1 rounded border
                  ${currentPage === page 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'hover:bg-gray-100'
                  }
                `}
              >
                {page}
              </button>
            )}
          </li>
        ))}
        
        {showPrevNext && (
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              Next
            </button>
          </li>
        )}
        
        {showFirstLast && (
          <li>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              aria-label="Last page"
            >
              ⟫
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;