import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { staggerItem } from '../../animations/stagger.js';
import FaIcon from '../common/FaIcon.jsx';

export default function ProjectCard({ project }) {
  const initials = project.title
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('');

  return (
    <motion.article className="project-card" layout variants={staggerItem}>
      <div className="project-visual" aria-label={`${project.title} preview`}>
        {project.image ? <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" /> : <span className="project-monogram">{initials}</span>}
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.track}</span>
          {project.featured ? <span>Featured</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="chip-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="btn-row">
          {project.github ? (
            <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">
              <FaIcon icon={faCode} size={18} />
              GitHub
            </a>
          ) : null}
          {project.liveDemo ? (
            <a className="btn btn-primary" href={project.liveDemo} target="_blank" rel="noreferrer">
              <FaIcon icon={faArrowUpRightFromSquare} size={18} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
