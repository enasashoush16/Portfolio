import { motion } from 'framer-motion';
import { staggerItem } from '../../animations/stagger.js';

export default function EducationCard({ icon: Icon, type, title, institution, period, highlights, image }) {
  return (
    <motion.article
      className="education-card"
      variants={staggerItem}
      whileHover="hover"
      whileFocus="hover"
      tabIndex={0}
      aria-label={`${title} from ${institution}`}
    >
      {/* Top gradient accent glow bar */}
      <div className="education-accent-glow" />

      {/* Card Image */}
      {image ? (
        <div className="education-image-container">
          <img src={image} alt={`${institution} location or logo`} loading="lazy" className="education-image" />
        </div>
      ) : null}

      <div className="education-card-content">
        <div className="education-header">
          <motion.div
            className="education-icon-container"
            variants={{
              hover: { rotate: 10, scale: 1.12, transition: { duration: 0.3, ease: 'easeOut' } },
            }}
          >
            {Icon ? <Icon size={24} aria-hidden="true" /> : null}
          </motion.div>
          <span className="education-badge" aria-label={`Type: ${type}`}>{type}</span>
        </div>

        <h3 className="education-card-title">{title}</h3>
        
        <div className="education-meta-info">
          <span className="education-institution-name">{institution}</span>
          <span className="education-separator" aria-hidden="true">•</span>
          <span className="education-period-time">{period}</span>
        </div>

        <ul className="education-highlights-list">
          {highlights.map((highlight, index) => (
            <li key={index} className="education-highlight-item">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
