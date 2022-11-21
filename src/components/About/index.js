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
  List,
  SkillTechList,
  Section,
  Main,
  ScrollArea,
  Skills,
} from './styled'

const renderBtns = (btns) => {
  return btns.map(btn => {
    return (
      <div className="btn">
        <a 
          target="_blank" 
          rel="noreferrer"
          href={btn.href}
        >
          <h3>{btn.text}</h3>
        </a>
      </div>
    )
  })
}

const About = () => {
  return (
    <Container>
      <Main>
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
      </Main>



      <ScrollArea>
        <Section>
          <h3>{skillTech.title}</h3>
          <Skills>
            <List>
              {skillTech.columns[0].map(el => <li>{el}</li>)}
            </List>
            <List>
              {skillTech.columns[1].map(el => <li>{el}</li>)}
            </List>
          </Skills>
        </Section>

        <Section>
          <h3>
            {skills.title}
          </h3>          
          <Skills>
            <SkillTechList>
              {skills.columns[0].map(el => <li>{el}</li>)}
            </SkillTechList>
            <SkillTechList $isLast>
              {skills.columns[1].map(el => <li>{el}</li>)}
            </SkillTechList>
          </Skills>
        </Section>


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
                <List>
                  {education.certifications.links.map(el => 
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={el.href}
                      >
                        {el.title}
                      </a>
                    </li>
                  )}
                </List>
              </div>
            </div>
          </Section>

        </div>


        <Section>
          <h3>
            {workHistory.title}
          </h3>
          <div>
            {workHistory.jobs.map((el, idx) => 
              <div>
                <p>
                  {el.title}
                </p>
                <List 
                  $marginBottom={idx === workHistory.jobs.length - 1 ? 0 : '2rem'}
                >
                  {el.items.map(item => <li>{item}</li>)}
                </List>
              </div>
            )}
          </div>
        </Section>

        <div/>
      </ScrollArea>

    </Container>
  );
};

export default About;