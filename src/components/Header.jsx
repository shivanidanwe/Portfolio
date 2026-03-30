import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      className="nav-sketch"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
    >
      <div 
        className="nav-logo" 
        style={{ fontFamily: 'var(--font-hand)', fontSize: '1.8rem', color: 'var(--accent-orange)' }}
      >
        Shivani.
      </div>
      
      <ul className="nav-links-sketch">
        {links.map((link, i) => (
          <motion.li key={link.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.8 }}
          >
            <a 
              href={link.href} 
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.header>
  );
}
