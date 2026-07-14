import { motion } from 'framer-motion';
import { stagger } from '../../animations/stagger.js';
import ProjectCard from '../../components/cards/ProjectCard.jsx';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import PageTransition from '../../components/layout/PageTransition.jsx';
import LoadingScreen from '../../components/ui/LoadingScreen.jsx';
import { useProjects } from '../../hooks/useProjects.js';

export default function Projects() {
  const { projects, status, error } = useProjects();

  return (
    <PageTransition>
      <div className="container">
        <SectionHeader eyebrow="Projects" title="Dynamic project">
          Browse the full collection of projects.
        </SectionHeader>

        {status === 'loading' ? <LoadingScreen /> : null}
        {status === 'error' ? <div className="empty-state">{error}</div> : null}
        {status === 'success' && projects.length === 0 ? <div className="empty-state">No projects available.</div> : null}
        {status === 'success' && projects.length > 0 ? (
          <motion.div className="project-pages" layout initial="hidden" animate="visible" variants={stagger}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : null}
      </div>
    </PageTransition>
  );
}
