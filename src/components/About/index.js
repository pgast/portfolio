import {
  about,
  awards,
  skills,
  buttons,
  skillTech,
  education,
  workHistory,
} from '../../constants/about'

import { contact } from '../../constants/contact'

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
  NameTitle,
  ButtonRow,
  CertTitle,
  AwardBlock,
  PanelTitle,
  LeftDivider,
  TechCategory,
  SectionBlock,
  SectionLabel,
  ContactEmailButton,
  EducationSchool,
  TechCategoryLabel,
} from './styled'

import ScrollableSection from '../section'

const About = () => {
  return (
    <ScrollableSection>
      <Container>

        {/* Left: sticky panel */}
        <LeftPanel>
          {/* About block */}
          <SectionLabel>about</SectionLabel>
          <PanelTitle>Pablo<br />Gastelum</PanelTitle>
          <Bio>
            <p>{about.mainDescription.description}</p>
          </Bio>
          <ButtonRow>
            {buttons.map(btn => (
              <Button key={btn.text}>
                <a target="_blank" rel="noreferrer" href={btn.href}>
                  <h3>{btn.text}</h3>
                </a>
              </Button>
            ))}
          </ButtonRow>

          <LeftDivider />

          {/* Contact block */}
          <SectionLabel>contact</SectionLabel>
          <PanelTitle>{contact.title}</PanelTitle>
          <ContactEmailButton href={contact.emailHref}>
            {contact.emailBtnText}
          </ContactEmailButton>
        </LeftPanel>

        {/* Right: scrollable content */}
        <RightPanel>

          {/* Work Experience */}
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

          {/* Education */}
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

          {/* Tech Skills */}
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

          {/* Skills */}
          <SectionBlock>
            <SectionLabel>{skills.title}</SectionLabel>
            <TagsRow>
              {skills.columns.map(el => <Tag key={el}>{el}</Tag>)}
            </TagsRow>
          </SectionBlock>

          {/* Awards */}
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
