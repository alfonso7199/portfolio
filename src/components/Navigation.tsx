import React from 'react';
import { motion } from 'framer-motion';
import { NavItem, Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'info', label: 'Info' },
  { id: 'contact', label: 'Contact' },
  { id: 'faq', label: 'FAQ' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="fixed bottom-16 right-16 flex flex-col items-end space-y-1 font-mono">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl mb-3 font-bold"
      >
        Alfonso Sánchez
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm mb-6 text-gray-600 dark:text-gray-400"
      >
        Full Stack Developer
      </motion.div>
      <nav className="flex flex-col items-end space-y-3">
        {navItems.map(({ id, label }, index) => (
          <motion.button
            key={id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => setActiveSection(id)}
            className="group text-sm hover:text-gray-900 dark:hover:text-white transition-all duration-300 ease-in-out w-24 text-right"
          >
            <motion.span
              layout
              className="inline-block"
            >
              {activeSection === id ? '●' : label}
            </motion.span>
          </motion.button>
        ))}
      </nav>
    </div>
  );
};