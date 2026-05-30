import styled from 'styled-components';
import { motion } from 'framer-motion';

// ─── Hero wall ────────────────────────────────────────────────────────────────

export const HeroWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.electricBlue};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  /* Deep blue diagonal shadow panel — Barragán's adjacent color wall */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 36%;
    height: 100%;
    background: ${({ theme }) => theme.colors.deepBlue};
    clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%);
    pointer-events: none;
    z-index: 0;
  }
`;

// ─── Content ─────────────────────────────────────────────────────────────────

export const HeroContent = styled(motion.div)`
  flex: 1;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px clamp(24px, 6.5vw, 88px) 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 0;
`;

export const IndexTag = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: rgba(255, 255, 255, 0.28);
  margin-bottom: 24px;
`;

export const HeroHeadline = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(64px, 10vw, 96px);
  line-height: 0.9;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(52px, 14vw, 72px);
  }
`;

export const HeadlineAccent = styled.span`
  color: ${({ theme }) => theme.colors.signalRed};
`;

// ─── Bottom row ───────────────────────────────────────────────────────────────

export const HeroBottom = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 6.5vw, 88px);
  padding-top: 1.2rem;
  padding-bottom: 52px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.1);
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const BottomLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.3);
`;

export const ViewWorkBtn = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  padding: 11px 20px;
  cursor: none;
  white-space: nowrap;
  transition: background 0.18s ease, border-color 0.18s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.7);
  }
`;
