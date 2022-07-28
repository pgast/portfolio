import React, { useState } from 'react';

import './index.css';
import { projects } from '../../constants/work'

const Work = () => {
  const [selected, setSelected] = useState(null);
  const isSelected = (project) => project === selected ? true : false;
  const toggleProject = (project) => setSelected(isSelected(project) ? null : project);
  const renderProject = (project) => {
    return (
      <div 
        className="project"
        onClick={() => toggleProject(project.name)}
        id={isSelected(project.name) ? 'selectedProject' : undefined}
      >
        <h3>{project.name}</h3>
        <p>{project.info}</p>
        {isSelected(project.name) &&
          <div id="projectInfo">
            <div className="projectStack">
              {project.stack.map(el => <h3 key={el}>{el}</h3>)}
            </div>
            <div className="projectBtnRow">
              <div 
                className="btn" 
                onClick={() => window.open(project.links.live, "_blank")}
              >
                <h3>Try it</h3>
              </div>
              <div 
                className="btn" 
                onClick={() => window.open(project.links.code, "_blank")}
              >
                <h3>Code</h3>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }

  return (
    <div className="work">
      <div>
        {renderProject(projects[0])}
        {renderProject(projects[1])}
        {renderProject(projects[2])}
      </div>
      <div>
        {renderProject(projects[4])}
        {renderProject(projects[5])}
        {renderProject(projects[3])}
      </div>
    </div>
  );
};

export default Work;