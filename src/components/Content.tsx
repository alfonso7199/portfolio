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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Welcome</h1>
        <p className="text-lg md:text-xl text-gray-900 dark:text-white leading-relaxed">
          On a journey to becoming a skilled full-stack developer, combining technology expertise with a love for building meaningful digital experiences.
        </p>
      </div>
    ),
    projects: (
      <div className="space-y-6 font-pp_neue_montrealthin">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="space-y-8 mt-6">
          <div>
            <a
              href="https://github.com/alfonso7199/42-Madrid-alfsanch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              42 Madrid
            </a>
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 mt-2">
              A collection of projects developed as part of the 42 Madrid curriculum, showcasing skills in C, algorithms, and system programming.
            </p>
          </div>
          <div>
            <a
              href="https://github.com/alfonso7199/nfcPlay-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              NFC Play!
            </a>
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 mt-2">
              An application designed for outdoor games using NFC cards to create fun and interactive experiences.
            </p>
          </div>
        </div>
      </div>
    ),
    info: (
      <div className="space-y-4 font-pp_neue_montrealthin">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
        <p className="text-lg md:text-xl text-gray-900 dark:text-white leading-relaxed">
          Full-stack development enthusiast with a background in multi-platform application studies and a strong passion for technology.
          Proficient in Java, C, and web development, I am always eager to explore new technologies and programming languages.
        </p>
      </div>
    ),
    contact: (
      <div className="space-y-4 font-pp_neue_montrealthin">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="text-lg md:text-xl text-gray-900 dark:text-white leading-relaxed">
          Let's work together! You can reach out to me on LinkedIn by clicking the icon below.
        </p>
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
        className="fixed left-8 md:left-16 top-20 md:top-16 max-w-[calc(100%-4rem)] md:max-w-xl px-4 md:px-0"
      >
        {content[activeSection]}
      </motion.div>
    </AnimatePresence>
  );
};