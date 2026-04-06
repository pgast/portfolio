import React, { useState, useEffect, useMemo } from 'react';
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
  ScrollIndicator,
  ScrollLine,
  ScrollText,
} from './styled';

// ─── Constants ────────────────────────────────────────────────────────────────

const PABLO    = ['P','A','B','L','O'];
const GASTELUM = ['G','A','S','T','E','L','U','M'];
const TOTAL_LETTERS = PABLO.length + GASTELUM.length; // 13

const BRAND_COLORS = ['#ff1f25', '#ffdd18', '#005cef'];

// Each blob has a `channel` that maps to a brand color.
// Their rgba colors are vivid — opacity is controlled by the animated wrapper,
// not the color itself, so the gradient stays rich when revealed.
const BLOBS = [
  {
    id: 'b0',
    channel: 'blue',
    color: 'rgba(0, 92, 239, 0.55)',
    size: 1200,
    left: '-18%', top: '-28%',
    depth: 0.022,
    drift: { x: [0, 55, 0], y: [0, 65, 0] },
    duration: 14, delay: 0,
  },
  {
    id: 'b1',
    channel: 'yellow',
    color: 'rgba(255, 221, 24, 0.50)',
    size: 1000,
    left: '55%', top: '40%',
    depth: 0.016,
    drift: { x: [0, -45, 0], y: [0, -55, 0] },
    duration: 11, delay: 1.5,
  },
  {
    id: 'b2',
    channel: 'red',
    color: 'rgba(255, 31, 37, 0.48)',
    size: 760,
    left: '78%', top: '-20%',
    depth: 0.036,
    drift: { x: [0, -30, 0], y: [0, 75, 0] },
    duration: 9, delay: 0.8,
  },
  {
    id: 'b3',
    channel: 'blue',
    color: 'rgba(0, 40, 180, 0.42)',
    size: 950,
    left: '22%', top: '65%',
    depth: 0.011,
    drift: { x: [0, 48, 0], y: [0, -36, 0] },
    duration: 16, delay: 2.2,
  },
  {
    id: 'b4',
    channel: 'red',
    color: 'rgba(255, 31, 37, 0.35)',
    size: 800,
    left: '62%', top: '8%',
    depth: 0.028,
    drift: { x: [0, -38, 0], y: [0, 50, 0] },
    duration: 12, delay: 3.0,
  },
  {
    id: 'b5',
    channel: 'yellow',
    color: 'rgba(255, 200, 0, 0.38)',
    size: 680,
    left: '-5%', top: '58%',
    depth: 0.019,
    drift: { x: [0, 32, 0], y: [0, -42, 0] },
    duration: 13, delay: 1.0,
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Maps a hex brand color string to its channel key
const hexToChannel = (hex) => {
  if (hex === '#ff1f25') return 'red';
  if (hex === '#ffdd18') return 'yellow';
  if (hex === '#005cef') return 'blue';
  return null;
};

// Dormant opacity — barely perceptible at page load
const BASE_OPACITY = 0.06;

// ─── Component ────────────────────────────────────────────────────────────────

const Home = ({ setView }) => {
  const [isReady, setIsReady]         = useState(false);
  const [hoverColors, setHoverColors] = useState({});

  // Mouse position → springs for smooth parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 36, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 36, damping: 22 });

  // 6 blobs × 2 axes — all top-level per rules of hooks
  const b0x = useTransform(springX, v => v * BLOBS[0].depth);
  const b0y = useTransform(springY, v => v * BLOBS[0].depth);
  const b1x = useTransform(springX, v => v * BLOBS[1].depth);
  const b1y = useTransform(springY, v => v * BLOBS[1].depth);
  const b2x = useTransform(springX, v => v * BLOBS[2].depth);
  const b2y = useTransform(springY, v => v * BLOBS[2].depth);
  const b3x = useTransform(springX, v => v * BLOBS[3].depth);
  const b3y = useTransform(springY, v => v * BLOBS[3].depth);
  const b4x = useTransform(springX, v => v * BLOBS[4].depth);
  const b4y = useTransform(springY, v => v * BLOBS[4].depth);
  const b5x = useTransform(springX, v => v * BLOBS[5].depth);
  const b5y = useTransform(springY, v => v * BLOBS[5].depth);

  const blobMotions = [
    { x: b0x, y: b0y },
    { x: b1x, y: b1y },
    { x: b2x, y: b2y },
    { x: b3x, y: b3y },
    { x: b4x, y: b4y },
    { x: b5x, y: b5y },
  ];

  useEffect(() => {
    setIsReady(true);
    const onMove = (e) => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // ─── Reactive color distribution ────────────────────────────────────────────
  // Computes the fraction of letters assigned to each brand color (0 → 1).
  // Blobs use this to determine how brightly they should glow.
  const colorDist = useMemo(() => {
    const dist = { red: 0, yellow: 0, blue: 0 };
    Object.values(hoverColors).forEach(hex => {
      const ch = hexToChannel(hex);
      if (ch) dist[ch] += 1 / TOTAL_LETTERS;
    });
    return dist;
  }, [hoverColors]);

  // Each blob's rendered opacity:
  //   dormant at BASE_OPACITY, scales up linearly as its channel fills up.
  //   At 100% of one color → that channel's blobs hit full opacity (1.0).
  const blobOpacity = (channel) =>
    BASE_OPACITY + colorDist[channel] * (1 - BASE_OPACITY);

  const randomColor = () => BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <HeroWrapper>

      {/* Reactive gradient background — dormant until letters are colored */}
      <GradientCanvas>
        {BLOBS.map((blob, i) => (
          <motion.div
            key={blob.id}
            animate={{ opacity: blobOpacity(blob.channel) }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: blob.left,
              top: blob.top,
              x: blobMotions[i].x,
              y: blobMotions[i].y,
              pointerEvents: 'none',
            }}
          >
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
          <SubText>Senior Frontend Engineer &amp; Product Designer</SubText>
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
