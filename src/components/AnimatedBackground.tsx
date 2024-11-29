import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const generateParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const numParticles = 150;

    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
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

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  }, [mouseX, mouseY]);

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      {particles.map((particle) => {
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full dark:bg-white/15 bg-black/15"
            initial={{ 
              x: particle.x,
              y: particle.y,
              opacity: 0 
            }}
            animate={{ 
              opacity: 1,
              x: particle.x + (Math.random() * 40 - 20),
              y: particle.y + (Math.random() * 40 - 20),
            }}
            style={{
              width: particle.size,
              height: particle.size,
              x: particle.x,
              y: particle.y,
            }}
            whileHover={{ scale: 1.2 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          >
            <motion.div
              className="w-full h-full"
              animate={{
                x: smoothMouseX.get() 
                  ? (smoothMouseX.get() - particle.x) * 0.02
                  : 0,
                y: smoothMouseY.get() 
                  ? (smoothMouseY.get() - particle.y) * 0.02
                  : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};