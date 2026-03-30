import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    name: 'Languages',
    tags: ['Python', 'Java', 'C', 'JavaScript', 'SQL (Postgres)', 'HTML', 'CSS'],
  },
  {
    name: 'Frameworks',
    tags: ['React', 'Node.js', 'Flask', 'REST API'],
  },
  {
    name: 'App Development',
    tags: ['Android SDK', 'Flutter', 'UI Design', 'API Integration'],
  },
  {
    name: 'Web',
    tags: ['Responsive Design', 'Frontend Development', 'Backend Basics'],
  },
  {
    name: 'Tools',
    tags: ['GitHub', 'VS Code', 'Docker', 'Android Studio', 'PyCharm', 'IntelliJ', 'Eclipse'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  }),
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="skills-header">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="label" style={{ marginBottom: '0.75rem' }}>02 — Skills</div>
            <h2 className="display-md">My Toolkit</h2>
          </motion.div>

          <motion.p
            style={{ maxWidth: '280px', textAlign: 'right', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Technologies and tools I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="divider" />

        {skillGroups.map((group, i) => (
          <motion.div
            key={group.name}
            className="skill-group"
            variants={fadeUp}
            custom={i + 2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="skill-group-name">{group.name}</div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
