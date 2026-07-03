import { useInView } from 'react-intersection-observer';

import {
  about,
  awards,
  skills,
  buttons,
  skillTech,
  education,
  workHistory,
} from '../../constants/about';

import {
  AboutSection, AboutBody,
  LeftColumn, AboutTitle, TitleAccent, Bio, ButtonRow, Button,
  RightColumn, ContentBlock, BlockLabel, BlockIndex,
  JobRow, JobDuration, JobTitle, JobCompany, JobBullets,
  TechCategory, TechCategoryLabel, ChipRow, Chip,
  EduBlock, SchoolName, SchoolMeta, CertLabel, CertList,
  AwardRow, AwardYear, AwardTitle, AwardDescription,
} from './styled';

// ─── Animation ──────────────────────────────────────────────────────────────

const STAGGER = 0.06;

const rowMotion = (inView, index = 0) => ({
  initial: { opacity: 0, scaleY: 0.4 },
  animate: inView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0.4 },
  transition: { duration: 0.28, delay: index * STAGGER, ease: [0.4, 0, 0.2, 1] },
});

// ─── Helpers ────────────────────────────────────────────────────────────────

const parseTitle = (title) => {
  const idx = title.indexOf(' / ');
  if (idx === -1) return { role: title, company: '' };
  return { role: title.slice(0, idx), company: title.slice(idx + 3) };
};

const parseAward = (text) => {
  const match = text.match(/^(\d{4})\s*-\s*(.*)$/);
  return match ? { year: match[1], description: match[2] } : { year: '', description: text };
};

const TECH_CATEGORIES = [
  { label: 'Languages',              items: skillTech.skills.languages  },
  { label: 'Frameworks & Libraries', items: skillTech.skills.frameworks },
  { label: 'Styling',                items: skillTech.skills.styling    },
  { label: 'Databases',              items: skillTech.skills.database   },
  { label: 'Tools',                  items: skillTech.skills.tools      },
];

// ─── Reveal block (stagger children on scroll) ─────────────────────────────

const RevealBlock = ({ label, index, children }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <ContentBlock ref={ref}>
      <BlockLabel>
        <BlockIndex>{String(index + 1).padStart(2, '0')} — </BlockIndex>{label}
      </BlockLabel>
      {children(inView)}
    </ContentBlock>
  );
};

// ─── About ──────────────────────────────────────────────────────────────────

const About = () => (
  <AboutSection>
    <AboutBody>

      <LeftColumn>
        <AboutTitle>About <TitleAccent>Me</TitleAccent>.</AboutTitle>
        <Bio>{about.mainDescription.description}</Bio>
        <ButtonRow>
          {buttons.map(btn => (
            <Button key={btn.text} href={btn.href} target="_blank" rel="noreferrer">
              {btn.text}
            </Button>
          ))}
        </ButtonRow>
      </LeftColumn>

      <RightColumn>

        <RevealBlock label={workHistory.title} index={0}>
          {(inView) => workHistory.jobs.map((job, i) => {
            const { role, company } = parseTitle(job.header.title);
            return (
              <JobRow key={job.header.title} {...rowMotion(inView, i)}>
                <JobDuration>{job.header.duration}</JobDuration>
                <JobTitle>
                  {role}{company && <> / <JobCompany>{company}</JobCompany></>}
                </JobTitle>
                {job.items.length > 0 && (
                  <JobBullets>
                    {job.items.map(item => <li key={item}>{item}</li>)}
                  </JobBullets>
                )}
              </JobRow>
            );
          })}
        </RevealBlock>

        <RevealBlock label={skillTech.title} index={1}>
          {(inView) => TECH_CATEGORIES.map(({ label, items }, i) => (
            <TechCategory key={label} {...rowMotion(inView, i)}>
              <TechCategoryLabel>{label}</TechCategoryLabel>
              <ChipRow>
                {items.map(item => <Chip key={item}>{item}</Chip>)}
              </ChipRow>
            </TechCategory>
          ))}
        </RevealBlock>

        <RevealBlock label={skills.title} index={2}>
          {(inView) => (
            <TechCategory {...rowMotion(inView, 0)}>
              <ChipRow>
                {skills.columns.map(item => <Chip key={item}>{item}</Chip>)}
              </ChipRow>
            </TechCategory>
          )}
        </RevealBlock>

        <RevealBlock label={education.title} index={3}>
          {(inView) => (
            <EduBlock {...rowMotion(inView, 0)}>
              <SchoolName>{education.school[0]}</SchoolName>
              <SchoolMeta>{education.school[1]}</SchoolMeta>
              <CertLabel>{education.certifications.title}</CertLabel>
              <CertList>
                {education.certifications.links.map(el => (
                  <li key={el.title}>
                    {el.href
                      ? <a target="_blank" rel="noreferrer" href={el.href}>{el.title}</a>
                      : el.title
                    }
                  </li>
                ))}
              </CertList>
            </EduBlock>
          )}
        </RevealBlock>

        <RevealBlock label={awards.title} index={4}>
          {(inView) => awards.columns.map((col, i) => {
            const { year, description } = parseAward(col[1]);
            return (
              <AwardRow key={col[0]} {...rowMotion(inView, i)}>
                <AwardYear>{year}</AwardYear>
                <div>
                  <AwardTitle>{col[0]}</AwardTitle>
                  <AwardDescription>{description}</AwardDescription>
                </div>
              </AwardRow>
            );
          })}
        </RevealBlock>

      </RightColumn>

    </AboutBody>
  </AboutSection>
);

export default About;
