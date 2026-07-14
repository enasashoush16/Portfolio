import { motion } from 'framer-motion';
import { slideLeft } from '../../animations/slideLeft.js';
import { stagger } from '../../animations/stagger.js';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import StatCard from '../../components/common/StatCard.jsx';
import PageTransition from '../../components/layout/PageTransition.jsx';
import { profile, stats } from '../../data/profile.js';

export default function About() {
  return (
    <PageTransition>
      <div className="container">
        <SectionHeader eyebrow="About Me" title="Software Developer">
          {profile.intro}
        </SectionHeader>
        <div className="about-grid">
          <motion.article className="surface contact-panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
            <span className="availability">
              <span className="status-dot" />
              {profile.availability}
            </span>
            <h3> Get to know me</h3>
            <p>
              I am a Highly-achieving Software Developer and dynamic Front-end Developer with a proven track record in building responsive with AI Engineering experience, user-friendly web applications using React.js, Next.js, and TypeScript.
            </p>
            <p>
              I build responsive, accessible, and maintainable web interfaces with React.js, JavaScript, REST APIs, and backend integrations. My BIS degree gives me a practical understanding of software in business workflows, dashboards, ERP-adjacent processes, and data-driven applications. Proficient in bridging the gap between technical UI/UX and complex business logic through hands-on experience in Zoho ERP application development and customization.
            </p>

          </motion.article>
          <motion.div className="stats-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {stats.map((stat) => (
              <StatCard {...stat} key={stat.label} />
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
