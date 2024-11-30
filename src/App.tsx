import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CornerDecorations } from './components/CornerDecorations';
import { IntroAnimation } from './components/IntroAnimation';
import { Section } from './types';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : (
        <div className={`min-h-screen font-pp_neue_montrealthin transition-colors duration-300 ${
          isDark ? 'dark bg-[#121212] text-white' : 'bg-[#e8e8e8] text-gray-900'
        }`}>
          <AnimatedBackground />
          <CornerDecorations />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <Content activeSection={activeSection} />
        </div>
      )}
    </>
  );
}

export default App;