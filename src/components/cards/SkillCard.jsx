import { motion } from 'framer-motion';

export default function SkillCard({ name, icon: Icon, color }) {
  const cardStyle = {
    '--skill-color': color || 'var(--border-focus)',
  };

  return (
    <motion.div
      className="skill-card"
      style={cardStyle}
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      whileFocus={{
        y: -6,
        scale: 1.05,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      aria-label={`${name} technology`}
      tabIndex={0}
    >
      <div className="skill-card-content">
        <div className="skill-icon-container">
          {Icon ? <Icon className="skill-icon" size={42} aria-hidden="true" /> : null}
        </div>
        <h3 className="skill-title">{name}</h3>
      </div>
    </motion.div>
  );
}
