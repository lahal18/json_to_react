import React, { useState } from 'react';

export interface SearchBarProps {
  onSearch?: (query: string) => void; // Rule 3: Make optional
  placeholder?: string;
  className?: string;
  debounceMs?: number;
  initialValue?: string; // Rule 1: Add initial value
  children?: React.ReactNode; // Rule 2: Add children support
  buttonText?: string; // Rule 1: Add button text
  showButton?: boolean; // Rule 1: Toggle button visibility
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch = (query) => console.log('Search:', query), // Rule 3: Safe default
  placeholder = 'Search...',
  className = '',
  debounceMs = 300,
  initialValue = '',
  children,
  buttonText = 'Search',
  showButton = false,
}) => {
  const [query, setQuery] = useState(initialValue);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  // If children provided, render them
  if (children) {
    return <div className={className}>{children}</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      onSearch(newQuery);
    }, debounceMs);

    setDebounceTimer(timer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className={`
            w-full px-4 py-2 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${showButton ? 'pr-24' : 'pr-10'}
          `}
        />
        
        {/* Clear button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        {/* Search button */}
        {showButton && (
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {buttonText}
          </button>
        )}
        
        {/* Search icon (when button not shown) */}
        {!showButton && !query && (
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
};
export default SearchBar;