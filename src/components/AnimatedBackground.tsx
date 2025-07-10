import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  moveX: number;
  moveY: number;
  type: 'star4' | 'star5' | 'diamond' | 'triangle';
  rotation: number;
  rotationSpeed: number;
}

export const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const particleSpeed = 0.12;

  const generateParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
      const type = Math.random() > 0.75 ? 'star5' : Math.random() > 0.5 ? 'star4' : Math.random() > 0.25 ? 'diamond' : 'triangle';
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 4, 
        moveX: Math.random() * particleSpeed - particleSpeed / 2, 
        moveY: Math.random() * particleSpeed - particleSpeed / 2,
        type,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
      });
    }

    setParticles(newParticles);
  }, []);

  useEffect(() => {
    generateParticles();
    window.addEventListener('resize', generateParticles);

    return () => {
      window.removeEventListener('resize', generateParticles);
    };
  }, [generateParticles]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((particles) =>
        particles.map((particle) => {
          let newX = particle.x + particle.moveX;
          let newY = particle.y + particle.moveY;
          let newRotation = particle.rotation + particle.rotationSpeed;

          if (newX < 0 || newX > window.innerWidth) {
            newX = Math.random() * window.innerWidth;
          }
          if (newY < 0 || newY > window.innerHeight) {
            newY = Math.random() * window.innerHeight;
          }

          return { ...particle, x: newX, y: newY, rotation: newRotation };
        })
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const renderParticle = (particle: Particle) => {
    const baseClasses = "absolute bg-black/15 dark:bg-white/10";
    
    switch (particle.type) {
      case 'star5':
        return (
          <motion.div
            key={particle.id}
            className={baseClasses}
            initial={{ x: particle.x, y: particle.y, opacity: 0, scale: 0 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: 1,
              scale: 1,
              rotate: particle.rotation,
            }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 12,
            }}
            style={{
              width: particle.size,
              height: particle.size,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          />
        );
      
      case 'star4':
        return (
          <motion.div
            key={particle.id}
            className={baseClasses}
            initial={{ x: particle.x, y: particle.y, opacity: 0, scale: 0 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: 1,
              scale: 1,
              rotate: particle.rotation,
            }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 15,
            }}
            style={{
              width: particle.size,
              height: particle.size,
              clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
            }}
          />
        );
      
      case 'diamond':
        return (
          <motion.div
            key={particle.id}
            className={baseClasses}
            initial={{ x: particle.x, y: particle.y, opacity: 0, scale: 0 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: 1,
              scale: 1,
              rotate: particle.rotation,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 18,
            }}
            style={{
              width: particle.size,
              height: particle.size,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
        );
      
      default: // triangle
        return (
          <motion.div
            key={particle.id}
            className={baseClasses}
            initial={{ x: particle.x, y: particle.y, opacity: 0, scale: 0 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: 1,
              scale: 1,
              rotate: particle.rotation,
            }}
            transition={{
              type: "spring",
              stiffness: 55,
              damping: 20,
            }}
            style={{
              width: particle.size,
              height: particle.size,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map(renderParticle)}
    </div>
  );
};
