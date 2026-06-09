import styled from 'styled-components';

// ─── Layout (shared with Contact) ─────────────────────────────────────────────

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 0 clamp(24px, 6.5vw, 88px);
  gap: 80px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
`

export const LeftPanel = styled.div`
  position: sticky;
  top: 84px;
  width: 280px;
  flex-shrink: 0;
  padding-top: 100px;
  padding-bottom: 80px;

  @media screen and (max-width: 900px) {
    position: static;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 40px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  }
`

export const RightPanel = styled.div`
  flex: 1;
  padding-top: 100px;
  padding-bottom: 80px;

  & ul { padding-left: 0; }

  & li {
    list-style-type: none;
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    font-size: 15px;
    line-height: 1.8;
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

  & a {
    color: ${({ theme }) => theme.colors.electricBlue};
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  @media screen and (max-width: 900px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`

// ─── Left panel ───────────────────────────────────────────────────────────────

export const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 16px;
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(44px, 6vw, 64px);
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  margin-bottom: 20px;
`

export const PanelTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 40px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.electricBlue};
  line-height: 0.95;
  text-transform: uppercase;
  margin-bottom: 28px;
`

export const Bio = styled.div`
  & p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 1.8;
    margin-bottom: 28px;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

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
`

export const ContactEmailButton = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.electricBlue};
  padding: 10px 18px;
  text-decoration: none;
  cursor: none;
  border: 0.5px solid ${({ theme }) => theme.colors.electricBlue};
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.deepBlue};
    text-decoration: none;
  }
`

// ─── Right panel ──────────────────────────────────────────────────────────────

export const SectionBlock = styled.div`
  padding: 48px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};

  &:first-child { padding-top: 0; }
  &:last-child  { border-bottom: none; }
`

export const JobBlock = styled.div`
  padding-left: 16px;
  border-left: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  margin-bottom: 32px;
  transition: border-color 0.2s ease;

  &:hover { border-left-color: ${({ theme }) => theme.colors.electricBlue}; }
  &:last-child { margin-bottom: 0; }
`

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  gap: 12px;
  flex-wrap: wrap;
`

export const JobTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 18px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  line-height: 1;
`

export const JobDuration = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
  white-space: nowrap;
`

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
    font-size: 18px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.electricBlue};
    line-height: 1;
    margin-bottom: 6px;
  }
`

export const CertTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 12px;
  margin-top: 20px;
`

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const TechCategory = styled.div`
  margin-bottom: 24px;
  &:last-child { margin-bottom: 0; }
`

export const TechCategoryLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 12px;
`

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

export const Tag = styled.span`
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
`

export const AwardBlock = styled.div`
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
`
