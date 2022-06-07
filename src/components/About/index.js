import React from 'react';
import './index.css';

const buttons = [
  { text: 'Resume', href: 'https://drive.google.com/uc?export=download&id=1nN_dQuBMAPaTofOev5Zomf4MHDXZFmBB' },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/pablogastelum'},
  { text: 'Github', href: 'https://github.com/pgast' },
];

const about = {
  mainDescription: {
    h3: "Pablo Gastelum Leyva",
    description: "Hi! I'm a web developer with a product design background. After years building real physical objects (and the occasional venture into graphic design) I took my side hobby of web development and decided to focus full time on creating digital experiences.",
    greet: "Feel free to contact me, I'd love to hear from you."
  }
}

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
          <h3>tech / years</h3>
          <div className="skillsTech">
            <ul>
              <li>HTML-CSS / 7</li>
              <li>Javascript / 7</li>
              <li>React / 6</li>
              <li>Redux / 5</li>
              <li>React-Query / 1</li>
              <li>NextJS / 1</li>
            </ul>
            <ul>
              <li>Node.js / 3</li>
              <li>Express.js / 3</li>
              <li>MongoDB / 1</li>
              <li>Python / 1</li>
            </ul>
          </div>
        </div>
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
                <p>Over 700 hours of online learning and 6 certifications spanning</p>
                <ul>
                  <li>
                    <a
                      target="_blank" 
                      rel="noreferrer"
                      href={"https://udemy-certificate.s3.amazonaws.com/pdf/UC-32236e40-565f-46e0-a24a-5a0275d8b99e.pdf"}>
                      - Front end development
                    </a>
                  </li>
                  <li>- React / Redux</li>
                  <li>- Data Structures</li>
                  <li>- Python</li>
                  {/* Add links to certificates */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSection" id="experience">
          <h3>work history</h3>
          <div>
            <div>
              <p>2021-Now / Frontend Developer / Apli</p>
              <ul>
                <li>Developed client-facing and internal software using React and NextJS.</li>
                <li>Created job-board for clients.</li>
                <li>Delivered design and engineering woodwork concepts for hotel chains and residential clients.</li>
              </ul>
            </div>
            <div>
              <p>2018-2021 / Designer / Macizo Carpinteria</p>
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