import {
  about,
  awards,
  skills,
  buttons,
  skillTech,
  education,
  workHistory,
} from '../../constants/about'

import {
  Tag,
  Bio,
  Button,
  TagsRow,
  TechGrid,
  JobBlock,
  JobTitle,
  JobHeader,
  JobDuration,
  Container,
  LeftPanel,
  RightPanel,
  ButtonRow,
  CertTitle,
  AwardBlock,
  PanelTitle,
  TechCategory,
  SectionBlock,
  SectionLabel,
  EducationSchool,
  TechCategoryLabel,
} from './styled'

import ScrollableSection from '../section'

const About = () => {
  return (
    <ScrollableSection>
      <Container>

        <LeftPanel>
          <SectionLabel>02 — About</SectionLabel>
          <PanelTitle>Pablo<br />Gastelum</PanelTitle>
          <Bio>
            <p>{about.mainDescription.description}</p>
          </Bio>
          <ButtonRow>
            {buttons.map(btn => (
              <Button key={btn.text} href={btn.href} target="_blank" rel="noreferrer">
                {btn.text}
              </Button>
            ))}
          </ButtonRow>
        </LeftPanel>

        <RightPanel>

          <SectionBlock>
            <SectionLabel>{workHistory.title}</SectionLabel>
            {workHistory.jobs.map(job => (
              <JobBlock key={job.header.title}>
                <JobHeader>
                  <JobTitle>{job.header.title}</JobTitle>
                  <JobDuration>{job.header.duration}</JobDuration>
                </JobHeader>
                <ul>
                  {job.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </JobBlock>
            ))}
          </SectionBlock>

          <SectionBlock>
            <SectionLabel>{education.title}</SectionLabel>
            <EducationSchool>
              {education.school.map(el => <p key={el}>{el}</p>)}
            </EducationSchool>
            <CertTitle>{education.certifications.title}</CertTitle>
            <ul>
              {education.certifications.links.map(el => (
                <li key={el.title}>
                  <a
                    target={el.href === '' ? '' : '_blank'}
                    rel="noreferrer"
                    href={el.href === '' ? 'javascript:void(0);' : el.href}
                  >
                    {el.title}
                  </a>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock>
            <SectionLabel>{skillTech.title}</SectionLabel>
            <TechGrid>
              <div>
                <TechCategory>
                  <TechCategoryLabel>Languages</TechCategoryLabel>
                  <TagsRow>
                    {skillTech.skills.languages.map(el => <Tag key={el}>{el}</Tag>)}
                  </TagsRow>
                </TechCategory>
                <TechCategory>
                  <TechCategoryLabel>Frameworks &amp; Libraries</TechCategoryLabel>
                  <TagsRow>
                    {skillTech.skills.frameworks.map(el => <Tag key={el}>{el}</Tag>)}
                  </TagsRow>
                </TechCategory>
                <TechCategory>
                  <TechCategoryLabel>Styling</TechCategoryLabel>
                  <TagsRow>
                    {skillTech.skills.styling.map(el => <Tag key={el}>{el}</Tag>)}
                  </TagsRow>
                </TechCategory>
              </div>
              <div>
                <TechCategory>
                  <TechCategoryLabel>Databases</TechCategoryLabel>
                  <TagsRow>
                    {skillTech.skills.database.map(el => <Tag key={el}>{el}</Tag>)}
                  </TagsRow>
                </TechCategory>
                <TechCategory>
                  <TechCategoryLabel>Tools</TechCategoryLabel>
                  <TagsRow>
                    {skillTech.skills.tools.map(el => <Tag key={el}>{el}</Tag>)}
                  </TagsRow>
                </TechCategory>
              </div>
            </TechGrid>
          </SectionBlock>

          <SectionBlock>
            <SectionLabel>{skills.title}</SectionLabel>
            <TagsRow>
              {skills.columns.map(el => <Tag key={el}>{el}</Tag>)}
            </TagsRow>
          </SectionBlock>

          <SectionBlock>
            <SectionLabel>{awards.title}</SectionLabel>
            {awards.columns.map(col => (
              <AwardBlock key={col[0]}>
                <p>{col[0]}</p>
                <p>{col[1]}</p>
              </AwardBlock>
            ))}
          </SectionBlock>

        </RightPanel>
      </Container>
    </ScrollableSection>
  );
};

export default About;
