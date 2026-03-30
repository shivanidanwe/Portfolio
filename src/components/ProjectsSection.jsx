import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SketchCard from './SketchCard';
import { Arrow, Circle } from './HandDrawnScribbles';

const projects = [
  {
    num: '01',
    title: 'TRAVION',
    subtitle: 'Tourist Safety Application',
    description: 'A national-scale travel safety platform leveraging Aadhaar/Passport verification, real-time GPS tracking, AI-based risk detection, e-FIR filing, and blockchain integrity.',
    tags: ['AI/ML', 'Blockchain', 'IoT', 'Python', 'React'],
    tilt: -1.5,
  },
  {
    num: '02',
    title: 'Inclusive Voting System',
    subtitle: 'Accessible Technology',
    description: 'An accessible voting system using fingerprint authentication and a sign-language glove — enabling secure and independent voting for physically challenged citizens.',
    tags: ['Biometrics', 'IoT', 'Accessibility', 'Python'],
    tilt: 1.2,
  },
  {
    num: '03',
    title: 'Drivio',
    subtitle: 'Vehicle Rental Service',
    description: 'A full-stack web-based vehicle rental platform for booking, real-time tracking, and fleet management built with a clean interface and robust backend.',
    tags: ['Full-Stack', 'Web App', 'JavaScript', 'Node.js'],
    tilt: -0.8,
  },
  {
    num: '04',
    title: 'Smart Obstacle Detection',
    subtitle: 'Embedded Systems',
    description: 'An IoT-based object obstacle detection system using ultrasonic sensors to detect and prevent collisions in real time.',
    tags: ['Arduino', 'IoT', 'Python', 'Sensors'],
    tilt: 1.5,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" style={{ padding: '8rem 0' }}>
      <div className="container" ref={ref}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 1 }}
           style={{ marginBottom: '6rem', position: 'relative', display: 'flex', alignItems: 'center', gap: '2rem' }}
        >
          <div>
            <span className="label-sketch" style={{ marginBottom: '0.75rem', display: 'block' }}>02 — Work</span>
            <h2 className="display-title" style={{ fontSize: '4.5rem' }}>
              Selected <span style={{ color: 'var(--accent-orange)' }}>Projects.</span>
            </h2>
          </div>
          
          <div style={{ transform: 'rotate(-5deg)', marginTop: '2rem' }}>
            <span className="handwritten" style={{ fontSize: '1.2rem', opacity: 0.6 }}>
               (building for <br /> social impact)
            </span>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '4rem' }}>
          {projects.map((project, i) => (
            <div key={project.num} style={{ position: 'relative' }}>
              <SketchCard tilt={project.tilt} delay={i * 0.1}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-hand)', 
                    fontSize: '2rem', 
                    color: 'var(--accent-orange)',
                    opacity: 0.3
                  }}>
                    {project.num}
                  </span>
                  
                  <div style={{ transform: 'rotate(135deg)' }}>
                     <Arrow delay={2 + i * 0.1} />
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                  {project.title}
                </h3>
                
                <h4 className="label-sketch" style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '0.6rem' }}>
                   {project.subtitle}
                </h4>

                <p style={{ color: 'var(--text-dark)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '0.95rem', opacity: 0.85 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      style={{ 
                        fontFamily: 'var(--font-body)', 
                        fontSize: '0.7rem', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        padding: '0.3rem 0.8rem',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '20px',
                        color: 'var(--text-dark)',
                        opacity: 0.6
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SketchCard>
            </div>
          ))}
        </div>
        
        {/* Floating background markers */}
        <motion.div
           className="parallax-element"
           style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.05, fontSize: '10rem', color: 'var(--accent-orange)', transform: 'rotate(10deg)', zIndex: -1 }}
           animate={{ rotate: [10, 15, 10] }}
           transition={{ duration: 10, repeat: Infinity }}
        >
           ✦
        </motion.div>
      </div>
    </section>
  );
}
