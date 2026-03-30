const items = [
  'Python', 'React', 'Full-Stack Dev', 'AIML',
  'Java', 'Node.js', 'Flutter', 'IoT',
  'Blockchain', 'SQL', 'Docker', 'Open Source',
  'Python', 'React', 'Full-Stack Dev', 'AIML',
  'Java', 'Node.js', 'Flutter', 'IoT',
  'Blockchain', 'SQL', 'Docker', 'Open Source',
];

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
