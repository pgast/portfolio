import { projects } from '../../constants/work'

import {
  Container,
  LeftPanel,
  SectionLabel,
  PanelTitle,
} from '../About/styled'

import {
  WorkRight,
  ProjectRow,
  ProjectIndex,
  ProjectBody,
  ProjectName,
  ProjectDescription,
  StackRow,
  StackTag,
  ProjectLinks,
  ProjectLink,
} from './styled'

import ScrollableSection from '../section'

const DISPLAYED = projects.slice(0, 3)

const Work = () => (
  <ScrollableSection>
    <Container>

      <LeftPanel>
        <SectionLabel>02 — Work</SectionLabel>
        <PanelTitle>Selected<br />Work</PanelTitle>
      </LeftPanel>

      <WorkRight>
        {DISPLAYED.map((project, i) => (
          <ProjectRow key={project.name}>
            <ProjectIndex>0{i + 1}</ProjectIndex>
            <ProjectBody>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.info}</ProjectDescription>
              <StackRow>
                {project.stack.map(s => <StackTag key={s}>{s}</StackTag>)}
              </StackRow>
            </ProjectBody>
            <ProjectLinks>
              <ProjectLink
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
              >
                Live ↗
              </ProjectLink>
              <ProjectLink
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
              >
                Code ↗
              </ProjectLink>
            </ProjectLinks>
          </ProjectRow>
        ))}
      </WorkRight>

    </Container>
  </ScrollableSection>
);

export default Work;
