import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactRight = styled.div`
  flex: 1;
  padding-top: 100px;
  padding-bottom: 80px;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 900px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

export const GetInTouchLabel = styled.p`
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 20px;
`;

export const EmailDisplay = styled.a`
  display: block;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 4.2vw, 3.6rem);
  color: #005cef;
  text-decoration: none;
  line-height: 0.95;
  letter-spacing: 0.02em;
  word-break: break-all;
  cursor: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 3px;
    background: #ffdd18;
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }
`;

export const YellowRule = styled.div`
  width: 48px;
  height: 3px;
  background: #ffdd18;
  margin: 48px 0;
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
  border-top: 1px solid #e8e8e8;
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
    background: #ffdd18;
    transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  &:hover::before {
    width: 4px;
  }

  &:last-child {
    border-bottom: 1px solid #e8e8e8;
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
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ccc;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
`;

export const LinkName = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #111;
  transition: color 0.2s ease;

  ${LinkRow}:hover & {
    color: #005cef;
  }
`;

export const LinkArrow = styled.span`
  font-size: 1rem;
  color: #ccc;
  position: relative;
  z-index: 1;
  transition: transform 0.2s ease, color 0.2s ease;
  line-height: 1;

  ${LinkRow}:hover & {
    transform: translate(3px, -3px);
    color: #005cef;
  }
`;
