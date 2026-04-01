import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const workExperience = [
  {
    title: 'Team Leader & System Architect',
    organization: 'TRAVION',
    period: '2023 – Present',
    location: 'India',
    employmentType: 'Project Lead',
    isActive: true,
  },
  {
    title: 'Full-Stack Developer',
    organization: 'Academic & Independent Projects',
    period: '2023 – Present',
    location: 'India',
    employmentType: 'Freelance',
    isActive: false,
  },
];

const education = [
  {
    title: 'B.Tech in Computer Science',
    organization: "SVERI's College of Engineering",
    period: '2023 – Present',
    location: 'Maharashtra, India',
    isActive: true,
  },
  {
    title: 'Higher Secondary (12th)',
    organization: 'Stepping Stones High School',
    period: '2021',
    location: 'Aurangabad, Maharashtra',
    isActive: false,
  },
];

function TimelineItem({ title, organization, period, location, employmentType, isActive, isLast }) {
  return (
    <div style={{ position: 'relative', display: 'flex', gap: '1.25rem' }}>
      {/* Dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.375rem' }}>
          {isActive && (
            <span className="ping" style={{
              position: 'absolute',
              width: '1rem', height: '1rem',
              borderRadius: '50%',
              background: 'var(--primary)',
              opacity: 0.6,
            }} />
          )}
          <div style={{
            width: '1rem', height: '1rem',
            borderRadius: '50%',
            background: 'var(--primary)',
            boxShadow: '0 0 0 5px rgba(218,77,8,0.2)',
            position: 'relative', zIndex: 1,
          }} />
        </div>
        {!isLast && (
          <div style={{ width: '1px', flex: 1, background: 'var(--bg-darken)', marginTop: '0.25rem' }} />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : '2rem', minWidth: 0, textAlign: 'left' }}>
        <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '0.125rem' }}>
          {period}
        </p>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.3 }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.375rem', color: 'rgba(45,45,45,0.7)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          <span style={{ fontWeight: 500 }}>{organization}</span>
          {location && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
              fontSize: '0.75rem', background: 'var(--bg-darken)',
              padding: '0.125rem 0.5rem', borderRadius: '9999px', fontWeight: 500,
            }}>
              <MapPin size={12} />{location}
            </span>
          )}
          {employmentType && (
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: '0.75rem', background: 'var(--bg-darken)',
              padding: '0.125rem 0.5rem', borderRadius: '9999px', fontWeight: 500,
            }}>
              {employmentType}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ width: '100%', paddingTop: 'clamp(4rem,6vw,8rem)', paddingBottom: 'clamp(4rem,6vw,8rem)' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }} className="exp-layout">
          {/* Left: heading */}
          <div style={{ flexShrink: 0, maxWidth: '320px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Experience &amp; Education
            </h2>
            <p style={{ lineHeight: 1.6, color: 'var(--fg)', fontSize: '1rem' }}>
              My professional journey so far — where I've worked and what I've studied.
            </p>
          </div>

          {/* Right: timeline columns */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2.5rem' }} className="timeline-cols">
            {/* Work Experience */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.75rem' }}>
                <span style={{ color: 'var(--primary)' }}><Briefcase size={22} /></span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Work Experience</h3>
              </div>
              <div>
                {workExperience.map((item, i) => (
                  <TimelineItem key={i} {...item} isLast={i === workExperience.length - 1} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.75rem' }}>
                <span style={{ color: 'var(--primary)' }}><GraduationCap size={22} /></span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Education</h3>
              </div>
              <div>
                {education.map((item, i) => (
                  <TimelineItem key={i} {...item} isLast={i === education.length - 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .exp-layout { flex-direction: row !important; align-items: flex-start !important; gap: 5rem !important; }
          .timeline-cols { flex-direction: row !important; }
        }
      `}</style>
    </section>
  );
}
