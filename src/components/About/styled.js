import styled, { keyframes } from 'styled-components';
import myImage from "../../assets/myphoto.jpg";

const fadeInBottom = keyframes`
  from {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 1200px;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  margin-top: 100px;

  & > ul {
    list-style-type: none;
  }

  & > li {
    text-align: justify;
    font-size: 0.7rem;
    color: white;
    text-decoration: none!important;
  }

  & > p {
    font-size: 0.7rem;
    color: white;
    text-decoration: none!important;
  }

  & > li > a:hover {
    color: ${({ theme }) => theme.colors.yellow};
    font-weight: bold;
  }

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

  & > p {
    text-align: justify;
  }

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

export const Photo = styled.div`
  width: 9rem;
  height: 9rem;
  margin-bottom: 2.3rem;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.black};
  background-image: url(${myImage});
  background-position: 50% 0%;
  background-size: 120%;
`

export const MainDescription = styled.div`
  & > div:first-of-type > h3 {
    margin-bottom: 0.3rem;
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 0.95rem;
  }

  & > div:first-of-type > p:last-of-type {
    margin-top: 1rem;
  }
  
  & > h3 {
    font-size: 0.95rem;
  }


  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 750px) {
    margin-right: 1rem;
    margin-left: 1rem;
    text-align: center;
    width: 50vw;
  }

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`

export const Section = styled.div`
  border-left: ${({ theme }) => `2px solid ${theme.colors.yellow}`};
  padding-left: 0.5rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & > h3 {
    color: ${({ theme }) => theme.colors.yellow};
  }

  & > h3:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  & > div {
    display: flex;
    flex-direction: column;
  }
`

export const Experience = styled(Section)`
  & > div > div:last-of-type ul {
    margin-bottom: 0;
  }
`

export const ExperienceList = styled.ul`
  margin-bottom: 2rem;
`

export const Scroll = styled.div`
  padding-right: 5rem;
  width: 48%;
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  & > div:last-of-type {
    height: 3rem;
  }

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

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  & > a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 888px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Button = styled.div`

`

export const SkillTech = styled.div`
  display: flex;
  flex-direction: row;

  & > ul {
    margin-right: 3rem;
  }

  @media screen and (max-width: 1200px) {
   & > ul {
    margin-right: 1.3rem;
   }
  }

  @media screen and (max-width: 750px) {
    flex-wrap: wrap;

    & > ul {
      margin-right: 1.5rem;
    }

    & > ul::last-of-type {
      margin-right: 0;
    }
  }
`

export const Awards = styled.div`

`
