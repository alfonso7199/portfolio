import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="fixed bottom-12 md:bottom-16 right-12 md:right-16 flex flex-col items-end font-pp_neue_montrealthin">
      <AnimatePresence mode="wait">
        {activeSection !== 'projects' && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Alfonso Sánchez
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {activeSection !== 'projects' && (
          <motion.div
            key="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, delay: 0.05, ease: "easeInOut" }}
            className="text-sm sm:text-base md:text-xl mb-2 md:mb-6 text-gray-700 dark:text-gray-300 font-pp_neue_montrealbold font-semibold dark:font-normal"
          >
            Full Stack Developer
          </motion.div>
        )}
      </AnimatePresence>
      
      <nav className="flex flex-col items-end">
        {navItems.map(({ id, label }, index) => (
          <motion.button
            key={id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            onClick={() => setActiveSection(id)}
            className="group text-sm sm:text-base text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out py-1 font-semibold dark:font-normal"
          >
            <motion.span
              layout
              className={`inline-block ${
                activeSection === id ? 'font-bold underline' : ''
              }`}
            >
              {label}
            </motion.span>
          </motion.button>
        ))}
      </nav>
    </div>
  );
};