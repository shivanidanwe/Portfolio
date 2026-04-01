import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <header style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2.5rem',
        paddingBottom: '1.5rem',
      }}>
        {/* Logo */}
        <a href="#home" onClick={e => scrollTo(e, '#home')} style={{
          fontWeight: 700,
          fontSize: '1.25rem',
          color: 'var(--fg)',
          zIndex: 20,
          position: open ? 'fixed' : 'relative',
          left: open ? 'var(--px)' : 'auto',
          top: open ? '2.5rem' : 'auto',
        }}>
          shivani_
        </a>

        {/* Desktop nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: `rgba(45,45,45,0.8)`,
        }} className="desktop-nav">
          {navLinks.slice(1).map(link => (
            <a key={link.label} href={link.href}
              onClick={e => scrollTo(e, link.href)}
              style={{ transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(45,45,45,0.8)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
          style={{
            display: 'none',
            zIndex: 20,
            color: 'rgba(45,45,45,0.8)',
            position: open ? 'fixed' : 'relative',
            right: open ? 'var(--px)' : 'auto',
            top: open ? '2.5rem' : 'auto',
          }}
          className="mobile-toggle"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile overlay */}
        {open && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 10,
            background: 'rgba(240,238,230,0.97)',
            backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href}
                  onClick={e => scrollTo(e, link.href)}
                  style={{ fontSize: '1.25rem', fontWeight: 500, color: 'rgba(45,45,45,0.8)', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(45,45,45,0.8)'}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
