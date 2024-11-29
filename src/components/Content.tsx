import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../types';

interface ContentProps {
  activeSection: Section;
}

export const Content: React.FC<ContentProps> = ({ activeSection }) => {
  const content = {
    home: (
      <div className="space-y-4 font-mono">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
        Enthusiast of technology and development, learning every day a little bit more to become a better fullstack developer!
        </p>
      </div>
    ),
    projects: (
      <div className="space-y-6 font-mono">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="space-y-4">
          {/* Añadir  maañaana los proyectos aqui */}
        </div>
      </div>
    ),
    info: (
      <div className="space-y-4 font-mono">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Full stack developer enthusiast with studies in multi platform applications and a strong curiosity for technology.
           I have knowledge in Java and always seek to learn about new technologies and programming languages.
        </p>
      </div>
    ),
    contact: (
      <div className="space-y-4 font-mono">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Let's work together!.
        </p>
      </div>
    ),
    faq: (
      <div className="space-y-6 font-mono">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="space-y-4">
          {/* añadir  preguntas frecuentes aqui */}
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
        className="fixed left-8 top-24 max-w-xl"
      >
        {content[activeSection]}
      </motion.div>
    </AnimatePresence>
  );
};