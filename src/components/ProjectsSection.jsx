import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'TRAVION',
    type: 'Safety Platform',
    desc: 'A national-scale travel safety platform leveraging Aadhaar/Passport verification, real-time GPS tracking, AI-based risk detection, e-FIR filing, and blockchain integrity.',
    tags: ['AI/ML', 'Blockchain', 'IoT', 'Python', 'React'],
    link: null,
  },
  {
    title: 'Inclusive Voting System',
    type: 'Accessible Technology',
    desc: 'An accessible voting system using fingerprint authentication and a sign-language glove — enabling secure and independent voting for physically challenged citizens.',
    tags: ['Biometrics', 'IoT', 'Accessibility', 'Python'],
    link: null,
  },
  {
    title: 'Drivio',
    type: 'Vehicle Rental Service',
    desc: 'A full-stack web-based vehicle rental platform for booking, real-time tracking, and fleet management built with a clean interface and robust backend.',
    tags: ['Full-Stack', 'JavaScript', 'Node.js'],
    link: null,
  },
  {
    title: 'Smart Obstacle Detection',
    type: 'Embedded Systems',
    desc: 'An IoT-based obstacle detection system using ultrasonic sensors to detect and prevent collisions in real time.',
    tags: ['Arduino', 'IoT', 'Python', 'Sensors'],
    link: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ width: '100%', paddingTop: 'clamp(4rem,6vw,8rem)', paddingBottom: 'clamp(4rem,6vw,8rem)' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }} className="proj-layout">
          {/* Left: heading */}
          <div style={{ flexShrink: 0, maxWidth: '320px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Selected Projects
            </h2>
            <p style={{ lineHeight: 1.6, color: 'var(--fg)', fontSize: '1rem' }}>
              Things I've built — focused on social impact and real-world problems.
            </p>
          </div>

          {/* Right: project list */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {projects.map((p) => (
              <div key={p.title} style={{
                padding: '1.5rem',
                borderRadius: '0.75rem',
                background: 'var(--bg-darken)',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>{p.title}</h3>
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 700,
                        color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em',
                        background: 'rgba(218,77,8,0.1)', padding: '0.15rem 0.5rem', borderRadius: '0.25rem',
                      }}>
                        {p.type}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(45,45,45,0.75)', marginBottom: '1rem' }}>
                      {p.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {p.tags.map(t => (
                        <span key={t} style={{
                          fontSize: '0.72rem', fontWeight: 600,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '0.25rem',
                          background: 'rgba(45,45,45,0.08)',
                          color: 'rgba(45,45,45,0.7)',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      style={{ color: 'rgba(45,45,45,0.4)', flexShrink: 0, transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(45,45,45,0.4)'}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .proj-layout { flex-direction: row !important; align-items: flex-start !important; gap: 5rem !important; }
        }
      `}</style>
    </section>
  );
}
