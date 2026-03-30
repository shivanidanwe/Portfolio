import { motion } from 'framer-motion';
import SketchCard from './SketchCard';
import { Underline, Circle } from './HandDrawnScribbles';

const experiences = [
  {
    year: '2023 – Present',
    role: 'Team Leader & System Architect',
    org: 'TRAVION — National Safety Platform',
    desc: 'Leading end-to-end system design and feature planning. Integrating AI, blockchain, and real-time tech into a unified platform.',
  },
  {
    year: '2023 – Present',
    role: 'Full-Stack Developer',
    org: 'Academic & Independent Projects',
    desc: 'Hands-on development spanning Python, React, and IoT systems. Built full-stack web apps and game logic.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '4rem' }}>
          
          <div style={{ position: 'relative' }}>
             <span className="label-sketch" style={{ marginBottom: '0.75rem', display: 'block' }}>03 — Journey</span>
             <h2 className="display-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
                Where i've <br /> 
                <span style={{ color: 'var(--accent-orange)' }}>
                   been.
                   <Underline delay={1} />
                </span>
             </h2>
             <p className="handwritten" style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '280px' }}>
                (always learning, building, and solving problems)
             </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, i) => (
              <SketchCard key={i} tilt={i % 2 === 0 ? -1 : 1} delay={i * 0.1}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-body)', 
                        fontSize: '0.8rem', 
                        color: 'var(--accent-orange)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {exp.year}
                    </span>
                    <div style={{ transform: 'rotate(-5deg)', opacity: 0.3 }}>
                       <Circle delay={1.5 + i * 0.1} />
                    </div>
                 </div>

                 <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                    {exp.role}
                 </h3>
                 <h4 className="label-sketch" style={{ fontSize: '0.7rem', color: 'var(--text-dark)', opacity: 0.5, marginBottom: '1.5rem' }}>
                    {exp.org}
                 </h4>

                 <p style={{ color: 'var(--text-dark)', lineHeight: 1.6, fontSize: '0.95rem', opacity: 0.85 }}>
                    {exp.desc}
                 </p>
              </SketchCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
