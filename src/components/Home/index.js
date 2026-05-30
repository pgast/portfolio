import React from 'react';

import {
  HeroWrapper,
  HeroContent,
  IndexTag,
  HeroHeadline,
  HeadlineAccent,
  HeroBottom,
  BottomLabel,
  ViewWorkBtn,
} from './styled';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const Home = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroWrapper>

      <HeroContent {...fadeUp(0)}>
        <IndexTag {...fadeUp(0.1)}>
          01 — Senior Software Engineer
        </IndexTag>
        <HeroHeadline {...fadeUp(0.25)}>
          Making Complex<br />
          Things <HeadlineAccent>Simple.</HeadlineAccent>
        </HeroHeadline>
      </HeroContent>

      <HeroBottom {...fadeUp(0.5)}>
        <BottomLabel>Senior Software Engineer · Product Systems</BottomLabel>
        <ViewWorkBtn onClick={scrollToWork}>View work →</ViewWorkBtn>
      </HeroBottom>

    </HeroWrapper>
  );
};

export default Home;
