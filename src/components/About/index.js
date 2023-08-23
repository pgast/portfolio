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
  SideSection,
  SkillsTech,
  Description,
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
      {/* <div className="aboutMain">
        <div className="aboutPhoto"></div>
        <div className="aboutMain_desc">
          <div>
            <h3>{about.mainDescription.h3}</h3>
            <p>{about.mainDescription.description}</p>
            <p>{about.mainDescription.greet}</p>
          </div>
          <div className="aboutMain_btnRow">
            {renderBtns(buttons)}
          </div>
        </div>
      </div> */}

      <SideSection>
        <ButtonRow>
          {renderBtns(buttons)}
        </ButtonRow>
        <Section>
          <h3>{skillTech.title}</h3>
          <SkillsTech>
            <ul>
              {skillTech.columns[0].map(el => <li>{el}</li>)}
              {skillTech.columns[1].map(el => <li>{el}</li>)}
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
      </SideSection>
      <Scroll>
        <NameTitle>
          Pablo
        </NameTitle>
        <NameTitle>
          Gastelum
        </NameTitle>
        <Description>
          <p>{about.mainDescription.description}</p>
        </Description>
        <ExperienceSection>
          <h3>
            {workHistory.title}
          </h3>
          <div>
            {workHistory.jobs.map(el => 
              <div>
                <p>
                  {el.title}
                </p>
                <ul>
                  {el.items.map(item => <li>{item}</li>)}
                </ul>
              </div>
            )}
          </div>
        </ExperienceSection>
        <div id="awardsEducation">
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
          <Section>
            <h3>
              {education.title}
            </h3>
            <div>
              <div>
                {education.school.map(el => <p>{el}</p>)}
              </div>
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
        </div>
      </Scroll>
    </Container>
  );
};

export default About;