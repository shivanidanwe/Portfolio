import {
  SiPython, SiJavascript, SiC, SiCplusplus,
  SiReact, SiNodedotjs, SiFlask, SiFlutter, SiDocker,
  SiGit, SiArduino, SiAndroid, SiMysql, SiHtml5,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const stack = [
  { label: 'Python',      Icon: SiPython },
  { label: 'JavaScript',  Icon: SiJavascript },
  { label: 'Java',        Icon: FaJava },
  { label: 'C',           Icon: SiC },
  { label: 'C++',         Icon: SiCplusplus },
  { label: 'HTML / CSS',  Icon: SiHtml5 },
  { label: 'SQL',         Icon: SiMysql },
  { label: 'React',       Icon: SiReact },
  { label: 'Node.js',     Icon: SiNodedotjs },
  { label: 'Flask',       Icon: SiFlask },
  { label: 'Flutter',     Icon: SiFlutter },
  { label: 'Docker',      Icon: SiDocker },
  { label: 'Git',         Icon: SiGit },
  { label: 'Arduino',     Icon: SiArduino },
  { label: 'Android SDK', Icon: SiAndroid },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ width: '100%', paddingTop: 'clamp(4rem,6vw,8rem)', paddingBottom: 'clamp(4rem,6vw,8rem)' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              About
            </h2>
            <p style={{ maxWidth: '580px', lineHeight: 1.6, color: 'var(--fg)', fontSize: '1rem' }}>
              I'm a Computer Science Engineering student with a deep passion for building
              real-world solutions. I thrive at the intersection of Data Science, Full-Stack
              Web Development, and emerging AI/ML technologies.
            </p>
            <p style={{ maxWidth: '580px', lineHeight: 1.6, color: 'var(--fg)', fontSize: '1rem', marginTop: '1rem' }}>
              From national-scale safety platforms to accessible civic tools, I believe
              software should be purposeful, inclusive, and impactful. Every project I take
              on starts with a problem worth solving.
            </p>

            {/* Tech stack */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Tech stack</h3>
              <p style={{ marginTop: '0.25rem', marginBottom: '1.25rem', color: 'var(--fg)', fontSize: '1rem' }}>
                Some technologies I use on a daily basis.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {stack.map(({ label, Icon }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '0.375rem',
                    background: 'var(--bg-darken)',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    transition: 'opacity 0.15s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <Icon style={{ width: 16, height: 16, flexShrink: 0 }} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
