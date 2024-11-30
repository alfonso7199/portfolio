import React from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 p-2 font-pp_neue_montrealthin text-sm uppercase tracking-wider transition-colors hover:text-gray-600 dark:hover:text-gray-300"
      aria-label="Toggle theme"
    >
      {isDark ? 'lights on' : 'lights off'}
    </button>
  );
};