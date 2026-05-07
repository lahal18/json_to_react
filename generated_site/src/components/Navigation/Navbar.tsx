import React, { useState } from 'react';

export interface NavbarProps {
  logo?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  links?: Array<{ label: string; href: string }>; // Rule 2: Keep as is, default below
  cta?: React.ReactNode;
  sticky?: boolean;
  transparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  children,
  className = '',
  links = [], // Rule 2: Default to empty array
  cta,
  sticky = false,
  transparent = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`
        w-full
        ${sticky ? 'sticky top-0 z-50' : ''}
        ${transparent ? 'bg-transparent' : 'bg-white shadow-sm'}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo || <span className="text-xl font-bold">Logo</span>}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              {children}
            </div>
          </div>

          {/* CTA Button */}
          {cta && <div className="hidden md:block">{cta}</div>}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            {children}
          </div>
          {cta && <div className="px-4 pb-3">{cta}</div>}
        </div>
      )}
    </nav>
  );
};
export default Navbar;