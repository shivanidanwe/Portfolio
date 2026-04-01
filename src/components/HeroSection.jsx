import { ArrowDownRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import meImg from '../assets/Shivani.png';

// Install react-icons if not present — using lucide fallback icons otherwise
const socials = [
  { label: 'Connect with me on LinkedIn', href: 'https://www.linkedin.com/in/shivani-danwe-490147226/',   Icon: FaLinkedin },
  { label: 'Visit my GitHub profile',     href: 'https://github.com/shivanidanwe',        Icon: SiGithub },
  { label: 'Send me an email',            href: 'mailto:shivanidanwe@gmail.com',          Icon: HiOutlineMail },
];

export default function HeroSection() {
  return (
    <section id="home" style={{ width: '100%' }}>
      <div className="container">
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2.5rem',
        }}>
          <div style={{ maxWidth: '600px', paddingTop: 'clamp(4rem,8vw,10rem)', paddingBottom: 'clamp(4rem,8vw,10rem)', width: '100%' }}>
            {/* Big heading */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}>
              <span style={{ display: 'block', marginBottom: '0.2em' }}>Software developer.</span>
              <span style={{ display: 'block', color: 'var(--primary)' }}>
                contributor.
                <span className="terminal-cursor" aria-hidden="true" />
              </span>
            </h1>

            <p style={{
              marginTop: '1.25rem',
              maxWidth: '480px',
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: `rgba(45,45,45,0.9)`,
              marginBottom: '2rem',
            }}>
              I'm Shivani, a Computer Science student at SVERI's College of Engineering.
              I focus on building impactful, inclusive digital solutions.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a href="#experience"
                onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0 1.75rem', height: '52px',
                  background: 'var(--fg)', color: '#fff',
                  borderRadius: '0.5rem', fontWeight: 500, fontSize: '0.875rem',
                  transition: 'opacity 0.15s', cursor: 'pointer',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                My experience <ArrowDownRight size={20} />
              </a>

              <a href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0 1.75rem', height: '52px',
                  background: 'var(--bg-darken)', color: 'var(--fg)',
                  borderRadius: '0.5rem', fontWeight: 500, fontSize: '0.875rem',
                  transition: 'opacity 0.15s', cursor: 'pointer',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Contact
              </a>
            </div>

            {/* Socials */}
            <div style={{ marginTop: '3.75rem', display: 'flex', gap: '1.25rem', fontSize: '1.5rem', color: `rgba(45,45,45,0.7)` }}>
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{ transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(45,45,45,0.7)'}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Profile photo — visible on lg screens */}
          <div className="hero-photo" style={{ marginLeft: 'auto', marginRight: '-8rem' }}>
            <img
              src={meImg}
              alt="Shivani Danwe"
              style={{
                width: 'clamp(320px, 32vw, 500px)',
                maxWidth: '500px',
                objectFit: 'contain',
                userSelect: 'none',
                pointerEvents: 'none',
                marginBottom: '10rem',
                marginTop: '-4rem',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-photo { display: none; }
        @media (min-width: 1024px) {
          .hero-photo { display: block; flex-shrink: 0; }
        }
      `}</style>
    </section>
  );
}
