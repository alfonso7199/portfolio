import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#121212] z-50 flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.8 }}
        onAnimationComplete={onComplete}
      >
        <motion.div
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white text-5xl font-bold font-pp_neue_montrealthin">
            Alfonso Sánchez
          </span>
          <span className="text-white/70 text-xl font-pp_neue_montrealthin">
            Portfolio
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};