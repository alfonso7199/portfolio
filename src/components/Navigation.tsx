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
    <div className="fixed bottom-16 right-16 flex flex-col items-end font-pp_neue_montrealthin">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-gray-900 dark:text-white"
      >
        Alfonso Sánchez
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl mb-6 text-gray-900 dark:text-gray-300"
      >
        Full Stack Developer
      </motion.div>
      <nav className="flex flex-col items-end">
        {navItems.map(({ id, label }, index) => (
          <motion.button
            key={id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => setActiveSection(id)}
            className="group text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out w-24 text-right p-2 rounded-md"
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
