import { projects } from '../../constants/work'

import {
  WorkWrapper,
  WorkContent,
  WorkLabel,
  WorkStatement,
  StatementBlue,
  ProjectList,
  ProjectRow,
  ProjectIndex,
  ProjectName,
  ProjectArrow,
} from './styled'

import ScrollableSection from '../section'

const DISPLAYED = projects.slice(0, 3)

const Work = () => (
  <ScrollableSection>
    <WorkWrapper>
      <WorkContent>

        <WorkLabel>02 — Selected work</WorkLabel>
        <WorkStatement>
          Work That <StatementBlue>Matters.</StatementBlue>
        </WorkStatement>

        <ProjectList>
          {DISPLAYED.map((project, i) => (
            <ProjectRow
              key={project.name}
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              <ProjectIndex>0{i + 1}</ProjectIndex>
              <ProjectName className="project-title">{project.name}</ProjectName>
              <ProjectArrow className="project-arrow">→</ProjectArrow>
            </ProjectRow>
          ))}
        </ProjectList>

      </WorkContent>
    </WorkWrapper>
  </ScrollableSection>
);

export default Work;
