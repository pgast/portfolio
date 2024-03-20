import React, { useEffect, useState } from 'react';

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
  Container,
  NameTitle,
  ButtonRow,
  SideSection,
  Description,
  NameContainer,
  WorkExperienceHeader,


  Content,
  WorkExperience,
  Education,
  Skills,
  Awards,
  Bulletpoint,
  Title,
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
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSectionHover = (section) => {
    setExpandedSection(section);
  };

  const resetHover = () => {
    setExpandedSection(null);
  };


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
        <WorkExperience
          onMouseEnter={() => handleSectionHover('work')}
          onMouseLeave={resetHover}
          expanded={expandedSection === 'work'}
          otherIsExpanded={expandedSection !== 'work' && expandedSection !== null}
        >
          <Title expanded={expandedSection === 'work'}>
            Work Experience
          </Title>
          <Content expanded={expandedSection === 'work'}>
            {workHistory.jobs.map(el => 
              <div>
                <WorkExperienceHeader>
                  <h3>
                    {el.header.title}
                  </h3>
                  <h3>
                    {el.header.duration}
                  </h3>
                </WorkExperienceHeader>
                <ul>
                  {el.items.map(item => <Bulletpoint>{item}</Bulletpoint>)}
                </ul>
              </div>
            )}
          </Content>
        </WorkExperience>
        <Education
          onMouseEnter={() => handleSectionHover('education')}
          onMouseLeave={resetHover}
          expanded={expandedSection === 'education'}
          otherIsExpanded={expandedSection !== 'education' && expandedSection !== null}
        >
          <Title expanded={expandedSection === 'education'}>
            Education
          </Title>
        </Education>
        <Skills
          onMouseEnter={() => handleSectionHover('skills')}
          onMouseLeave={resetHover}
          expanded={expandedSection === 'skills'}
          otherIsExpanded={expandedSection !== 'skills' && expandedSection !== null}
        >
          <Title expanded={expandedSection === 'skills'}>
            skills
          </Title>
        </Skills>
        <Awards
          onMouseEnter={() => handleSectionHover('recognition')}
          onMouseLeave={resetHover}
          expanded={expandedSection === 'recognition'}
          otherIsExpanded={expandedSection !== 'recognition' && expandedSection !== null}
        >
          <Title expanded={expandedSection === 'recognition'}>
            awards recognition
          </Title>
        </Awards>
      </Scroll>
    </Container>
  );
};

export default About;