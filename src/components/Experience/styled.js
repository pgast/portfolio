import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperienceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ExperienceMain = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px clamp(24px, 6.5vw, 88px) 80px;
`;

export const ExperienceLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 56px;
`;

export const JobList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobEntry = styled.div`
  position: relative;
  overflow: hidden;
  padding: 40px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};

  &:first-child {
    border-top: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  }
`;

export const WallOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.electricBlue};
  z-index: 2;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const JobInner = styled(motion.div)`
  position: relative;
  z-index: 1;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1 !important;
    transform: none !important;
  }
`;

export const JobCompany = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(40px, 5.5vw, 60px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  line-height: 0.9;
  margin-bottom: 14px;
`;

export const JobMeta = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const JobRole = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(20px, 2.8vw, 30px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.electricBlue};
  line-height: 1;
`;

export const JobDuration = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
`;

export const JobBullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & li {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 20px;
    position: relative;

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.borderLight};
    }
  }
`;

export const TechBand = styled.div`
  background: ${({ theme }) => theme.colors.void};
  padding: 56px clamp(24px, 6.5vw, 88px);
  width: 100%;
`;

export const TechBandInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TechBandLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #444444;
  margin-bottom: 24px;
`;

export const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TechItem = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.electricBlue};
  line-height: 1.8;

  &::after {
    content: '·';
    margin: 0 10px;
    color: #333333;
  }

  &:last-child::after {
    display: none;
  }
`;
