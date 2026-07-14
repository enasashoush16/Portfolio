import { motion } from 'framer-motion';
import { slideLeft } from '../../animations/slideLeft.js';

export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={slideLeft}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title gradient-text">{title}</h2>
      {children ? <p className="section-lead">{children}</p> : null}
    </motion.div>
  );
}
