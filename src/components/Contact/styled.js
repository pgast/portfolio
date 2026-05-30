import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactRight = styled.div`
  flex: 1;
  padding-top: 100px;
  padding-bottom: 80px;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 900px) {
    padding-top: 40px;
    padding-bottom: 60px;
    min-height: auto;
  }
`;

export const GetInTouchLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 20px;
`;

export const EmailDisplay = styled.a`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(28px, 4vw, 48px);
  color: ${({ theme }) => theme.colors.electricBlue};
  text-decoration: none;
  line-height: 0.95;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  word-break: break-all;
  cursor: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.signalRed};
    transition: width 0.3s ease;
  }

  &:hover::after { width: 100%; }
`;

export const SignalRule = styled.div`
  width: 32px;
  height: 2px;
  background: ${({ theme }) => theme.colors.signalRed};
  margin: 40px 0;
  flex-shrink: 0;
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkRow = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  border-top: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  text-decoration: none;
  cursor: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: ${({ theme }) => theme.colors.signalRed};
    transition: width 0.2s ease;
    z-index: 0;
  }

  &:hover::before { width: 2px; }

  &:last-child {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  }
`;

export const LinkLeft = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  position: relative;
  z-index: 1;
`;

export const LinkIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.muted};
  flex-shrink: 0;
`;

export const LinkName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.void};
  transition: color 0.18s ease;
  line-height: 1;

  ${LinkRow}:hover & {
    color: ${({ theme }) => theme.colors.electricBlue};
  }
`;

export const LinkArrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.borderLight};
  position: relative;
  z-index: 1;
  transition: transform 0.18s ease, color 0.18s ease;

  ${LinkRow}:hover & {
    transform: translate(3px, -3px);
    color: ${({ theme }) => theme.colors.electricBlue};
  }
`;
