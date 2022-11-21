import styled from 'styled-components';
import myImage from "../../assets/myphoto.jpg";

import {
  fadeInBottom
} from '../../constants/animations'

export const Container = styled.div`
  width: 1200px;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  margin-top: 100px;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 750px) {
    margin: 0rem;
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: fit-content;
  }
`

export const List = styled.ul`
  list-style-type: none;
  margin-bottom: ${({ $marginBottom }) => $marginBottom };
`

export const SkillTechList = styled(List)`
  margin-right: '3rem';

  @media screen and (max-width: 1200px) {
    margin-right: '1.3rem';
  }

  @media screen and (max-width: 750px) {
    margin-right: ${({ $isLast }) => $isLast ? 0 : '1.5rem'};
  }
`

export const Section = styled.div`
  border-left: ${({ theme }) => `2px solid ${theme.colors.yellow}`};
  padding-left: 0.5rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const Main = styled.div`
  width: 400px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  margin-top: 2rem;
  align-self: flex-start;
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  @media screen and (max-width: 1200px) {
    left: 50%;
    margin-left: -33vw;
    margin-top: -5rem;
    width: 33vw;
    height: 100%;
  }

  @media screen and (max-width: 750px) {
    position: static;
    height: fit-content;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 100%;
    margin-left: 0rem;
    margin-top: 0rem;
    left: 13rem;
  }
`

export const ScrollArea = styled.div`
  padding-right: 5rem;
  width: 48%;
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 888px) {
    padding-right: 0rem;
  }

  @media screen and (max-width: 750px) {
    margin-top: 3rem;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 100%;
  }
`

export const Skills = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`
