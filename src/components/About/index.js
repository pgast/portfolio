import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className="about">
      <div className="aboutRow">
        <div className="aboutPhoto">
          {/* foto */}
        </div>
        <div className="aboutMain">
          <div>
          {/* nombre y descripcion */}
            <h1>Pablo Gastelum Leyva</h1>
            <p>Creative designer blah blah blah blasjdflks lkkel sfs elj</p>
          </div>
          <div className="aboutMain_btnRow">
          {/* get resume, codepen, github */}
            <div className="btn">
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://github.com/pgast/dash-tabs" 
              >
                <h3>Get resume</h3>
              </a>
            </div>
            <div className="btn">
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://github.com/pgast" 
              >
                <h3>Github</h3>
              </a>
            </div>
            <div className="btn">
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://github.com/pgast/dash-tabs" 
              >
                <h3>Codepen</h3>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="aboutRow">
        <div className="aboutSection">
          <h3>skills</h3>
          <div>
            <div>
              <p>shit</p>
              <p>shit</p>
              <p>shit</p>
            </div>
            <div>
              <p>shit</p>
              <p>shit</p>
              <p>shit</p>
            </div>
          </div>
        </div>
        <div className="aboutSection">
          <h3>tech / years</h3>
          <div>
            <div>
              <p>shit</p>
              <p>shit</p>
              <p>shit</p>
            </div>
            <div>
              <p>shit</p>
              <p>shit</p>
              <p>shit</p>
            </div>
          </div>
        </div>
      </div>


      <div className="aboutRow">
        <div className="aboutSection">
          <h3>awards / recognition</h3>
          <div>

          </div>
        </div>
        <div className="aboutSection">
          <h3>work experience</h3>
          <div>
            <p>Macdonalds</p>
            <p>Macdonalds</p>
            <p>Macdonalds</p>
            <p>Macdonalds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;