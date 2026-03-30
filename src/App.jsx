import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import GrainOverlay from './components/GrainOverlay';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer style={{ 
      padding: '4rem clamp(1.5rem, 6vw, 6rem)', 
      textAlign: 'center', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      backgroundColor: 'var(--bg-dark)'
    }}>
      <div style={{ 
        fontFamily: 'var(--font-hand)', 
        fontSize: '1.4rem', 
        color: 'var(--accent-orange)', 
        opacity: 0.8,
        display: 'inline-block',
        position: 'relative'
      }}>
         Shivani Danwe
      </div>
      <div className="label-sketch" style={{ fontSize: '0.6rem', marginTop: '1rem', opacity: 0.4 }}>
        © {new Date().getFullYear()} — Building with Pride & Craft. (Design Inspired by Jackie Zhang Portfolio)
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <GrainOverlay />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
