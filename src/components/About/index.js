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
    <div className="about">
      <div className="aboutMain">
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
      </div>
      <div className="aboutScroll">
      <div className="aboutSection">
          <h3>{skillTech.title}</h3>
          <div className="skillsTech">
            <ul>
              {skillTech.columns[0].map(el => <li>{el}</li>)}
            </ul>
            <ul>
              {skillTech.columns[1].map(el => <li>{el}</li>)}
            </ul>
          </div>
        </div>
        <div className="aboutSection">
          <h3>
            {skills.title}
          </h3>          
          <div className="skillsTech">
            <ul>
              {skills.columns[0].map(el => <li>{el}</li>)}
            </ul>
            <ul>
              {skills.columns[1].map(el => <li>{el}</li>)}
            </ul>
          </div>
        </div>
        <div id="awardsEducation">
          <div className="aboutSection">
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
          </div>
          <div className="aboutSection">
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
                        target="_blank"
                        rel="noreferrer"
                        href={el.href}
                      >
                        {el.title}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSection" id="experience">
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
        </div>
        <div/>
      </div>
    </div>
  );
};

export default About;