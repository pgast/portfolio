import styled, { css } from 'styled-components';

import { fadeInBottom, projectHover, btnPop, showInfo } from '../../constants/animations';

export const Container = styled.div`
  margin-top: 3.4rem;
  width: 1200px;
  max-width: 1200px;
  display: flex;
  justify-content: space-evenly;
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  @media screen and (max-width: 1025px) {
    margin-right: 0rem;
    margin-left: 0rem;
  }

  @media screen and (max-width: 716px) {
    margin: 0rem;
    margin-top: 4rem;
    justify-content: center;
    flex-direction: column;
  }
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 716px) {
    flex-direction: column;
    height: auto;
  }
`

const projectAnimation = css`
  animation: ${projectHover} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const Project = styled.div`
  border-left: ${({ theme, $isSelected }) => `3px solid ${$isSelected ? theme.colors.green : theme.colors.yellow}`};
  padding-left: 0.5rem;
  width: 15rem;
  height: ${({ $isSelected }) => $isSelected ? 'auto' : '4rem'};
  cursor: default;
  transform: ${({ $isSelected }) => $isSelected ? "translateZ(20px) translateY(-6px)" : "none"};
  
  &:hover > h3 {
    color: ${({ theme }) => theme.colors.green};
  }
  
  &:hover {
    -webkit-animation: ${projectHover} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${({ $isSelected }) => $isSelected ? 'none' : projectAnimation};
    border-left: ${({ theme }) => `3px solid ${theme.colors.green}`};
    cursor: none;
  }

  @media screen and (max-width: 1025px) {
    width: 11rem;
  }

  @media screen and (max-width: 716px) {
    height: auto;
    margin: 1.5rem;
  }
`

export const ProjectTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme, $isSelected }) => $isSelected ? theme.colors.green : theme.colors.yellow};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;

  @media screen and (max-width: 1025px) {
    font-size: 0.7rem;
    text-align: justify;
  }
`

export const ProjectInfo = styled.div`
  -webkit-animation: ${showInfo} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: ${showInfo} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`

export const ProjectStack = styled.div`
  font-size: 0.6rem;
  display: flex;
  margin: 1rem 0;
  justify-content: flex-start;

  @media screen and (max-width: 1025px) {
    font-size: 0.5rem;
    margin: 1rem 0;
  }

  @media screen and (max-width: 716px) {
    flex-wrap: wrap;    
  }
`

export const StackTitle = styled.h3`
  margin-right: 1.3rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.yellow};

  @media screen and (max-width: 1025px) {
    margin-right: 1rem;
  }
`

export const ProjectBtnRow = styled.div`
  display: flex;
  margin-top: 2rem;
`

export const Button = styled.div.attrs(props => ({
  id: 'btn'
}))`
  border-radius: 1rem; 
  background: ${({ theme }) => theme.colors.yellow};
  font-size: 0.55rem;
  padding:  0.4rem 0.7rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 0.6rem;

  &:hover {
    -webkit-animation: ${btnPop} 0.2s ease-in-out alternate both;
    animation: ${btnPop} 0.2s ease-in-out alternate both;
    cursor: none;
  }

  @media screen and (max-width: 1025px) {
    font-size: 0.45rem;
  }
`
