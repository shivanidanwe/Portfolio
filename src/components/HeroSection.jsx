import { motion } from 'framer-motion';
import SketchCard from './SketchCard';
import { Underline } from './HandDrawnScribbles';

export default function HeroSection() {
  return (
    <section id="home">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SketchCard tilt={-2} className="hero-sketch-card">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="label-sketch" style={{ marginBottom: '1rem', display: 'block' }}>
              Student / Developer / Problem Solver
            </span>
            
            <h1 className="display-title" style={{ marginBottom: '2rem' }}>
              Building soft<span style={{ fontStyle: 'normal' }}>ware</span><br />
              that feels <span style={{ color: 'var(--accent-orange)' }}>
                human
                <Underline delay={1.2} />
              </span>
            </h1>
            
            <p style={{ 
              maxWidth: '600px', 
              fontSize: '1.2rem', 
              color: 'var(--text-dark)', 
              marginBottom: '3rem',
              lineHeight: 1.5,
               fontFamily: 'var(--font-display)',
               fontStyle: 'italic',
               opacity: 0.8
            }}>
              Hi, I'm Shivani Danwe. A Computer Science student at SVERI's College of Engineering with a passion for building impactful, inclusive digital solutions.
            </p>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <motion.button 
                className="sketch-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              
              <span className="handwritten" style={{ opacity: 0.6 }}>
                (scroll to explore)
              </span>
            </div>
          </motion.div>
        </SketchCard>

        {/* Floating elements for depth */}
        <motion.div
          className="parallax-element"
          style={{ 
            position: 'absolute', top: '15%', right: '10%',
            fontFamily: 'var(--font-hand)', fontSize: '2rem', color: 'var(--accent-orange)', opacity: 0.2
          }}
          animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {`{ code }`}
        </motion.div>
        
        <motion.div
          className="parallax-element"
          style={{ 
            position: 'absolute', bottom: '20%', left: '10%',
            fontFamily: 'var(--font-hand)', fontSize: '1.8rem', color: 'var(--accent-blue)', opacity: 0.15
          }}
          animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {`< engineering />`}
        </motion.div>
      </div>
    </section>
  );
}
