import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem, Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const navItems: NavItem[] = [
  { id: 'home',     label: 'Home'     },
  { id: 'projects', label: 'Projects' },
  { id: 'info',     label: 'Info'     },
  { id: 'contact',  label: 'Contact'  },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="fixed bottom-12 md:bottom-16 right-14 md:right-16 flex flex-col items-end font-pp_neue_montrealthin">

      <AnimatePresence mode="wait">
        {activeSection !== 'projects' && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-none"
          >
            Alfonso Sánchez
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeSection !== 'projects' && (
          <motion.div
            key="title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, delay: 0.04, ease: 'easeInOut' }}
            className="text-xs sm:text-sm md:text-base mt-1 mb-3 md:mb-5
                       text-gray-600 dark:text-gray-400"
          >
            Full Stack Developer
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex flex-col items-end gap-0.5">
        {navItems.map(({ id, label }, index) => {
          const isActive = activeSection === id;
          return (
            <motion.button
              key={id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              onClick={() => setActiveSection(id)}
              className="group relative flex items-center gap-2.5 py-1"
            >
              <motion.span
                animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                style={{ transformOrigin: 'right' }}
                className="block h-px w-5 md:w-7 bg-gray-900 dark:bg-white"
              />

              <span
                className={`text-sm md:text-base transition-colors duration-150 ${
                  isActive
                    ? 'text-gray-900 dark:text-white font-bold'
                    : 'text-gray-600 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-200'
                }`}
              >
                {label}
              </span>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
};
