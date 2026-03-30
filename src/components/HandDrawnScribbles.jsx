import { motion } from 'framer-motion';

export const Underline = ({ delay = 0, color = 'var(--accent-orange)' }) => (
  <motion.svg
    width="100%"
    height="10"
    viewBox="0 0 200 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', bottom: -5, left: 0 }}
  >
    <motion.path
      d="M1 5C30 3 100 8 199 4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1.2, ease: "easeInOut" }}
    />
  </motion.svg>
);

export const Circle = ({ delay = 0, color = 'var(--accent-orange)' }) => (
  <motion.svg
    width="120%"
    height="120%"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', top: '-10%', left: '-10%', zIndex: -1 }}
  >
    <motion.path
      d="M50 5C25 5 5 25 5 50C5 75 25 95 50 95C75 95 95 75 95 50C95 25 75 5 51 5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1.5, ease: "easeInOut" }}
    />
  </motion.svg>
);

export const Arrow = ({ delay = 0, color = 'var(--accent-orange)' }) => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M5 20C15 18 30 18 35 20M35 20L28 13M35 20L28 27"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    />
  </motion.svg>
);
