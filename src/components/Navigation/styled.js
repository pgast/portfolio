import styled from 'styled-components'

import { LinkButton, ContactEmail } from '../SideDrawer/styled'

import {
  shadowDrop,
  menuEntrance
} from '../../constants/animations'

export const Container = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 2;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 480px) {
    border-bottom: none;
    background: none;
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
  line-height: 0.9rem;
  overflow: hidden;
  height: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};

  @media screen and (max-width: 480px) {
    top: 2rem;
    left: 2rem;
    z-index: 888;
  }

  &:hover {
    -webkit-animation: ${shadowDrop} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${shadowDrop} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    color: ${({ theme }) => theme.colors.red};
  }
`

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`

export const NavLink = styled.h5`
  color: ${({ theme, $isSelected }) => $isSelected ? theme.colors.blue : theme.colors.black};

  &:hover {
    -webkit-animation: ${shadowDrop} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${shadowDrop} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    color: ${({ theme }) => theme.colors.red};
  }
`

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: ${({ $isVisible = true }) => $isVisible ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 888;
    font-size: 100px;
    background: ${({ theme }) => theme.colors.yellow};
    -webkit-animation: ${menuEntrance} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${menuEntrance} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    & > a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

export const MobileMenuSectionLinks = styled.div`
  display: ${({ $isVisible = true }) => $isVisible ? 'flex' : 'none'};
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
