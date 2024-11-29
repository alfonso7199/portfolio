import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Section } from './types';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen font-mono transition-colors duration-300 ${
      isDark ? 'dark bg-[#121212] text-white' : 'bg-[#e8e8e8] text-gray-900'
    }`}>
      <AnimatedBackground />

      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
    </div>
  );
}

export default App;