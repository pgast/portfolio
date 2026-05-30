import styled from 'styled-components';
import { motion } from 'framer-motion';

// ─── Layout ───────────────────────────────────────────────────────────────────

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

// Band 1 — Signal Blue wall
export const BlueBand = styled.div`
  flex: 1;
  min-height: 56vh;
  background: ${({ theme }) => theme.colors.signalBlue};
  position: relative;
  display: flex;
  align-items: flex-end;
`;

// Deep blue shadow panel — Barragán's adjacent color field
export const ShadowPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 28%;
  height: 100%;
  background: ${({ theme }) => theme.colors.deepBlue};
  pointer-events: none;
`;

export const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(100px, 14vh, 140px) clamp(24px, 6.5vw, 88px) 52px;
`;

// ─── Typography ───────────────────────────────────────────────────────────────

export const IndexTag = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: rgba(255, 255, 255, 0.28);
  margin-bottom: 28px;
`;

export const HeroHeadline = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(52px, 8.5vw, 80px);
  line-height: 0.93;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(44px, 13vw, 60px);
  }
`;

export const HeadlineAccent = styled.span`
  color: ${({ theme }) => theme.colors.terracotta};
`;

// ─── Concreto band ────────────────────────────────────────────────────────────

export const ConcretoBand = styled(motion.div)`
  height: 100px;
  background: ${({ theme }) => theme.colors.concreto};
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 480px) {
    height: 80px;
  }
`;

// ─── White band ───────────────────────────────────────────────────────────────

export const WhiteBand = styled(motion.div)`
  min-height: 110px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 480px) {
    min-height: 100px;
  }
`;

// ─── Band inner layout ────────────────────────────────────────────────────────

export const BandInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 6.5vw, 88px);
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

export const MonoLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ViewWorkBtn = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.signalBlue};
  background: transparent;
  border: 0.5px solid ${({ theme }) => theme.colors.signalBlue};
  padding: 11px 18px;
  cursor: none;
  white-space: nowrap;
  transition: background 0.18s ease, color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.signalBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Descriptor = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 300;
  font-size: 12px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.tertiary};
  max-width: 320px;
`;

export const AvailableStamp = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.terracotta};
  border: 0.5px solid ${({ theme }) => theme.colors.terracotta};
  padding: 9px 16px;
  white-space: nowrap;
`;
