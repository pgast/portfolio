import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navigation = ({ setView, view, labelId }) => {
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
              to={`/${el}`} 
              onClick={() => setView(el)} 
              style={{ textDecoration: "none" }} 
            >
              <h5 
                className="navLink"
                id={view === el && "selectedView"}
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
            href="https://github.com/pgast" 
          >
            <i className="fab fa-github" />
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