import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../types';

interface ContentProps {
  activeSection: Section;
}

const projects = [
  {
    name: 'Creatine Tracker',
    href: 'https://play.google.com/store/apps/details?id=com.alfonso1799.CreatineCalendar',
    description: 'Mobile app for tracking creatine supplementation and workout progress. Available on Google Play.',
    tags: ['Android', 'Mobile'],
    year: '2024',
  },
  {
    name: 'Code Duel',
    href: 'https://play.google.com/store/apps/details?id=com.sonolDev.CodeDuel',
    description: 'Competitive coding platform where developers challenge each other in real-time programming duels.',
    tags: ['Android', 'Firebase'],
    year: '2024',
  },
  {
    name: 'Spritecut',
    href: 'https://spritecut.es/',
    description: 'Web tool for sprite sheet generation and manipulation, for game developers and digital artists.',
    tags: ['React', 'TypeScript'],
    year: '2024',
  },
  {
    name: 'Monkey Game',
    href: 'https://github.com/alfonso7199/42-Madrid-alfsanch/tree/master/so_long',
    description: '2D game built in C with the MLX library — a monkey navigating through hand-crafted tile levels.',
    tags: ['C', 'MLX'],
    year: '2023',
  },
  {
    name: 'Cub3D',
    href: 'https://github.com/alfonso7199/cub3d',
    description: 'Raycasting 3D engine inspired by Wolfenstein 3D, written in C as part of the 42 curriculum.',
    tags: ['C', 'Raycasting'],
    year: '2023',
  },
  {
    name: 'Minishell',
    href: 'https://github.com/alfonso7199/42-Madrid-alfsanch/tree/master/minishell',
    description: 'Unix shell in C — command execution, pipes, redirections, and environment variables.',
    tags: ['C', 'Unix'],
    year: '2023',
  },
  {
    name: '42 Madrid',
    href: 'https://github.com/alfonso7199/42-Madrid-alfsanch',
    description: 'Full collection from the 42 curriculum — algorithms, memory management, and systems engineering.',
    tags: ['C', 'Systems'],
    year: '2022–24',
  },
  {
    name: 'NFC Play!',
    href: 'https://github.com/alfonso7199/nfcPlay-',
    description: 'Outdoor game app using NFC card scanning to trigger location-based interactive experiences.',
    tags: ['Android', 'NFC'],
    year: '2024',
  },
];

const skills = [
  { category: 'Languages', items: ['Java', 'Swift', 'C', 'TypeScript'] },
  { category: 'Mobile',    items: ['Android', 'Swift', 'React Native'] },
  { category: 'Web',       items: ['React', 'Vite', 'Tailwind CSS'] },
  { category: 'Tools',     items: ['Git', 'Firebase', 'Linux', 'Figma'] },
];


const ProjectList: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [canScrollUp,   setCanScrollUp]   = useState(false);

  const checkScroll = () => {
    const el = listRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 8);
    setCanScrollDown(el.scrollTop < el.scrollHeight - el.clientHeight - 8);
  };

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const t = setTimeout(checkScroll, 80);
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(t);
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div className="relative">

      <div
        className={`absolute top-0 inset-x-0 h-6 z-10 pointer-events-none transition-opacity duration-300 ${
          canScrollUp ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ background: 'linear-gradient(to bottom, var(--bg-main) 10%, transparent)' }}
      />

      <div
        ref={listRef}
        className="space-y-0 max-h-[52vh] lg:max-h-[62vh] overflow-y-auto
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="h-px bg-gray-300 dark:bg-gray-800 mb-4" />

            <div className="pb-4 group">
              {/* Index + name + arrow */}
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] text-gray-500 dark:text-gray-600 tabular-nums shrink-0 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-xl md:text-2xl lg:text-3xl font-bold
                             text-gray-900 dark:text-white
                             hover:text-gray-500 dark:hover:text-gray-400
                             transition-colors duration-150 leading-snug"
                >
                  {project.name}
                </a>

                <span
                  className="text-gray-500 dark:text-gray-600 text-base
                             opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0"
                >
                  ↗
                </span>
              </div>

              <div className="flex items-center justify-between mt-1 ml-[26px]">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      {i > 0 && (
                        <span className="text-gray-400 dark:text-gray-700 text-xs select-none">·</span>
                      )}
                      <span className="text-[11px] uppercase tracking-widest text-gray-600 dark:text-gray-500">
                        {tag}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
                <span className="text-[11px] text-gray-500 dark:text-gray-600 tabular-nums ml-4 shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300
                            leading-relaxed mt-2 ml-[26px]">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}

        <div className="h-px bg-gray-300 dark:bg-gray-800" />
        <div className="h-6" />
      </div>

      <div
        className={`absolute bottom-0 inset-x-0 h-10 z-10 pointer-events-none transition-opacity duration-300 ${
          canScrollDown ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ background: 'linear-gradient(to top, var(--bg-main) 20%, transparent)' }}
      >
        <div className="absolute bottom-1 left-0 flex items-center gap-1.5">
          {[0, 0.15, 0.3].map((delay, i) => (
            <span
              key={i}
              className="block w-1 h-1 rounded-full bg-gray-500 dark:bg-gray-600"
              style={{ animation: `pulse-dot 1.2s ease-in-out ${delay}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export const Content: React.FC<ContentProps> = ({ activeSection }) => {
  const sections: Record<Section, React.ReactNode> = {

    home: (
      <div className="space-y-5">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Welcome.
          </h1>
        </div>
        <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed max-w-sm">
          On a journey to becoming a skilled full-stack developer — combining
          systems-level knowledge with modern mobile and web development.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
          {['Java', 'Swift', 'C', 'React', 'TypeScript'].map(t => (
            <span key={t} className="text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-600">
              {t}
            </span>
          ))}
        </div>
      </div>
    ),

    projects: (
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
          <span className="text-xs text-gray-500 dark:text-gray-600 tabular-nums tracking-wider">
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
        <ProjectList />
      </div>
    ),

    info: (
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gray-600 dark:text-gray-500 mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Alfonso<br />Sánchez
          </h2>
        </div>

        <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed max-w-sm">
          Full-stack developer with a background in multi-platform application
          development and a diploma from 42 Madrid. I enjoy working across the
          whole stack — from low-level C to Android apps and web interfaces.
        </p>

        <div className="space-y-0 pt-2 max-w-sm">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.07 }}
            >
              <div className="h-px bg-gray-300 dark:bg-gray-800" />
              <div className="flex items-baseline justify-between py-2.5 gap-4">
                <span className="text-[11px] uppercase tracking-widest text-gray-600 dark:text-gray-600 shrink-0">
                  {group.category}
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-300 text-right leading-relaxed">
                  {group.items.join(' · ')}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="h-px bg-gray-300 dark:bg-gray-800" />
        </div>
      </div>
    ),

    contact: (
      <div className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gray-600 dark:text-gray-500 mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Let's<br />work together.
          </h2>
        </div>
        <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed max-w-sm">
          Open to opportunities, collaborations, and interesting conversations.
          Find me on LinkedIn or explore my code on GitHub.
        </p>
        <div className="space-y-1 pt-1">
          <p className="text-sm text-gray-600 dark:text-gray-500 uppercase tracking-widest">
            Madrid, Spain
          </p>
        </div>
      </div>
    ),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
        className="fixed left-8 md:left-16 top-20 md:top-16
                   max-w-[calc(100%-4rem)] md:max-w-xs lg:max-w-lg
                   max-h-[calc(100vh-12rem)]
                   px-4 md:px-0
                   overflow-y-auto
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {sections[activeSection]}
      </motion.div>
    </AnimatePresence>
  );
};
