import { motion } from 'framer-motion';
import { stagger } from '../../animations/stagger.js';
import EducationCard from '../../components/cards/EducationCard.jsx';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import PageTransition from '../../components/layout/PageTransition.jsx';
import { educationTimeline } from '../../data/profile.js';

export default function Education() {
  return (
    <PageTransition>
      <div className="container">
        <SectionHeader
          eyebrow="Education"
          title="Professional Learning"
        >
          My academic foundation and continuous learning journey through specialized training and industry-focused programs.
        </SectionHeader>

        <motion.div
          className="education-grid"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {educationTimeline.map((item) => (
            <EducationCard
              key={item.title}
              icon={item.icon}
              type={item.type}
              title={item.title}
              institution={item.institution}
              period={item.period}
              highlights={item.highlights}
              image={item.image}
            />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
