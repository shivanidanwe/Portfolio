import { motion } from 'framer-motion';
import SketchCard from './SketchCard';
import { Circle, Arrow } from './HandDrawnScribbles';

const stats = [
  { label: 'Live Projects', count: '3+' },
  { label: 'Technologies', count: '5+' },
  { label: 'National Platforms', count: '1' },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative' }}>
            <SketchCard tilt={1.5}>
              <span className="label-sketch" style={{ marginBottom: '1.5rem', display: 'block' }}>
                01 — About me
              </span>
              <h2 className="display-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
                Building with <span style={{ color: 'var(--accent-orange)' }}>purpose.</span>
              </h2>
              <p style={{ color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem', opacity: 0.9 }}>
                I'm a <span>Computer Science Engineering</span> student with a deep passion for building real-world solutions. I thrive at the intersection of Data Science, Full-Stack Web Development, and emerging AI/ML technologies.
              </p>
              <p style={{ color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem', opacity: 0.9 }}>
                From national-scale safety platforms to accessible civic tools, I believe software should be purposeful, inclusive, and impactful. Every project I take on starts with a problem worth solving.
              </p>
              
              <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem' }}>
                {stats.map((stat, i) => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-hand)', 
                      fontSize: '2.5rem', 
                      color: 'var(--accent-orange)',
                      display: 'block' 
                    }}>
                      {stat.count}
                    </span>
                    <span className="label-sketch" style={{ fontSize: '0.65rem' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </SketchCard>
            
            {/* Hand-drawn underline for specific text */}
            <motion.div
              style={{ position: 'absolute', top: '10px', right: '-40px', transform: 'rotate(15deg)' }}
            >
              <Arrow delay={1.8} />
              <span className="handwritten" style={{ fontSize: '1.2rem', marginLeft: '10px' }}>
                Engineering <br /> Student.
              </span>
            </motion.div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              style={{ paddingLeft: '4rem', borderLeft: '1px solid var(--accent-orange)' }}
             >
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <span className="label-sketch" style={{ color: 'var(--text-light)', opacity: 0.6 }}>Education</span>
                  <Circle delay={1.5} />
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', marginBottom: '0.5rem' }}>
                    SVERI's College of Engineering
                  </h4>
                  <p className="handwritten" style={{ fontSize: '1.1rem', opacity: 0.8, color: 'var(--text-light)' }}>
                    B.Tech in Computer Science (2023 - Present)
                  </p>
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', marginBottom: '0.5rem' }}>
                    Stepping Stones High School
                  </h4>
                  <p className="handwritten" style={{ fontSize: '1.1rem', opacity: 0.8, color: 'var(--text-light)' }}>
                    Aurangabad, Maharashtra (2021)
                  </p>
                </div>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
