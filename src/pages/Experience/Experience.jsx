import { motion } from 'framer-motion';
import { stagger } from '../../animations/stagger.js';
import TimelineItem from '../../components/cards/TimelineItem.jsx';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import PageTransition from '../../components/layout/PageTransition.jsx';
import { experience } from '../../data/profile.js';

export default function Experience() {
  return (
    <PageTransition>
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Experience"
        >
          A timeline highlighting my professional journey across ERP development, customer operations, sales, and leadership, showcasing the technical and communication skills I've developed through diverse industry experience.
        </SectionHeader>
        <motion.ul className="timeline" initial="hidden" animate="visible" variants={stagger}>
          {experience.map((item) => (
            <TimelineItem item={item} key={item.title} />
          ))}
        </motion.ul>
      </div>
    </PageTransition>
  );
}
