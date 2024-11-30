import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../types';

interface ContentProps {
  activeSection: Section;
}

export const Content: React.FC<ContentProps> = ({ activeSection }) => {
  const content = {
    home: (
      <div className="space-y-4 font-pp_neue_montrealthin">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome</h1>
        <p className="text-xl text-gray-900 dark:text-white leading-relaxed">
          Enthusiast of technology and development, learning every day a little bit more to become a better fullstack developer!
        </p>
      </div>
    ),
    projects: (
      <div className="space-y-6 font-pp_neue_montrealthin">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="space-y-4">
          {/* Añadir mañana los proyectos aquí */}
        </div>
      </div>
    ),
    info: (
      <div className="space-y-4 font-pp_neue_montrealthin">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
        <p className="text-xl text-gray-900 dark:text-white leading-relaxed">
          Full stack developer enthusiast with studies in multi platform applications and a strong curiosity for technology.
          I have knowledge in Java and always seek to learn about new technologies and programming languages.
        </p>
      </div>
    ),
    contact: (
      <div className="space-y-4 font-pp_neue_montrealthin">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="text-xl text-gray-900 dark:text-white leading-relaxed">
          Let's work together!
        </p>
      </div>
    ),
    faq: (
      <div className="space-y-6 font-pp_neue_montrealthin">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">FAQ</h2>
        <div className="space-y-4">
          {/* Añadir preguntas frecuentes aquí */}
        </div>
      </div>
    ),
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-16 top-16 max-w-xl"
      >
        {content[activeSection]}
      </motion.div>
    </AnimatePresence>
  );
};