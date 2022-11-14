import styled, { keyframes } from 'styled-components'

const shadowDrop = keyframes`
  from {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
  }
  to {
    -webkit-transform: translateZ(20px) translateY(-3px);
    transform: translateZ(20px) translateY(-3px);
  }
`

const menuEntrance = keyframes`
  from {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
`

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
    justify-content: flex-start;
    padding-top: 8rem;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 888;
    background: ${({ theme }) => theme.colors.yellow};
    -webkit-animation: ${menuEntrance} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${menuEntrance} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    & > a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

export const MobileMenuSectionLinks = styled.div`
  & > p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`

export const MobileMenuContactLinks = styled.div`
  position: fixed;
  bottom: 6rem;
  font-size: 1.7rem;
  display: flex;
  justify-content: space-between;
  width: 6rem;
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
