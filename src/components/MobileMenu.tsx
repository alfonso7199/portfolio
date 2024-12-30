import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../types';
import { SocialLinks } from './SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
  activeSection,
  setActiveSection,
}) => {
  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
    setIsOpen(false); // Cierra el menú al seleccionar una sección
  };

  return (
    <>
      {/* Botón de menú que alterna entre Menu y X */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-4 z-50 block lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú desplegable cuando está abierto */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#e8e8e8] dark:bg-[#121212] z-40 flex justify-center items-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {/* Enlaces del menú */}
              {['home', 'projects', 'info', 'contact', 'faq'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section as Section)}
                  className={`text-xl ${
                    activeSection === section
                      ? 'font-bold'
                      : 'text-gray-600 dark:text-gray-400'
                  } hover:text-gray-900 dark:hover:text-white transition-colors`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Los íconos de las redes sociales */}
            <SocialLinks className="mt-12" showLabels />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
