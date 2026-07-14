import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { scaleIn } from '../../animations/scale.js';
import { slideRight } from '../../animations/slideRight.js';
import { stagger, staggerItem } from '../../animations/stagger.js';
import ProjectCard from '../../components/cards/ProjectCard.jsx';
import TimelineItem from '../../components/cards/TimelineItem.jsx';
import SkillCard from '../../components/cards/SkillCard.jsx';
import FaIcon from '../../components/common/FaIcon.jsx';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import StatCard from '../../components/common/StatCard.jsx';
import PageTransition from '../../components/layout/PageTransition.jsx';
import InteractiveCanvas from '../../components/ui/InteractiveCanvas.jsx';
import LoadingScreen from '../../components/ui/LoadingScreen.jsx';
import { profile, skills, socialLinks, stats, experience } from '../../data/profile.js';
import { useProjects } from '../../hooks/useProjects.js';

function TypingLine() {
  return (
    <span className="typing-line">
      React.js / AI Engineering / Node.js / REST APIs
      <span className="typing-cursor">|</span>
    </span>
  );
}

export default function Home() {
  const { projects, status } = useProjects();
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <PageTransition className="">
      <section className="hero">
        <InteractiveCanvas />
        <div className="container hero-content">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={staggerItem}>
              Hi, I am <span className="gradient-text">Enas Ashoush</span>
            </motion.h1>
            <motion.div variants={staggerItem}>
              <TypingLine />
            </motion.div>
            <motion.p className="section-lead" variants={staggerItem}>
              {profile.intro}
            </motion.p>
            <motion.div className="btn-row" variants={staggerItem}>
              <Link className="btn btn-primary" to="/projects">
                View Projects <FaIcon icon={faArrowRight} size={18} />
              </Link>
              <Link className="btn btn-secondary" to="/contact">
                Contact Me <FaIcon icon={faEnvelope} size={18} />
              </Link>
            </motion.div>
            <motion.div className="social-row" variants={staggerItem}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a className="icon-link" href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
            <motion.span className="availability" variants={staggerItem}>
              <span className="status-dot" />
              {profile.availability}
            </motion.span>
          </motion.div>

          <motion.aside className="hero-card surface" initial="hidden" animate="visible" variants={slideRight}>
            <div className="profile-orbit">
              <div className="profile-avatar">
                <img src="/Images/LinkdIn Profile Pic.png" alt="Enas Ashoush" className="profile-image" />
              </div>
            </div>
            <div className="metrics-grid">
              {stats.slice(0, 3).map((stat) => (
                <div className="metric" key={stat.label}>
                  <strong>
                    {stat.value}
                    {stat.suffix}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Featured Work" title="Selected projects">
            A focused preview of full-stack, dashboard, backend, and polished frontend work.
          </SectionHeader>
          {status === 'loading' ? (
            <LoadingScreen />
          ) : (
            <motion.div className="preview-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <SectionHeader eyebrow="Profile" title="Performance & clarity">
            A BIS background, full-stack project practice, and a strong focus on modern Software experiences.
          </SectionHeader>
          <motion.div className="stats-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={scaleIn}>
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Skills Preview" title="Current toolkit">
            Core technologies organized around the way production applications are actually built.
          </SectionHeader>
        </div>
        <div className="skills-page-container" style={{ paddingBottom: 0 }}>
          <div className="skills-marquee-section" style={{ marginTop: 0 }} aria-label="Skills preview scrolling showcase">
            <div className="skills-marquee-row" tabIndex={0}>
              <div className="skills-marquee-track scroll-left">
                {[...skills, ...skills, ...skills].map((skill, index) => (
                  <SkillCard key={`home-${skill.name}-${index}`} name={skill.name} icon={skill.icon} color={skill.color} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Timeline Preview" title="Experience highlights">
            A concise look at the moments shaping the developer portfolio.
          </SectionHeader>
          <motion.ul className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {experience.slice(0, 2).map((item) => (
              <TimelineItem item={item} key={item.title} />
            ))}
          </motion.ul>
        </div>
      </section>
    </PageTransition>
  );
}
