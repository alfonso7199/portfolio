import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  moveX: number;
  moveY: number;
}

export const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const particleSpeed = 0.2;

  const generateParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const numParticles = 150;

    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2, 
        moveX: Math.random() * particleSpeed - particleSpeed / 2, 
        moveY: Math.random() * particleSpeed - particleSpeed / 2,
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

          if (newX < 0 || newX > window.innerWidth) {
            newX = Math.random() * window.innerWidth;
          }
          if (newY < 0 || newY > window.innerHeight) {
            newY = Math.random() * window.innerHeight;
          }

          return { ...particle, x: newX, y: newY };
        })
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => {
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-black/15 dark:bg-white/15"
            initial={{ x: particle.x, y: particle.y, opacity: 0 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        );
      })}
    </div>
  );
};
