import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', showLabels = false }) => {
  return (
    <div className={`flex gap-6 items-center ${className} fixed left-9 md:left-16 bottom-8`}>
      {showLabels ? (
        <>
          <a
            href="https://linkedin.com/in/alfonso-sanchez2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-current hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <FaLinkedin size={28} />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/alfonso7199"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-current hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <FaGithub size={28} />
            <span>GitHub Profile</span>
          </a>
        </>
      ) : (
        <>
          <a
            href="https://linkedin.com/in/alfonso-sanchez2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <FaLinkedin size={28} className="md:w-8 md:h-8 w-7 h-7" />
          </a>
          <a
            href="https://github.com/alfonso7199"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <FaGithub size={28} className="md:w-8 md:h-8 w-7 h-7" />
          </a>
        </>
      )}
    </div>
  );
};