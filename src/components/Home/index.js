import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import {
  HeroWrapper,
  ContentArea,
  NameSection,
  NameRow,
  Letter,
  SubText,
  ScrollIndicator,
  ScrollLine
} from './styled';

// ─── Constants ────────────────────────────────────────────────────────────────

const PABLO    = ['P','A','B','L','O'];
const GASTELUM = ['G','A','S','T','E','L','U','M'];

const BRAND_COLORS = ['#ff1f25', '#ffdd18', '#005cef'];

// ─── Animation Variants ───────────────────────────────────────────────────────

const letterVariants = {
  hidden: { opacity: 0, y: 70, scale: 0.22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.062,
      type: 'spring',
      stiffness: 370,
      damping: 16,
    },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

const Home = ({ setView }) => {
  const [isReady, setIsReady]         = useState(false);
  const [hoverColors, setHoverColors] = useState({});

  useEffect(() => {
    setIsReady(true);
  }, []);

  const randomColor = () => BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <HeroWrapper>

      {/* Main content */}
      <ContentArea>

        <NameSection>
          {/* PABLO */}
          <NameRow>
            {PABLO.map((letter, i) => {
              const key = `p${i}`;
              return (
                <Letter
                  key={key}
                  $hoverColor={hoverColors[key] || null}
                  custom={i}
                  initial="hidden"
                  animate={isReady ? 'visible' : 'hidden'}
                  variants={letterVariants}
                  onMouseEnter={() => setHoverColors(c => ({ ...c, [key]: randomColor() }))}
                >
                  {letter}
                </Letter>
              );
            })}
          </NameRow>

          {/* GASTELUM */}
          <NameRow>
            {GASTELUM.map((letter, i) => {
              const key = `g${i}`;
              return (
                <Letter
                  key={key}
                  $hoverColor={hoverColors[key] || null}
                  custom={PABLO.length + i}
                  initial="hidden"
                  animate={isReady ? 'visible' : 'hidden'}
                  variants={letterVariants}
                  onMouseEnter={() => setHoverColors(c => ({ ...c, [key]: randomColor() }))}
                >
                  {letter}
                </Letter>
              );
            })}
          </NameRow>
        </NameSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
        >
          <SubText>Senior Software Engineer</SubText>
        </motion.div>

      </ContentArea>

      {/* Scroll indicator */}
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : {}}
        transition={{ delay: 1.55, duration: 0.8 }}
      >
        <ScrollLine />
      </ScrollIndicator>

    </HeroWrapper>
  );
};

export default Home;
