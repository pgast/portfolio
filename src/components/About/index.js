import React from 'react';

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
  Scroll,
  Button, 
  Section,
  Container,
  NameTitle,
  ButtonRow,
  SkillsTech,
  SideSection,
  Description,
  SkillsTitle,
  SkillSubtitle,
  AwardsContent,
  NameContainer,
  EducationLevel,
  EducationTitle,
  TechSkillsTitle,
  ExperienceTitle,
  ExperienceSection,
  BulletPointsContent,
  WorkExperienceHeader,
} from './styled'

const renderBtns = (btns) => {
  return btns.map(btn => {
    return (
      <Button>
        <a 
          target="_blank" 
          rel="noreferrer"
          href={btn.href}
        >
          <h3>{btn.text}</h3>
        </a>
      </Button>
    )
  })
}

const About = () => {
  return (
    <Container>
      <SideSection>
        <NameContainer>
          <NameTitle>
            Pablo
          </NameTitle>
          <NameTitle>
            Gastelum
          </NameTitle>
          <Description>
            <p>{about.mainDescription.description}</p>
          </Description>
        </NameContainer>
        <ButtonRow>
          {renderBtns(buttons)}
        </ButtonRow>
      </SideSection>
      <Scroll>
        {/* Work Experience */}
        <ExperienceSection>
          <ExperienceTitle>
            <h5>
              {workHistory.title}
            </h5>
          </ExperienceTitle>
          {workHistory.jobs.map(el => 
            <BulletPointsContent>
              <WorkExperienceHeader>
                <p>
                  {el.header.title}
                </p>
                <p>
                  {el.header.duration}
                </p>
              </WorkExperienceHeader>
              <ul>
                {el.items.map(item => <li>{item}</li>)}
              </ul>
            </BulletPointsContent>
          )}
        </ExperienceSection>

        {/* Education */}
        <Section>
          <EducationTitle>
            <h5>
              {education.title}
            </h5>
          </EducationTitle>
          <BulletPointsContent>
            <EducationLevel>
              {education.school.map(el => <p>{el}</p>)}
            </EducationLevel>
            <div>
              <p>{education.certifications.title}</p>
              <ul>
                {education.certifications.links.map(el => 
                  <li>
                    <a
                      target={el.href === '' ? '' : "_blank"}
                      rel="noreferrer"
                      href={el.href === '' ? 'javascript:void(0);' : el.href}
                    >
                      {el.title}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </BulletPointsContent>
        </Section>

        {/* Tech skills */}
        <Section>
          <TechSkillsTitle>
            <h5>{skillTech.title}</h5>
          </TechSkillsTitle>
          <SkillsTech>
            <div>
              <SkillSubtitle>
                Languages
              </SkillSubtitle>
              <ul>
                {skillTech.skills.languages.map(el => <li>{el}</li>)}
              </ul>
              <SkillSubtitle>
                Frameworks and Libraries
              </SkillSubtitle>
              <ul>
                {skillTech.skills.frameworks.map(el => <li>{el}</li>)}
              </ul>
              <SkillSubtitle>
                Styling
              </SkillSubtitle>
              <ul>
                {skillTech.skills.styling.map(el => <li>{el}</li>)}
              </ul>
            </div>
            <div>
              <SkillSubtitle>
                Databases
              </SkillSubtitle>
              <ul>
                {skillTech.skills.database.map(el => <li>{el}</li>)}
              </ul>
              <SkillSubtitle>
                Tools
              </SkillSubtitle>
              <ul>
                {skillTech.skills.tools.map(el => <li>{el}</li>)}
              </ul>
            </div>
          </SkillsTech>
        </Section>

        {/* Skills */}
        <Section>
          <SkillsTitle>
            <h5>
              {skills.title}
            </h5>          
          </SkillsTitle>
          <SkillsTech>
            <ul>
              {skills.columns.map(el => <li>{el}</li>)}
            </ul>
          </SkillsTech>
        </Section>

        {/* Awards */}
        <Section>
          <SkillsTitle>
            <h5>
              {awards.title}
            </h5>
          </SkillsTitle>
          <AwardsContent>
            <div>
              {awards.columns[0].map(el => <p>{el}</p>)}
            </div>
            <div>
              {awards.columns[1].map(el => <p>{el}</p>)}
            </div>
          </AwardsContent>
        </Section>
      </Scroll>
    </Container>
  );
};

export default About;