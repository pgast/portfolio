import styled from 'styled-components';
import { motion } from 'framer-motion';

// ─── Poster header ─────────────────────────────────────────────────────────

export const PosterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StickyHeader = styled(motion.div)`
  position: sticky;
  top: 64px;
  z-index: 5;
  width: 100%;
  background: #ffffff;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.signalRed};
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 24px clamp(24px, 6.5vw, 88px);
`;

export const BigName = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(56px, 11vw, 160px);
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  white-space: nowrap;
`;

export const NameAccent = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
`;

// ─── Body layout ───────────────────────────────────────────────────────────

export const PosterBody = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px clamp(24px, 6.5vw, 88px) 100px;
  gap: 80px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const LeftColumn = styled.div`
  position: sticky;
  top: 128px;
  width: 240px;
  flex-shrink: 0;

  @media screen and (max-width: 900px) {
    position: static;
    width: 100%;
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  }
`;

export const LeftLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 20px;
`;

export const Bio = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 300;
  font-size: 15px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 28px;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.void};
  border: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  padding: 8px 14px;
  text-decoration: none;
  white-space: nowrap;
  cursor: none;
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.electricBlue};
    color: ${({ theme }) => theme.colors.electricBlue};
    text-decoration: none;
  }
`;

// ─── Right column ──────────────────────────────────────────────────────────

export const RightColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Block = styled(motion.div)`
  padding: 36px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};

  &:first-child { padding-top: 0; }
  &:last-child  { border-bottom: none; }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1 !important;
    transform: none !important;
  }
`;

export const BlockLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 24px;
`;

// ─── Job entries ───────────────────────────────────────────────────────────

export const JobRow = styled.div`
  margin-bottom: 32px;
  &:last-child { margin-bottom: 0; }
`;

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const JobTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(22px, 2.6vw, 32px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  line-height: 1;
`;

export const JobCompanyAccent = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
`;

export const JobDuration = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
  white-space: nowrap;
`;

export const JobBullets = styled.ul`
  padding-left: 0;
  margin: 0;

  & li {
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    font-size: 14px;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 16px;
    position: relative;

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.borderLight};
    }
  }
`;

// ─── Tech / skill chips ────────────────────────────────────────────────────

export const ChipCategory = styled.div`
  margin-bottom: 24px;
  &:last-child { margin-bottom: 0; }
`;

export const ChipCategoryLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 12px;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Chip = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.electricBlue};
  color: ${({ theme }) => theme.colors.white};
  cursor: default;
  line-height: 1;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.deepBlue};
  }
`;

// ─── Education & awards ────────────────────────────────────────────────────

export const EducationSchool = styled.div`
  margin-bottom: 20px;

  & p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & p:first-child {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 20px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.electricBlue};
    line-height: 1;
    margin-bottom: 6px;
  }
`;

export const CertTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 12px;
  margin-top: 20px;
`;

export const CertList = styled.ul`
  padding-left: 0;
  margin: 0;

  & li {
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    font-size: 14px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 16px;
    position: relative;
    margin-bottom: 4px;

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.borderLight};
    }

    & a {
      color: ${({ theme }) => theme.colors.electricBlue};
      text-decoration: none;
      &:hover { text-decoration: underline; }
    }
  }
`;

export const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 40px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const AwardEntry = styled.div`
  margin-bottom: 20px;
  padding-left: 16px;
  border-left: 1.5px solid ${({ theme }) => theme.colors.borderLight};

  &:last-child { margin-bottom: 0; }

  & p:first-child {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.void};
    margin-bottom: 4px;
    line-height: 1;
  }

  & p:last-child {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-weight: 300;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.muted};
  }
`;
