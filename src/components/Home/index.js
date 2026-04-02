import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import {
  HeroWrapper,
  GradientCanvas,
  BlobShape,
  ContentArea,
  NameSection,
  NameRow,
  Letter,
  SubText,
  CtaRow,
  CtaButton,
  ScrollIndicator,
  ScrollLine,
  ScrollText,
} from './styled';

// ─── Constants ────────────────────────────────────────────────────────────────

const PABLO    = ['P','A','B','L','O'];
const GASTELUM = ['G','A','S','T','E','L','U','M'];
const BRAND_COLORS = ['#ff1f25', '#ffdd18', '#005cef'];

// Four gradient blobs — different sizes, positions, parallax depths, and drift paths
const BLOBS = [
  {
    id: 'b0',
    color: 'rgba(0, 92, 239, 0.26)',
    size: 940,
    left: '-10%', top: '-18%',
    depth: 0.022,
    drift: { x: [0, 50, 0], y: [0, 60, 0] },
    duration: 14, delay: 0,
  },
  {
    id: 'b1',
    color: 'rgba(255, 221, 24, 0.38)',
    size: 780,
    left: '58%', top: '38%',
    depth: 0.016,
    drift: { x: [0, -40, 0], y: [0, -50, 0] },
    duration: 11, delay: 1.5,
  },
  {
    id: 'b2',
    color: 'rgba(255, 31, 37, 0.20)',
    size: 540,
    left: '82%', top: '-14%',
    depth: 0.036,
    drift: { x: [0, -28, 0], y: [0, 70, 0] },
    duration: 9, delay: 0.8,
  },
  {
    id: 'b3',
    color: 'rgba(0, 50, 200, 0.13)',
    size: 640,
    left: '28%', top: '70%',
    depth: 0.011,
    drift: { x: [0, 44, 0], y: [0, -32, 0] },
    duration: 16, delay: 2.2,
  },
];

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

  // Mouse position → springs for smooth parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 36, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 36, damping: 22 });

  // 4 blobs × 2 axes = 8 stable top-level useTransform calls (no loops)
  const b0x = useTransform(springX, v => v * BLOBS[0].depth);
  const b0y = useTransform(springY, v => v * BLOBS[0].depth);
  const b1x = useTransform(springX, v => v * BLOBS[1].depth);
  const b1y = useTransform(springY, v => v * BLOBS[1].depth);
  const b2x = useTransform(springX, v => v * BLOBS[2].depth);
  const b2y = useTransform(springY, v => v * BLOBS[2].depth);
  const b3x = useTransform(springX, v => v * BLOBS[3].depth);
  const b3y = useTransform(springY, v => v * BLOBS[3].depth);

  const blobMotions = [
    { x: b0x, y: b0y },
    { x: b1x, y: b1y },
    { x: b2x, y: b2y },
    { x: b3x, y: b3y },
  ];

  // Magnetic CTA button
  const btnRef = useRef(null);
  const btnX   = useMotionValue(0);
  const btnY   = useMotionValue(0);
  const btnSX  = useSpring(btnX, { stiffness: 240, damping: 22 });
  const btnSY  = useSpring(btnY, { stiffness: 240, damping: 22 });

  // All window calls are inside useEffect — SSR safe
  useEffect(() => {
    setIsReady(true);

    const onMove = (e) => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);

      if (btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const dx   = e.clientX - (rect.left + rect.width  / 2);
        const dy   = e.clientY - (rect.top  + rect.height / 2);
        const dist = Math.hypot(dx, dy);
        if (dist < 80) {
          btnX.set(dx * 0.42);
          btnY.set(dy * 0.42);
        } else {
          btnX.set(0);
          btnY.set(0);
        }
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []); // MotionValues are stable refs — safe to omit from deps

  const randomColor  = () => BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
  const scrollToWork = () => {
    setView('work');
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <HeroWrapper>

      {/* Abstract mouse-reactive gradient background */}
      <GradientCanvas>
        {BLOBS.map((blob, i) => (
          <motion.div
            key={blob.id}
            style={{
              position: 'absolute',
              left: blob.left,
              top: blob.top,
              x: blobMotions[i].x,  // mouse parallax (outer layer)
              y: blobMotions[i].y,
              pointerEvents: 'none',
            }}
          >
            {/* Inner layer handles idle organic drift — cleanly separated from parallax */}
            <motion.div
              animate={{ x: blob.drift.x, y: blob.drift.y }}
              transition={{
                duration: blob.duration,
                delay: blob.delay,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <BlobShape $color={blob.color} $size={blob.size} />
            </motion.div>
          </motion.div>
        ))}
      </GradientCanvas>

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
                  whileHover={{
                    y: -10,
                    scale: 1.07,
                    transition: { type: 'spring', stiffness: 400, damping: 14 },
                  }}
                  onMouseEnter={() => setHoverColors(c => ({ ...c, [key]: randomColor() }))}
                  onMouseLeave={() => setHoverColors(c => ({ ...c, [key]: null }))}
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
                  whileHover={{
                    y: -10,
                    scale: 1.07,
                    transition: { type: 'spring', stiffness: 400, damping: 14 },
                  }}
                  onMouseEnter={() => setHoverColors(c => ({ ...c, [key]: randomColor() }))}
                  onMouseLeave={() => setHoverColors(c => ({ ...c, [key]: null }))}
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
          <SubText>Senior Frontend Engineer &amp; Product Designer</SubText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.08, duration: 0.55, ease: 'easeOut' }}
        >
          <CtaRow>
            <motion.div ref={btnRef} style={{ x: btnSX, y: btnSY }}>
              <CtaButton onClick={scrollToWork}>
                Discover the work →
              </CtaButton>
            </motion.div>
          </CtaRow>
        </motion.div>

      </ContentArea>

      {/* Scroll indicator */}
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : {}}
        transition={{ delay: 1.55, duration: 0.8 }}
      >
        <ScrollLine />
        <ScrollText>Scroll to explore</ScrollText>
      </ScrollIndicator>

    </HeroWrapper>
  );
};

export default Home;
