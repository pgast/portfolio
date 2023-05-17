import styled, { css } from 'styled-components';

import { fadeInBottom, projectHover, btnPopWork, showInfo } from '../../constants/animations';

export const ProjectTitle = styled.h3`
  font-size: 0.95rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.blue};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.8rem;

  @media screen and (max-width: 1025px) {
    font-size: 0.7rem;
    text-align: justify;
  }
`

export const ProjectStack = styled.div`
  font-size: 0.6rem;
  display: none;
  flex-direction: column;
  margin-top: 33px;
  justify-content: flex-start;

  @media screen and (max-width: 1025px) {
    font-size: 0.5rem;
    margin: 1rem 0;
  }

  @media screen and (max-width: 716px) {
    flex-wrap: wrap;    
  }
`


export const ProjectInfo = styled.div`
  display: none;
  -webkit-animation: ${showInfo} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: ${showInfo} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`

export const StackTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: light;

  @media screen and (max-width: 1025px) {
    margin-right: 1rem;
  }
`

export const Header = styled.div``

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 6px 0;
  background: ${({ theme }) => theme.colors.gray};
  transition: all 0.2s ease;
  height: 100%;
  width: 100%;
  padding: 20px;
  overflow: hidden;

  :hover ${ProjectStack} {
    display: flex;
  }

  :hover ${StackTitle} {
    color: ${({ color, theme }) => color === 'blue' ? theme.colors.darkBlue : theme.colors.darkYellow};
  }

  :hover ${ProjectInfo} {
    display: flex;
  }

  :hover ${ProjectTitle} {
    color: ${({ color, theme }) => color === 'blue' ? theme.colors.darkBlue : theme.colors.darkYellow};
  }

  :hover ${Description} {
    color: ${({ color, theme }) => color === 'blue' ? theme.colors.white : theme.colors.black};
  }

  :hover {
    background: ${({ theme, color }) => theme.colors[color]};
  }
`



export const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  transition: all 0.2s ease;
`

export const Container = styled.div`
display: flex;
padding-top: 30px;
padding-bottom: 30px;
margin-top: 3.4rem;
width: 1200px;
max-width: 1200px;
justify-content: space-evenly;
-webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

& > div:nth-child(2) {
  margin: 0 12px;
}

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

// export const ProjectsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;

//   @media screen and (max-width: 716px) {
//     flex-direction: column;
//     height: auto;
//   }
// `

// const projectAnimation = css`
//   animation: ${projectHover} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
// `

// export const Project = styled.div`
//   border-left: ${({ theme, $isSelected }) => `3px solid ${$isSelected ? theme.colors.blue : theme.colors.black}`};
//   padding-left: 0.5rem;
//   width: 15.5rem;
//   height: ${({ $isSelected }) => $isSelected ? 'auto' : '4rem'};
//   cursor: default;
//   transform: ${({ $isSelected }) => $isSelected ? "translateZ(20px) translateY(-6px)" : "none"};
  
//   &:hover > h4 {
//     color: ${({ theme }) => theme.colors.red};
//   }
  
//   &:hover {
//     -webkit-animation: ${projectHover} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
//     animation: ${({ $isSelected }) => $isSelected ? 'none' : projectAnimation};
//     border-left: ${({ theme }) => `3px solid ${theme.colors.red}`};
//     cursor: none;
//   }

//   @media screen and (max-width: 1025px) {
//     width: 11rem;
//   }

//   @media screen and (max-width: 716px) {
//     height: auto;
//     margin: 1.5rem;
//   }
// `

export const Button = styled.div.attrs(props => ({
  id: 'btn'
}))`
  border-radius: 1rem; 
  background: ${({ theme, $background }) => theme.colors[$background]};
  font-size: 0.55rem;
  padding:  0.4rem 0.7rem;
  cursor: pointer;
  color: ${({ theme, $color = 'black' }) => theme.colors[$color]};
  margin-right: 0.6rem;

  &:hover {
    -webkit-animation: ${btnPopWork} 0.2s ease-in-out alternate both;
    animation: ${btnPopWork} 0.2s ease-in-out alternate both;
    cursor: none;
  }

  @media screen and (max-width: 1025px) {
    font-size: 0.45rem;
  }
`
