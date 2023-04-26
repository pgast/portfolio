import styled from 'styled-components'

import {
  shadowDrop,
  menuEntrance
} from '../../constants/animations'

export const Container = styled.div`
  border-bottom: 1px solid white;
  height: 70px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 2;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 480px) {
    border-bottom: none;
    background: none;
  }
`

export const DesktopNavbar = styled.div`
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
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 480px) {
    top: 2rem;
    left: 2rem;
    z-index: 888;
  }

  &:hover {
    -webkit-animation: ${shadowDrop} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${shadowDrop} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    color: ${({ theme }) => theme.colors.yellow};
  }
`

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`

export const NavLink = styled.h5`
  color: ${({ theme, $isSelected }) => $isSelected ? theme.colors.green : theme.colors.white};

  &:hover {
    -webkit-animation: ${shadowDrop} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${shadowDrop} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    color: ${({ theme }) => theme.colors.yellow};
  }
`

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: ${({ $isVisible }) => $isVisible ? 'flex' : 'none'};
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
  display: ${({ $isVisible }) => $isVisible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 80%;

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    font-size: 100px;
    padding: 1rem 0;
    padding-left: 0.8rem;
    border-bottom: 1px solid black;
  }
`

export const MobileMenuContactLinks = styled.div`
  font-size: 44px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20%;
`

export const MobileMenuIcon = styled.i`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: fixed;
    top: 2.6rem;
    right: 2rem;
    z-index: 890;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.white};  
  }
`

export const ContactIcon = styled.i``

export const LinkedInIcon = styled(ContactIcon)`
  margin-right: 1rem;
`
