import React, { useState } from 'react';

import './index.css';

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
        <h1>{project.name}</h1>
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

  let projects = [
    {
      name: 'dashtabs',
      info: 'QR based order management tool for food businesses',
      stack: ['React', 'Authentication', 'Backend db'],
      links: {
        live: 'http://dashtabs.surge.sh/',
        code: 'https://github.com/pgast/dash-tabs'
      }
    },
    {
      name: 'bitechoice',
      info: 'Find great places to eat near you or anywhere in the world',
      stack: ['React', 'Node.js', 'Express.js', 'API'],
      links: {
        live: 'http://bite-choice.herokuapp.com/',
        code: 'https://github.com/pgast/bite-choice' 
      }
    },
    {
      name: 'split',
      info: 'Progressive web app for expense breakdown in events and projects',
      stack: ['React', 'Progressive Web App'],
      links: {
        live: 'http://s-plit.herokuapp.com/',
        code:  'https://github.com/pgast/split' 
      }
    },
    {
      name: 'zoet',
      info: 'Responsive site for a local business',
      stack: ['Gatsby', 'Responsive'],
      links: {
        live: 'http://zoet.surge.sh/Landing',
        code: 'https://github.com/pgast/zoet' 
      }
    }
  ];

  return (
    <div className="work">
      <div>
        {renderProject(projects[0])}
        {renderProject(projects[1])}
      </div>
      <div>
        {renderProject(projects[2])}
        {renderProject(projects[3])}
      </div>
    </div>
  );
};

export default Work;