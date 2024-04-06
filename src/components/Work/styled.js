import styled from 'styled-components';

import { fadeInBottom, btnPopWork, showInfo } from '../../constants/animations';

export const ProjectTitle = styled.h5`
  font-size: 0.95rem;
  margin-bottom: 20px;
  color: ${({ theme, $color = 'blue' }) => theme.colors[$color]};
`

export const Title = styled(ProjectTitle)`
  transition: all 0.2s ease;
  margin-bottom: 0;

  :hover {
    color: white!important;
  }
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.7rem;

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
    display: flex;  
  }
`

export const ProjectInfo = styled.div`
  display: none;
  -webkit-animation: ${showInfo} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: ${showInfo} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

  @media screen and (max-width: 716px) {
    display: flex;
  }
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
  margin: 1px 0;
  background: ${({ theme }) => theme.colors.gray};
  transition: all 0.2s ease;
  height: 100%;
  width: 100%;
  padding: 20px;
  overflow: hidden;

  :hover ${Title} {
    font-weight: 600;
    font-size: 1.3rem;
  }

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
    justify-content: ${({ $isProject = true }) => $isProject ? 'space-between' : 'center'};
    align-items: ${({ $isProject = true }) => $isProject ? '' : 'center'};
  }

  @media screen and (max-width: 716px) {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`

export const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  transition: all 0.2s ease;

  & > div:first-child {
    margin-top: 0px;
  }
`

export const Container = styled.div`
display: flex;
padding-bottom: 30px;
margin-top: 70px;
width: 1200px;
max-width: 1200px;
justify-content: space-evenly;
-webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

& > div:nth-child(2) {
  margin: 0 2px;
}

@media screen and (max-width: 1200px) {
  color: red!important;
  width: 80%;
}

@media screen and (max-width: 1025px) {
  margin-right: 0rem;
  margin-left: 0rem;
}

@media screen and (max-width: 716px) {
  margin: 0rem;
  margin-top: 70px;
  justify-content: center;
  flex-direction: column;
  height: fit-content;

  & > div:nth-child(2) {
    margin: 0;
  }
}
`

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

  @media screen and (max-width: 716px) {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`
