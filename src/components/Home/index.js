import React from 'react';
import { motion } from 'framer-motion';

import {
  HeroWrapper,
  BlueBand,
  ShadowPanel,
  HeroContent,
  IndexTag,
  HeroHeadline,
  HeadlineAccent,
  ConcretoBand,
  WhiteBand,
  BandInner,
  MonoLabel,
  ViewWorkBtn,
  Descriptor,
  AvailableStamp,
} from './styled';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const Home = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroWrapper>

      <BlueBand>
        <ShadowPanel />
        <HeroContent
          initial="hidden"
          animate="visible"
        >
          <IndexTag variants={fadeUp} custom={0.1}>
            01 — Senior Software Engineer
          </IndexTag>
          <HeroHeadline variants={fadeUp} custom={0.25}>
            Making Complex<br />
            Things <HeadlineAccent>Simple.</HeadlineAccent>
          </HeroHeadline>
        </HeroContent>
      </BlueBand>

      <ConcretoBand
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      >
        <BandInner>
          <MonoLabel>Senior Software Engineer · Product Systems</MonoLabel>
          <ViewWorkBtn onClick={scrollToWork}>View work →</ViewWorkBtn>
        </BandInner>
      </ConcretoBand>

      <WhiteBand
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
      >
        <BandInner>
          <Descriptor>
            Product engineer turned software engineer — building systems as considered as they are correct.
          </Descriptor>
          <AvailableStamp>Available</AvailableStamp>
        </BandInner>
      </WhiteBand>

    </HeroWrapper>
  );
};

export default Home;
