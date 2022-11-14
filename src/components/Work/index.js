import React, { useState } from 'react';

import { projects } from '../../constants/work'

import { 
  Container, 
  ProjectsContainer, 
  Project,
  ProjectTitle, 
  Description,
  ProjectInfo,
  ProjectStack,
  StackTitle,
  ProjectBtnRow,
  Button,
} from './styled'

const Work = () => {
  const [selected, setSelected] = useState(null);
  const isSelected = (project) => project === selected ? true : false;
  const toggleProject = (project) => setSelected(isSelected(project) ? null : project);
  const renderProject = (project) => {
    return (
      <Project 
        onClick={() => toggleProject(project.name)}
        $isSelected={isSelected(project.name)}
      >
        <ProjectTitle $isSelected={isSelected(project.name)}>{project.name}</ProjectTitle>
        <Description>{project.info}</Description>
        {isSelected(project.name) &&
          <ProjectInfo>
            <ProjectStack>
              {project.stack.map(el => <StackTitle key={el}>{el}</StackTitle>)}
            </ProjectStack>
            <ProjectBtnRow>
              <Button  
                onClick={() => window.open(project.links.live, "_blank")}
              >
                <h3>Try it</h3>
              </Button>
              <Button 
                onClick={() => window.open(project.links.code, "_blank")}
              >
                <h3>Code</h3>
              </Button>
            </ProjectBtnRow>
          </ProjectInfo>
        }
      </Project>
    )
  }

  return (
    <Container>
      <ProjectsContainer>
        {renderProject(projects[0])}
        {renderProject(projects[1])}
        {renderProject(projects[2])}
      </ProjectsContainer>
      <ProjectsContainer>
        {renderProject(projects[4])}
        {renderProject(projects[5])}
        {renderProject(projects[3])}
      </ProjectsContainer>
    </Container>
  );
};

export default Work;