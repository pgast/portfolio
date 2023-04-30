import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  letterIds,
  labels,
  letters,
  blankLetters,
} from '../../constants/home'

import {
  Button,
  Content,
  Container,
  Description,
  TitleTextRow,
  TitleContainer,
  AnimatedLetter,
  TextColorLabel,
  MobileTextLabel,
  MobileDescription,
  DescriptionTextRow,
} from './styled'

const Home = ({ setView }) => {
  const [labelsIdx, setLabelsIdx] = useState({ dev: 0, verb: 0 });
  const [lettersIds, setLettersIds] = useState(blankLetters);

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

  const renderAnimatedLetter = (letter, index, name) => {
    const letterColor = lettersIds[name][index]
    return (
      <AnimatedLetter
        key={index}
        $color={letterColor || 'gray'}
        onMouseEnter={() => changeLetterColor(index, name)}
      >
        {letter}
      </AnimatedLetter>
    )
  };

  return (
    <Container>
      <Content>
        <TitleContainer>
          <TitleTextRow>
            {letters.pablo.map((el, idx) => renderAnimatedLetter(el, idx, "firstName"))}
          </TitleTextRow>
          <TitleTextRow>
            {letters.gastelum.map((el, idx) => renderAnimatedLetter(el, idx, "lastName"))}
          </TitleTextRow>
        </TitleContainer>
        <Description onMouseEnter={changeLabels}>
          <MobileDescription>
            is a <MobileTextLabel $color="yellow">&nbsp;{labels.dev[labelsIdx.dev]}&nbsp;</MobileTextLabel>
            developer and product designer that <MobileTextLabel $color="blue">&nbsp;{labels.verb[labelsIdx.verb]}&nbsp;</MobileTextLabel>
            web and mobile experiences.
          </MobileDescription>
          <DescriptionTextRow $marginBottom={"0.2rem"}>
            <p>is a</p>
            <TextColorLabel $color="yellow">&nbsp;{labels.dev[labelsIdx.dev]}&nbsp;</TextColorLabel>
            <p>developer and product designer</p>
          </DescriptionTextRow>
          <DescriptionTextRow>
            <p>that</p>
            <TextColorLabel $color="blue" $fontColor="white">&nbsp;{labels.verb[labelsIdx.verb]}&nbsp;</TextColorLabel>
            <p>web and mobile experiences.</p>
          </DescriptionTextRow>
        </Description>
        <Link 
          to={`/work`} 
          onClick={() => setView('work')} 
          style={{ textDecoration: "none", color: "black" }} 
        >
          <Button>
            <h3>
              Discover them here
            </h3>
          </Button>
        </Link>
      </Content>
    </Container>
  );
};

export default Home;