import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[]; // Rule 2: Make optional
  children?: React.ReactNode; // Rule 2: Add children support
  className?: string;
  separator?: React.ReactNode;
  homeHref?: string; // Rule 1: Add home link
  homeLabel?: string; // Rule 1: Add home label
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items = [], // Rule 2: Default to empty array
  children,
  className = '',
  separator = '/',
  homeHref = '/',
  homeLabel = 'Home',
}) => {
  // If children provided, render them
  if (children) {
    return <nav className={`flex ${className}`} aria-label="Breadcrumb">{children}</nav>;
  }

  // If no items, show home only
  const breadcrumbItems = items.length > 0 ? items : [{ label: homeLabel, href: homeHref }];

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">
                {separator}
              </span>
            )}
            {item.href && index < breadcrumbItems.length - 1 ? (
              <a
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm text-gray-900 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;