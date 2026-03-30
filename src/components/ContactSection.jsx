import { motion } from 'framer-motion';
import SketchCard from './SketchCard';
import { Underline, Arrow } from './HandDrawnScribbles';

export default function ContactSection() {
  return (
    <section id="contact" style={{ 
      paddingTop: '8rem', 
      paddingBottom: '16rem', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      <div className="container">
        <SketchCard tilt={0} className="contact-sketch-card">
           <div className="label-sketch" style={{ marginBottom: '1.5rem', display: 'block', textAlign: 'center' }}>
              04 — Contact
           </div>
           
           <h2 className="display-title" style={{ fontSize: '5rem', marginBottom: '3rem', textAlign: 'center' }}>
              Let's <span style={{ color: 'var(--accent-orange)' }}>
                Connect.
                <Underline delay={1.2} />
              </span>
           </h2>
           
           <p style={{ 
              maxWidth: '500px', 
              margin: '0 auto 4rem', 
              textAlign: 'center', 
              fontSize: '1.1rem', 
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: 'var(--text-dark)', 
              opacity: 0.8 
           }}>
              Always open to new ideas, collaborations, and opportunities. Whether you have a project in mind or just want to connect — reach out.
           </p>
           
           <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <motion.a 
                href="mailto:shivanidanwe@gmail.com"
                className="sketch-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: 'var(--accent-orange)', color: '#fff', border: 'none', padding: '1rem 3rem' }}
              >
                 Say Hello
              </motion.a>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <a href="https://linkedin.com" target="_blank" className="handwritten" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
                     LinkedIn <Arrow delay={1.8} />
                 </a>
                 <a href="https://github.com" target="_blank" className="handwritten" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
                     GitHub <Arrow delay={2} />
                 </a>
              </div>
           </div>
           
           <div style={{ marginTop: '5rem', textAlign: 'center' }}>
              <span className="label-sketch" style={{ opacity: 0.5, fontSize: '0.65rem' }}>
                 Based in Chhatrapati Sambhaji Nagar, India
              </span>
           </div>
        </SketchCard>
      </div>
    </section>
  );
}
