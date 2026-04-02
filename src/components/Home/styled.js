import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// ─── Keyframes ────────────────────────────────────────────────────────────────

// Glow scans down the scroll line, pauses at each end
const scanDown = keyframes`
  0%   { top: -22px; opacity: 0; }
  8%   { top: -22px; opacity: 0; }
  18%  { top: -22px; opacity: 1; }
  68%  { top: 62px;  opacity: 1; }
  78%  { top: 62px;  opacity: 0; }
  100% { top: 62px;  opacity: 0; }
`;

// ─── Layout ───────────────────────────────────────────────────────────────────

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #ffffff;
`;

// Clipping layer so blobs never create scrollbars
export const GradientCanvas = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

// Individual gradient blob
export const BlobShape = styled.div`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  /*
   * Radial gradient fades from the blob color to transparent.
   * Using rgba transparent avoids the grey-banding artifact that
   * occurs when interpolating from a colour to the CSS 'transparent'
   * keyword in some browsers.
   */
  background: radial-gradient(
    ellipse at center,
    ${({ $color }) => $color} 0%,
    ${({ $color }) => $color.replace(/[\d.]+\)$/, '0)')} 68%
  );
  /* Centered on its anchor point */
  transform: translate(-50%, -50%);
  will-change: transform;
`;

// ─── Content ──────────────────────────────────────────────────────────────────

export const ContentArea = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 0 clamp(24px, 6.5vw, 88px);

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 0 24px;
  }
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;

export const NameRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  line-height: 0.88;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// Each letter is a framer-motion span — variants, custom, whileHover all pass through
export const Letter = styled(motion.span)`
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 900;
  font-size: clamp(50px, 10.8vw, 148px);
  line-height: 0.9;
  letter-spacing: -0.025em;
  cursor: default;
  transition: color 0.1s ease;
  color: ${({ $hoverColor }) => $hoverColor || '#005cef'};

  @media (max-width: 480px) {
    font-size: clamp(38px, 9.5vw, 52px);
  }
`;

// ─── Subtitle ─────────────────────────────────────────────────────────────────

export const SubText = styled.p`
  font-size: clamp(0.55rem, 1.3vw, 0.8rem);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #999999;
  margin-bottom: 36px;
`;

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const CtaRow = styled.div`
  display: flex;
`;

export const CtaButton = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 1rem 2.4rem;
  border-radius: 2rem;
  cursor: none;
  color: #ffffff;
  background: #005cef;
  border: 1.5px solid #005cef;
  box-shadow: 0 8px 28px rgba(0, 92, 239, 0.22);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 14px 36px rgba(0, 92, 239, 0.32);
  }
`;

// ─── Scroll Indicator ─────────────────────────────────────────────────────────

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  pointer-events: none;
  z-index: 3;

  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: 60px;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.08);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 22px;
    /* Soft glow fades in and out at edges so it looks like light, not a hard bar */
    background: linear-gradient(to bottom, transparent, #ff1f25 45%, transparent);
    animation: ${scanDown} 2.6s ease-in-out infinite;
  }
`;

export const ScrollText = styled.span`
  font-size: 0.35rem;
  font-weight: 700;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.28);
`;
