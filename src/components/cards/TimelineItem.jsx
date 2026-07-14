import { motion } from 'framer-motion';
import { staggerItem } from '../../animations/stagger.js';

export default function TimelineItem({ item }) {
  const Icon = item.icon;

  return (
    <motion.li className="timeline-item" variants={staggerItem}>
      <div className="timeline-meta">
        {item.period} / {item.type}
      </div>
      <h3>
        <Icon size={20} aria-hidden="true" /> {item.title}
      </h3>
      <p>{item.place}</p>
      <ul>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.li>
  );
}
