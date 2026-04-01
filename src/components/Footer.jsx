import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  { label: 'Connect with me on LinkedIn', href: 'https://www.linkedin.com/in/shivani-danwe-490147226/',  Icon: FaLinkedin },
  { label: 'Visit my GitHub profile',     href: 'https://github.com/shivanidanwe',       Icon: SiGithub },
  { label: 'Send me an email',            href: 'mailto:shivanidanwe@gmail.com',         Icon: HiOutlineMail },
];

export default function Footer() {
  return (
    <footer style={{
      margin: '0 1rem 1rem',
      padding: '0 1.5rem',
      background: 'rgba(227,218,204,0.4)',
      borderRadius: '2rem',
    }}>
      <div className="container" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        {/* Top row */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '2.5rem',
          borderBottom: '1px solid rgba(45,45,45,0.1)', paddingBottom: '2.5rem',
        }} className="footer-top">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '360px' }}>
            <a href="#home" style={{ fontWeight: 700, fontSize: '1.25rem' }}>shivani_</a>
            <p style={{ color: 'rgba(45,45,45,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              India-based CS student and software developer building impactful, inclusive solutions for the web.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '1.5rem', color: 'rgba(45,45,45,0.7)' }}>
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

        {/* Bottom row */}
        <div style={{
          display: 'flex', flexDirection: 'column-reverse', alignItems: 'center',
          justifyContent: 'space-between', gap: '1.5rem', marginTop: '1.5rem',
        }} className="footer-bottom">
          <p style={{ fontSize: '0.875rem', color: 'rgba(45,45,45,0.5)', fontWeight: 500 }}>
            © 2024 – {new Date().getFullYear()} Shivani Danwe. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'rgba(45,45,45,0.5)' }}>
            {[['Home','#home'],['Projects','#projects'],['Contact','#contact']].map(([l,h]) => (
              <a key={l} href={h}
                style={{ transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(45,45,45,0.5)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-top { flex-direction: row !important; justify-content: space-between; align-items: flex-start; }
          .footer-bottom { flex-direction: row !important; }
        }
      `}</style>
    </footer>
  );
}
