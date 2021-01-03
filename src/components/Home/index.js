import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Home = ({ setView }) => {
  const [labelsIdx, setLabelsIdx] = useState({ dev: 0, verb: 0 });
  const [lettersIds, setLettersIds] = useState({
    firstName: ["", "", "", "", ""],
    lastName: ["", "", "", "", "", "", "", ""]
  });

  const changeLabels = () => {
    setLabelsIdx({
      dev: Math.floor(Math.random() * Math.floor(labels.dev.length)),
      verb: Math.floor(Math.random() * Math.floor(labels.verb.length))
    })
  }

  const changeLetterColor = (idx, nameType) => {
    let newLettersIds = { ...lettersIds };
    newLettersIds[nameType][idx] = letterIds[Math.floor(Math.random() * letterIds.length)];
    setLettersIds(newLettersIds);
  }

  const letterIds = ["blackLetter", "yellowLetter", "blueLetter"];

  const labels = {
    dev: ['front-end', 'self-taught', 'react', 'creative'],
    verb: ['builds', 'codes', 'designs', 'creates', 'delivers']
  }

  const renderAnimatedLetter = (letter, index, name) => (
    <h1 id={lettersIds[name][index]} onMouseEnter={() => changeLetterColor(index, name)}>
      {letter}
    </h1>
  );

  return (
    <div className="home">
      <div className="titleName">
        <div>
          {["P", "a", "b", "l", "o"].map((el, idx) => renderAnimatedLetter(el, idx, "firstName"))}
        </div>
        <div>
          {["G", "a", "s", "t", "e", "l", "u", "m"].map((el, idx) => renderAnimatedLetter(el, idx, "lastName"))}
        </div>
      </div>
      <div className="introDescription" onMouseEnter={changeLabels}>
        <div>
          <p>is a</p>
          <p id="yellowLabel">&nbsp;{labels.dev[labelsIdx.dev]}&nbsp;</p>
          <p>developer and product designer</p>
        </div>
        <div>
          <p>that</p>
          <p id="blueLabel">&nbsp;{labels.verb[labelsIdx.verb]}&nbsp;</p>
          <p>web and mobile experiences.</p>
        </div>
      </div>
      <Link 
        to={`/work`} 
        onClick={() => setView('work')} 
        style={{ textDecoration: "none", color: "black" }} 
      >
        <div className="btn">
            <h3>
              Discover them here
            </h3>
        </div>
      </Link>
    </div>
  );
};

export default Home;