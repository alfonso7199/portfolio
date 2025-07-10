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
        <p className="text-lg md:text-xl text-gray-800 dark:text-white leading-relaxed font-pp_neue_montrealbold font-semibold dark:font-normal">
          On a journey to becoming a skilled full-stack developer, combining technology expertise with a love for building meaningful digital experiences.
        </p>
      </div>
    ),
    projects: (
      <div className="space-y-4 md:space-y-6 font-pp_neue_montrealthin">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="space-y-4 md:space-y-6 lg:space-y-8 mt-4 md:mt-6 max-h-[50vh] md:max-h-none overflow-y-auto pr-2">
          <div>
            <a
              href="https://github.com/alfonso7199/42-Madrid-alfsanch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              42 Madrid
            </a>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 mt-1 md:mt-2 font-pp_neue_montrealbold font-semibold dark:font-normal">
              A collection of projects developed as part of the 42 Madrid curriculum, showcasing skills in C, algorithms, and system programming.
            </p>
          </div>
          <div>
            <a
              href="https://github.com/alfonso7199/nfcPlay-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              NFC Play!
            </a>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 mt-1 md:mt-2 font-pp_neue_montrealbold font-semibold dark:font-normal">
              An application designed for outdoor games using NFC cards to create fun and interactive experiences.
            </p>
          </div>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.alfonso1799.CreatineCalendar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Creatine Tracker
            </a>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 mt-1 md:mt-2 font-pp_neue_montrealbold font-semibold dark:font-normal">
              A mobile application for tracking creatine supplementation and workout progress, available on Google Play Store.
            </p>
          </div>
          <div>
            <a
              href="https://github.com/alfonso7199/42-Madrid-alfsanch/tree/master/so_long"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Monkey Game
            </a>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 mt-1 md:mt-2 font-pp_neue_montrealbold font-semibold dark:font-normal">
              A 2D game developed in C using the MLX library, featuring a monkey character navigating through levels.
            </p>
          </div>
          <div>
            <a
              href="https://github.com/alfonso7199/42-Madrid-alfsanch/tree/master/minishell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Minishell
            </a>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 mt-1 md:mt-2 font-pp_neue_montrealbold font-semibold dark:font-normal">
              A minimal shell implementation in C, supporting basic command execution, pipes, and environment variables.
            </p>
          </div>
        </div>
      </div>
    ),
    info: (
      <div className="space-y-4 font-pp_neue_montrealthin">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
        <p className="text-lg md:text-xl text-gray-800 dark:text-white leading-relaxed font-pp_neue_montrealbold font-semibold dark:font-normal">
          Full-stack development enthusiast with a background in multi-platform application studies and a strong passion for technology.
          Proficient in Java, C, and web development, I am always eager to explore new technologies and programming languages.
        </p>
      </div>
    ),
    contact: (
      <div className="space-y-4 font-pp_neue_montrealthin">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="text-lg md:text-xl text-gray-800 dark:text-white leading-relaxed font-pp_neue_montrealbold font-semibold dark:font-normal">
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
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="fixed left-8 md:left-16 top-20 md:top-16 max-w-[calc(100%-4rem)] md:max-w-xl px-4 md:px-0"
      >
        {content[activeSection]}
      </motion.div>
    </AnimatePresence>
  );
};