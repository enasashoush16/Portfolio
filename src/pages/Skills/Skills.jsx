import SkillCard from '../../components/cards/SkillCard.jsx';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import PageTransition from '../../components/layout/PageTransition.jsx';
import { skills } from '../../data/profile.js';

export default function Skills() {
  // Split the 20 skills into 3 rows
  const row1 = skills.slice(0, 7);
  const row2 = skills.slice(7, 14);
  const row3 = skills.slice(14);

  // Duplicating the lists 3 times to make the scroll seamless and run smoothly on wider screens.
  const createMarqueeList = (list) => {
    return [...list, ...list, ...list];
  };

  return (
    <PageTransition>
      <div className="skills-page-container">
        <div className="container">
          <SectionHeader
            eyebrow="My Toolbox"
            title="My Toolbox"
          >
            A carefully curated stack of technologies I use to build scalable, high-performance web applications.
          </SectionHeader>
        </div>

        {/* Full-width container for scrolling tracks */}
        <div className="skills-marquee-section" aria-label="Interactive skills scrolling showcase">
          
          {/* Row 1: Left to right (scrolling right-to-left) */}
          <div className="skills-marquee-row" tabIndex={0} aria-label="Frontend tools row">
            <div className="skills-marquee-track scroll-left">
              {createMarqueeList(row1).map((skill, index) => (
                <SkillCard
                  key={`r1-${skill.name}-${index}`}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Row 2: Right to left (scrolling left-to-right) */}
          <div className="skills-marquee-row" tabIndex={0} aria-label="Backend and Database tools row">
            <div className="skills-marquee-track scroll-right">
              {createMarqueeList(row2).map((skill, index) => (
                <SkillCard
                  key={`r2-${skill.name}-${index}`}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Row 3: Left to right (scrolling right-to-left) */}
          <div className="skills-marquee-row" tabIndex={0} aria-label="Tools and Business systems row">
            <div className="skills-marquee-track scroll-left">
              {createMarqueeList(row3).map((skill, index) => (
                <SkillCard
                  key={`r3-${skill.name}-${index}`}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
