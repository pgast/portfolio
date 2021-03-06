import React from 'react';

import { Link } from 'react-router-dom';
import './index.css';

const About = () => {
  const buttons = [
    { text: 'Resume', href: 'https://drive.google.com/uc?export=download&id=1nN_dQuBMAPaTofOev5Zomf4MHDXZFmBB' },
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/pablogastelum'},
    { text: 'Github', href: 'https://github.com/pgast' },
    { text: 'Codepen', href: 'https://codepen.io/Pabl-o' },
  ];

  return (
    <div className="about">
      <div className="aboutMain">
        <div className="aboutPhoto"></div>
        <div className="aboutMain_desc">
          <div>
            <h3>Pablo Gastelum Leyva</h3>
            <p>
              Hi! I'm a web developer with a product design background.
              After years building real physical objects (and the occasional venture
              into graphic design) I took my side hobby of web development and
              decided to focus full time on creating digital experiences.
            </p>
            <p>Feel free to contact me, I'd love to hear from you.</p>
          </div>
          <div className="aboutMain_btnRow">
            <a href={buttons[0].href}>
              <div className="btn">
                <h3>{buttons[0].text}</h3>
              </div>
            </a>
            <div className="btn">
              <a 
                target="_blank" 
                rel="noreferrer"
                href={buttons[1].href}
              >
                <h3>{buttons[1].text}</h3>
              </a>
            </div>
            <div className="btn">
              <a 
                target="_blank" 
                rel="noreferrer"
                href={buttons[2].href}
              >
                <h3>{buttons[2].text}</h3>
              </a>
            </div>
            <div className="btn">
              <a 
                target="_blank" 
                rel="noreferrer"
                href={buttons[3].href}
              >
                <h3>{buttons[3].text}</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutScroll">
        <div className="aboutSection">
          <h3>skills</h3>
          <div className="skillsTech">
            <ul>
              <li>Graphic design</li>
              <li>Product design</li>
              <li>UX/UI design</li>
            </ul>
            <ul>
              <li>Adobe (AI, PS)</li>
              <li>3D Modeling</li>
              <li>Rendering</li>
            </ul>
          </div>
        </div>
        <div className="aboutSection">
          <h3>tech / years</h3>
          <div className="skillsTech">
            <ul>
              <li>HTML/6</li>
              <li>CSS/6</li>
              <li>Javascript/6</li>
            </ul>
            <ul>
              <li>JQuery/6</li>
              <li>React/4</li>
              <li>Redux/4</li>
            </ul>
            <ul>
              <li>Node.js/3</li>
              <li>Express.js/3</li>
            </ul>
          </div>
        </div>
        <div id="awardsEducation">
          <div className="aboutSection">
            <h3>awards / recognition</h3>
            <div>
              <div>
                <p>First Prize / Toy design proposal</p>
                <p>2014 - Kinder Surprise Me! International Competition</p>
              </div>
              <div>
                <p>Finalist / Refrigeration unit made with recycled materials</p>
                <p>2015 - IMBERA Refrigeration</p>
              </div>
            </div>
          </div>
          <div className="aboutSection">
            <h3>education</h3>
            <div>
              <div>
                <p>Bachelor in Product Design</p>
                <p>Universidad Autónoma de Nuevo León, Monterrey MEX.</p>
              </div>
              <div>
                <p>Over 700 hours of online learning and 5 certifications spanning</p>
                <ul>
                  <li>- Front end development</li>
                  <li>- React / Redux</li>
                  <li>- Data Structures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSection" id="experience">
          <h3>work history</h3>
          <div>
            <div>
              <p>2018-Now / Designer / Macizo Carpinteria</p>
              <ul>
                <li>Developed web app that calculates wood wastage.</li>
                <li>Worked in new user-friendly redesign of production blueprints.</li>
                <li>Delivered design and engineering woodwork concepts for hotel chains and residential clients.</li>
              </ul>
            </div>
            <div>
              <p>2017 (10 Mo.) / Product Designer / G3 Fabricación</p>
              <ul>
                <li>Conceptualization of commercial interior design concepts.</li>
                <li>Worked with construction team to achieve project deadlines.</li>
                <li>Generated 3D visualizations of concepts and product engineering.</li>
              </ul>
            </div>
            <div>
              <p>2016 (6 Mo.) / Design Intern / Jorge Diego Etienne Design</p>
              <ul>
                <li>Collaborated in user research execution and analysis.</li>
                <li>Generated computer models and visualizations.</li>
                <li>Built physical models and mockups for idea validation.</li>
              </ul>
            </div>
            <div>
              <p>2011-2013 / Junior Designer / Marley Industrial Supply</p>
              <ul>
                <li>Conceptualization of promotional graphics.</li>
                <li>Delivered industrial safety signage.</li>
                <li>Responsible for project blueprints.</li>
              </ul>
            </div>
          </div>
        </div>
        <div/>
      </div>
    </div>
  );
};

export default About;