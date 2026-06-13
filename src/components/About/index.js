import { useEffect, useRef } from 'react';
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
  PosterSection, StickyHeader, BigName, NameAccent,
  PosterBody, LeftColumn, LeftLabel, Bio, ButtonRow, Button,
  RightColumn, Block, BlockLabel,
  JobRow, JobHeader, JobTitle, JobCompanyAccent, JobDuration, JobBullets,
  ChipCategory, ChipCategoryLabel, ChipRow, Chip,
  EducationSchool, CertTitle, CertList,
  AwardsGrid, AwardEntry,
} from './styled';

// ─── Animation variants ────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Helpers ────────────────────────────────────────────────────────────────

const parseTitle = (title) => {
  const idx = title.indexOf(' / ');
  if (idx === -1) return { role: title, company: '' };
  return { role: title.slice(0, idx), company: title.slice(idx + 3) };
};

const TECH_CATEGORIES = [
  { label: 'Languages',              items: skillTech.skills.languages  },
  { label: 'Frameworks & Libraries', items: skillTech.skills.frameworks },
  { label: 'Styling',                items: skillTech.skills.styling    },
  { label: 'Databases',              items: skillTech.skills.database   },
  { label: 'Tools',                  items: skillTech.skills.tools      },
];

// ─── Reveal block (fade up on scroll into view) ───────────────────────────────

const RevealBlock = ({ children, label }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <Block ref={ref} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {label && <BlockLabel>{label}</BlockLabel>}
      {children}
    </Block>
  );
};

// ─── About ──────────────────────────────────────────────────────────────────

const SHRINK_DISTANCE = 320;
const MIN_FONT_SIZE = 24;
const STICKY_OFFSET = 64;

const About = () => {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let maxFontSize = parseFloat(window.getComputedStyle(nameRef.current).fontSize);

    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
      const progress = Math.min(Math.max((window.scrollY - sectionTop) / SHRINK_DISTANCE, 0), 1);
      const fontSize = maxFontSize - progress * (maxFontSize - MIN_FONT_SIZE);
      nameRef.current.style.fontSize = `${fontSize}px`;

      // Hide the sticky header once it would overflow past the section's
      // bottom edge — keeps the white/dark section cut hard, no bleed.
      const headerHeight = headerRef.current.offsetHeight;
      const pastSection = window.scrollY + STICKY_OFFSET + headerHeight >= sectionBottom;
      headerRef.current.style.visibility = pastSection ? 'hidden' : 'visible';
    };

    const handleResize = () => {
      nameRef.current.style.fontSize = '';
      maxFontSize = parseFloat(window.getComputedStyle(nameRef.current).fontSize);
      handleScroll();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PosterSection ref={sectionRef}>

      <StickyHeader ref={headerRef}>
        <BigName ref={nameRef}>
          Pablo <NameAccent>Gastelum</NameAccent>
        </BigName>
      </StickyHeader>

      <PosterBody>

        <LeftColumn>
          <LeftLabel>About</LeftLabel>
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

          <RevealBlock label={workHistory.title}>
            {workHistory.jobs.map(job => {
              const { role, company } = parseTitle(job.header.title);
              return (
                <JobRow key={job.header.title}>
                  <JobHeader>
                    <JobTitle>
                      {role}{company && <> / <JobCompanyAccent>{company}</JobCompanyAccent></>}
                    </JobTitle>
                    <JobDuration>{job.header.duration}</JobDuration>
                  </JobHeader>
                  {job.items.length > 0 && (
                    <JobBullets>
                      {job.items.map(item => <li key={item}>{item}</li>)}
                    </JobBullets>
                  )}
                </JobRow>
              );
            })}
          </RevealBlock>

          <RevealBlock label={skillTech.title}>
            {TECH_CATEGORIES.map(({ label, items }) => (
              <ChipCategory key={label}>
                <ChipCategoryLabel>{label}</ChipCategoryLabel>
                <ChipRow>
                  {items.map(item => <Chip key={item}>{item}</Chip>)}
                </ChipRow>
              </ChipCategory>
            ))}
          </RevealBlock>

          <RevealBlock label={skills.title}>
            <ChipRow>
              {skills.columns.map(item => <Chip key={item}>{item}</Chip>)}
            </ChipRow>
          </RevealBlock>

          <RevealBlock label={education.title}>
            <EducationSchool>
              {education.school.map(el => <p key={el}>{el}</p>)}
            </EducationSchool>
            <CertTitle>{education.certifications.title}</CertTitle>
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
          </RevealBlock>

          <RevealBlock label={awards.title}>
            <AwardsGrid>
              {awards.columns.map(col => (
                <AwardEntry key={col[0]}>
                  <p>{col[0]}</p>
                  <p>{col[1]}</p>
                </AwardEntry>
              ))}
            </AwardsGrid>
          </RevealBlock>

        </RightColumn>

      </PosterBody>

    </PosterSection>
  );
};

export default About;
