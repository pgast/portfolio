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
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
`;

export const EmailDisplay = styled.a`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(24px, 4vw, 44px);
  color: ${({ theme }) => theme.colors.signalBlue};
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
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.terracotta};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }
`;

export const TerracottaRule = styled.div`
  width: 40px;
  height: 2px;
  background: ${({ theme }) => theme.colors.terracotta};
  margin: 44px 0;
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
  border-top: 0.5px solid ${({ theme }) => theme.colors.border};
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
    background: ${({ theme }) => theme.colors.terracotta};
    transition: width 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  &:hover::before {
    width: 3px;
  }

  &:last-child {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
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
  color: ${({ theme }) => theme.colors.secondary};
  flex-shrink: 0;
`;

export const LinkName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.tierra};
  transition: color 0.2s ease;
  line-height: 1;

  ${LinkRow}:hover & {
    color: ${({ theme }) => theme.colors.signalBlue};
  }
`;

export const LinkArrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 1;
  transition: transform 0.2s ease, color 0.2s ease;
  line-height: 1;

  ${LinkRow}:hover & {
    transform: translate(3px, -3px);
    color: ${({ theme }) => theme.colors.signalBlue};
  }
`;
