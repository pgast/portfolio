import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navigation = ({ setView, view, labelId }) => {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const setMobileView = (view) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <React.Fragment>
      <div className="label" id={labelId}>
        <h1>
          {view}
        </h1>
      </div>
      <div className="nav">
        <div>
          {['work', 'about', 'contact'].map(el => (
            <Link 
              key={el}
              to={`/${el}`} 
              onClick={() => setView(el)} 
              style={{ textDecoration: "none" }} 
            >
              <h5 
                className="navLink"
                id={view === el ? "selectedView" : undefined}
              >
                {el}
              </h5>
            </Link>
          ))}
        </div>
        <div>
          <a 
            target="_blank" 
            rel="noreferrer"
            href="https://www.linkedin.com/in/pablo-gastélum-2a5081115" 
          >
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto: pablo.g.leyva@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
      {!mobileMenuOpen ? (
          <i 
            id="mobileMenuIcon" 
            className="fas fa-bars" 
            onClick={() => setMobileMenuOpen(true)} 
          />
        )
        :
        (
          <i 
            id="mobileMenuIcon" 
            className="fas fa-times" 
            onClick={() => setMobileMenuOpen(false)} 
          />
        )
      }
      <div id={mobileMenuOpen ? "mobileMenuOpen" : "mobileMenuClosed"}>
        <div>
          {['work', 'about', 'contact'].map(el => (
            <Link 
              key={el}
              to={`/${el}`} 
              onClick={() => setMobileView(el)} 
              style={{ textDecoration: "none" }} 
            >
              <p>{el}</p>
            </Link>
          ))}   
        </div>
        <div>
          <a 
            target="_blank" 
            rel="noreferrer"
            href="https://www.linkedin.com/in/pablo-gastélum-2a5081115" 
          >
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto: pablo.g.leyva@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;