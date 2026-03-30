import { motion } from 'framer-motion';

export default function SketchCard({ children, className = '', tilt = -1, delay = 0 }) {
  return (
    <motion.div
      className={`sketch-card ${className}`}
      initial={{ opacity: 0, y: 50, rotate: tilt - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        delay, 
        duration: 0.8, 
        ease: [0.19, 1, 0.22, 1] 
      }}
      style={{ transformOrigin: 'center rotate' }}
    >
      <div className="sketch-card-margin" />
      <div className="pinned-note" aria-hidden="true" />
      {children}
    </motion.div>
  );
}
