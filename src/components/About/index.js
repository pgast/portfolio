import React from 'react';
import './index.css';
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
  Container,
  Scroll,
  NameTitle,
  Button, 
  ButtonRow,
  Section,
  SkillsSection,
  SideSection,
  NameContainer,
  SkillsTech,
  Description,
  EducationLevel,
  WorkExperience,
  WorkExperienceHeader,
  ExperienceSection,
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
        <ExperienceSection>
          <h3>
            {workHistory.title}
          </h3>
          {workHistory.jobs.map(el => 
            <WorkExperience>
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
            </WorkExperience>
          )}
        </ExperienceSection>

        <Section>
          <h3>
            {education.title}
          </h3>
          <div>
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
          </div>
        </Section>


        <SkillsSection>
          <Section>
            <h3>{skillTech.title}</h3>
            <SkillsTech>
              <ul>
                {skillTech.skills.map(el => <li>{el}</li>)}
              </ul>
            </SkillsTech>
          </Section>
          <Section>
            <h3>
              {skills.title}
            </h3>          
            <SkillsTech>
              <ul>
                {skills.columns[0].map(el => <li>{el}</li>)}
                {skills.columns[1].map(el => <li>{el}</li>)}
              </ul>
            </SkillsTech>
          </Section>
        </SkillsSection>

        <Section>
          <h3>
            {awards.title}
          </h3>
          <div>
            <div>
              {awards.columns[0].map(el => <p>{el}</p>)}
            </div>
            <div>
              {awards.columns[1].map(el => <p>{el}</p>)}
            </div>
          </div>
        </Section>
      </Scroll>
    </Container>
  );
};

export default About;