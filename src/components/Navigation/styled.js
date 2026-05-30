import styled from 'styled-components'

import { LinkButton, ContactEmail } from '../SideDrawer/styled'
import { menuEntrance } from '../../constants/animations'

export const ScrollProgressBar = styled.div`
  position: fixed;
  top: 67px;
  left: 0;
  height: 3px;
  width: 0%;
  background: ${({ theme }) => theme.colors.red};
  z-index: 11;
`

export const Container = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: ${({ $isHome, theme }) => $isHome ? 'transparent' : theme.colors.white};
  border-bottom: 1px solid ${({ $scrolled, $isHome, theme }) => (!$isHome && $scrolled) ? theme.colors.gray : 'transparent'};
  transition: background 0.4s ease, border-color 0.3s ease;

  @media screen and (max-width: 480px) {
    background: none;
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

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const NavLogo = styled.div`
  font-size: 1.6rem;
  line-height: 1;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`

export const NavLink = styled.h5`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ $isSelected, theme }) => $isSelected ? theme.colors.blue : theme.colors.black};
  position: relative;
  transition: color 0.15s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $isSelected }) => $isSelected ? '100%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
    transition: width 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`

export const ContactButton = styled.div`
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.35rem 0.9rem;
  border-radius: 1rem;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: none;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`

export const MobileMenuIcon = styled.i`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: fixed;
    top: 2.4rem;
    right: 2rem;
    z-index: 890;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 888;
    background: ${({ theme }) => theme.colors.yellow};
    -webkit-animation: ${menuEntrance} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${menuEntrance} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`

export const MobileMenuSectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    font-size: 80px;
    padding: 10px 0;
    padding-left: 33px;
    border-bottom: 1px solid black;
  }
`

export const Contact = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  & p {
    border: none;
  }
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 33px;
`

export const ContactLink = styled(LinkButton)`
  font-size: 16px;
`

export const EmailLink = styled(ContactEmail)`
  margin: 50px 0;
  margin-top: 10px;
  font-size: 25px;
`
