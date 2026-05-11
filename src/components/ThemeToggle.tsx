import React from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-7 right-8 font-pp_neue_montrealthin text-[11px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? 'lights on' : 'lights off'}
    </button>
  );
};