import styled from 'styled-components'
import { motion } from 'framer-motion'
import { menuEntrance } from '../../constants/animations'

export const ScrollProgressBar = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  height: 2px;
  width: 0%;
  background: ${({ theme }) => theme.colors.signalRed};
  z-index: 11;
`

export const Container = styled.div`
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: ${({ $isHome, $lightBg }) =>
    $isHome ? 'transparent' : $lightBg ? '#FFFFFF' : '#0A0A0A'};
  border-bottom: 0.5px solid ${({ $isHome, $lightBg }) =>
    $isHome ? 'transparent' : $lightBg ? '#E0E0E0' : 'rgba(255,255,255,0.1)'};
  transition: background 0.3s ease, border-color 0.25s ease;

  @media screen and (max-width: 480px) {
    background: transparent;
    border-bottom: none;
  }
`

export const DesktopNavbar = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  max-width: 1200px;
  padding: 0 clamp(24px, 6.5vw, 88px);

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const LogoCircle = styled(motion.div)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ $lightBg }) => $lightBg ? '#0026CC' : '#ffffff'};
  flex-shrink: 0;
  transition: background 0.3s ease;
`

export const NavLogo = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 22px;
  line-height: 1;
  letter-spacing: 0.06em;
  color: ${({ $lightBg }) => $lightBg ? '#0026CC' : '#ffffff'};
  cursor: none;
  white-space: nowrap;
  transition: color 0.3s ease;
`

export const AccentDot = styled.span`
  color: ${({ theme }) => theme.colors.signalRed};
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const NavLink = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ $isSelected, $lightBg }) =>
    $lightBg
      ? ($isSelected ? '#0A0A0A' : 'rgba(10,10,10,0.45)')
      : ($isSelected ? '#ffffff' : 'rgba(255,255,255,0.5)')};
  cursor: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ $lightBg }) => $lightBg ? '#0A0A0A' : '#ffffff'};
  }
`

export const MobileMenuIcon = styled.i`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: fixed;
    top: 1.4rem;
    right: 1.5rem;
    z-index: 890;
    font-size: 1.1rem;
    color: #ffffff;
  }
`

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 888;
    background: #0026CC;
    padding: 0 32px 60px;
    -webkit-animation: ${menuEntrance} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${menuEntrance} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`

export const MobileMenuSectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0;

  & a { text-decoration: none; }

  & p {
    font-family: ${({ theme }) => theme.fonts.display};
    color: rgba(255,255,255,0.9);
    font-size: 52px;
    letter-spacing: 0.04em;
    padding: 10px 0;
    border-bottom: 0.5px solid rgba(255,255,255,0.12);
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 0;
`

export const EmailLink = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono} !important;
  font-weight: 300 !important;
  font-size: 12px !important;
  letter-spacing: 0.04em !important;
  border-bottom: none !important;
  color: rgba(255,255,255,0.6) !important;
`

export const ContactLink = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.5);

  & a { color: inherit; text-decoration: none; }
`
