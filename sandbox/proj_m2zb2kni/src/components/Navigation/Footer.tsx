import React from 'react';

export interface FooterProps {
  className?: string;
  logo?: React.ReactNode;
  copyright?: string;
  sections?: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
  socialLinks?: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  children?: React.ReactNode; // Rule 2: Add children support
}

export const Footer: React.FC<FooterProps> = ({
  className = '',
  logo,
  copyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
  sections = [], // Rule 2: Default to empty array
  socialLinks = [], // Rule 2: Default to empty array
  children,
}) => {
  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and copyright */}
          <div className="col-span-1">
            {logo || <div className="text-2xl font-bold">Logo</div>}
            <p className="mt-4 text-sm text-gray-400">{copyright}</p>
          </div>

          {/* Link sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Children content */}
          {children && (
            <div>
              {children}
            </div>
          )}

          {/* Social links */}
          {socialLinks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="mt-4 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
export default Footer;