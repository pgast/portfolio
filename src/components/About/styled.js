import styled from 'styled-components';
import { motion } from 'framer-motion';

// ─── Layout ───────────────────────────────────────────────────────────────

export const AboutSection = styled.div`
  width: 100%;
`;

export const AboutBody = styled.div`
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

// ─── Left sticky column ──────────────────────────────────────────────────

export const LeftColumn = styled.div`
  position: sticky;
  top: 90px;
  width: 280px;
  flex-shrink: 0;

  @media screen and (max-width: 900px) {
    position: static;
    width: 100%;
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  }
`;

export const AboutTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(40px, 6vw, 64px);
  line-height: 0.92;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  margin-bottom: 24px;
`;

export const TitleAccent = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
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

// ─── Right column ─────────────────────────────────────────────────────────

export const RightColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

// ─── Content blocks ───────────────────────────────────────────────────────

export const ContentBlock = styled.div`
  margin-bottom: 56px;
  &:last-child { margin-bottom: 0; }

  @media (prefers-reduced-motion: reduce) {
    & * {
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;

export const BlockLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 20px;
`;

export const BlockIndex = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
`;

// ─── Work experience rows ─────────────────────────────────────────────────

export const JobRow = styled(motion.div)`
  transform-origin: top;
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: baseline;
  column-gap: 16px;
  padding: 18px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};

  &:first-child { padding-top: 0; }
  &:last-child { border-bottom: none; }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 4px;
  }
`;

export const JobDuration = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.muted};
  white-space: nowrap;
`;

export const JobTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(16px, 1.8vw, 20px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  line-height: 1;
`;

export const JobCompany = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
`;

export const JobBullets = styled.ul`
  grid-column: 2;
  margin: 8px 0 0;
  padding-left: 0;

  @media screen and (max-width: 640px) {
    grid-column: 1;
  }

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

// ─── Tech / skill chips ──────────────────────────────────────────────────

export const TechCategory = styled(motion.div)`
  transform-origin: top;
  margin-bottom: 24px;
  &:last-child { margin-bottom: 0; }
`;

export const TechCategoryLabel = styled.p`
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
  gap: 6px;
`;

export const Chip = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 5px 9px;
  border: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  color: ${({ theme }) => theme.colors.void};
  line-height: 1;
`;

// ─── Education ────────────────────────────────────────────────────────────

export const EduBlock = styled(motion.div)`
  transform-origin: top;
`;

export const SchoolName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(16px, 1.8vw, 20px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.electricBlue};
  line-height: 1;
  margin-bottom: 6px;
`;

export const SchoolMeta = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const CertLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
  margin: 24px 0 12px;
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

// ─── Awards ───────────────────────────────────────────────────────────────

export const AwardRow = styled(motion.div)`
  transform-origin: top;
  display: grid;
  grid-template-columns: 64px 1fr;
  column-gap: 16px;
  padding: 16px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};

  &:first-child { padding-top: 0; }
  &:last-child { border-bottom: none; }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 4px;
  }
`;

export const AwardYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.muted};
  white-space: nowrap;
`;

export const AwardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(16px, 1.8vw, 20px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  line-height: 1.2;
  margin-bottom: 4px;
`;

export const AwardDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 300;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondary};
`;
