import styled from 'styled-components'

import { Button } from '../About/styled'

export const SideDrawerContainer = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.yellow};
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  z-index: 200;
  box-shadow: 1px 0px 7px rgba(0,0,0,0.5); 
  transition: transform 0.3s ease-out;
  transform: ${({ show }) => show ? "translateX(0)" : "translateX(100%)"};
  display: flex;
  flex-direction: row-reverse;
  padding-right: calc((100vw - 1200px) / 2);
`

export const Backdrop = styled.div`
  display: ${({ show }) => show ? 'block' : 'none'};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;
  top: 0;
  right: 0;
`

export const Title = styled.h1`
  font-size: 2rem;
  margin: 50px 0px 50px 52px;
`

export const Links = styled.div`
  margin-left: 52px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContactEmail = styled.h2`
  font-size: 1.3rem;
  margin: 50px 0px 100px 52px;

  @media screen and (max-width: 970px) {
    font-size: 0.9rem;
  }

  &:hover {
    color: white;
  }
`

export const CloseButton = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
  }
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CloseIcon = styled.i`
  font-size: 22px;
`

export const LinkButton = styled(Button)`
  background: black;
  width: fit-content;
  display: flex;
  align-items: center;
  color: white;

  & > a {
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  & > i {
    margin-left: 11px;
  }
`
