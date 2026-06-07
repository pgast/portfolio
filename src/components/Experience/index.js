import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { workHistory, skillTech } from '../../constants/about';

import {
  ExperienceWrapper,
  ExperienceMain,
  ExperienceLabel,
  JobList,
  JobEntry,
  WallOverlay,
  JobInner,
  JobCompany,
  JobMeta,
  JobRole,
  JobDuration,
  JobBullets,
  TechBand,
  TechBandInner,
  TechBandLabel,
  TechRow,
  TechItem,
} from './styled';

const wallVariants = {
  hidden: { scaleX: 1 },
  visible: {
    scaleX: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, delay: 0.62 },
  },
};

const parseTitle = (title) => {
  const idx = title.indexOf(' / ');
  if (idx === -1) return { role: title, company: '' };
  return { role: title.slice(0, idx), company: title.slice(idx + 3) };
};

const JobReveal = ({ job }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const { role, company } = parseTitle(job.header.title);

  return (
    <JobEntry ref={ref}>
      <WallOverlay
        variants={wallVariants}
        initial="hidden"
        animate={controls}
        style={{ transformOrigin: 'right center' }}
      />
      <JobInner
        variants={contentVariants}
        initial="hidden"
        animate={controls}
      >
        <JobCompany>{company}</JobCompany>
        <JobMeta>
          <JobRole>{role}</JobRole>
          <JobDuration>{job.header.duration}</JobDuration>
        </JobMeta>
        {job.items.length > 0 && (
          <JobBullets>
            {job.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </JobBullets>
        )}
      </JobInner>
    </JobEntry>
  );
};

const allTech = [
  ...skillTech.skills.languages,
  ...skillTech.skills.frameworks,
  ...skillTech.skills.styling,
  ...skillTech.skills.database,
  ...skillTech.skills.tools,
];

const Experience = () => (
  <ExperienceWrapper>
    <ExperienceMain>
      <ExperienceLabel>02 — Work Experience</ExperienceLabel>
      <JobList>
        {workHistory.jobs.map(job => (
          <JobReveal key={job.header.title} job={job} />
        ))}
      </JobList>
    </ExperienceMain>

    <TechBand>
      <TechBandInner>
        <TechBandLabel>Technologies</TechBandLabel>
        <TechRow>
          {allTech.map(tech => (
            <TechItem key={tech}>{tech}</TechItem>
          ))}
        </TechRow>
      </TechBandInner>
    </TechBand>
  </ExperienceWrapper>
);

export default Experience;
