import { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  { label: 'Connect with me on LinkedIn', href: 'https://www.linkedin.com/in/shivani-danwe-490147226/',  Icon: FaLinkedin },
  { label: 'Visit my GitHub profile',     href: 'https://github.com/shivanidanwe',       Icon: SiGithub },
  { label: 'Send me an email',            href: 'mailto:shivanidanwe@gmail.com',         Icon: HiOutlineMail },
];

function Field({ id, label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <label htmlFor={id} style={{ fontSize: '0.875rem', fontWeight: 700, color: 'rgba(45,45,45,0.8)', userSelect: 'none' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  height: '52px',
  padding: '0 1rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontFamily: 'inherit',
  background: 'var(--bg-darken)',
  color: 'var(--fg)',
  border: '2px solid transparent',
  outline: 'none',
  transition: 'border-color 0.15s',
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:shivanidanwe@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
  };

  const focusStyle = (e) => e.target.style.borderColor = 'var(--primary)';
  const blurStyle  = (e) => e.target.style.borderColor = 'transparent';

  return (
    <section id="contact" style={{ width: '100%', paddingTop: 'clamp(4rem,6vw,8rem)', paddingBottom: 'clamp(4rem,6vw,8rem)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem,6vw,8rem)' }}>

          {/* Top: heading + form side by side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }} className="contact-layout">
            {/* Left */}
            <div style={{ flexShrink: 0, maxWidth: '280px' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Contact
              </h2>
              <p style={{ lineHeight: 1.6, color: 'var(--fg)', fontSize: '1rem' }}>
                Feel free to contact me any time, my inbox is always open.
              </p>
              {/* Socials */}
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1.25rem', fontSize: '1.5rem', color: 'rgba(45,45,45,0.7)' }}>
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

            {/* Right: form */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* 3-col grid on md: inputs | textarea */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="form-grid">
                  {/* Inputs column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Field id="cf-name" label="Name">
                      <input id="cf-name" name="name" type="text" required
                        placeholder="Your name" value={form.name} onChange={handleChange}
                        style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                    </Field>
                    <Field id="cf-email" label="Email">
                      <input id="cf-email" name="email" type="email" required
                        placeholder="your@email.com" value={form.email} onChange={handleChange}
                        style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                    </Field>
                    <Field id="cf-subject" label="Subject">
                      <input id="cf-subject" name="subject" type="text"
                        placeholder="What's this about?" value={form.subject} onChange={handleChange}
                        style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                    </Field>
                  </div>

                  {/* Textarea column */}
                  <Field id="cf-message" label="Message">
                    <textarea id="cf-message" name="message" required
                      placeholder="Your message..." rows={7}
                      value={form.message} onChange={handleChange}
                      style={{ ...inputStyle, height: '100%', minHeight: '180px', padding: '0.75rem 1rem', resize: 'none' }}
                      onFocus={focusStyle} onBlur={blurStyle}
                    />
                  </Field>
                </div>

                {/* Submit */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                  <button type="submit" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0 1.75rem', height: '52px',
                    background: 'var(--fg)', color: '#fff',
                    borderRadius: '0.5rem', fontWeight: 500, fontSize: '0.875rem',
                    fontFamily: 'inherit', cursor: 'pointer', border: 'none',
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <SendHorizontal size={16} /> Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom: direct email */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ marginTop: '1rem', fontWeight: 600, textAlign: 'center', fontSize: 'clamp(1rem,2vw,1.25rem)' }}>
              Want to send an email directly? Write to:
            </h3>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '0.75rem' }}>
              <a href="mailto:shivanidanwe@gmail.com"
                style={{
                  fontWeight: 900, textAlign: 'center',
                  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                  wordBreak: 'break-all', display: 'inline-block',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--fg)'}
              >
                shivanidanwe@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-layout { flex-direction: row !important; align-items: flex-start !important; gap: 5rem !important; }
          .form-grid { grid-template-columns: 1fr 2fr !important; }
        }
      `}</style>
    </section>
  );
}
