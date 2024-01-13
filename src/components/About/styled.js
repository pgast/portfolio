import styled from 'styled-components';
import { btnPop } from '../../constants/animations';

export const Container = styled.div`
  width: 1200px;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
  margin-bottom: 36px;
  overflow-y: none;
  font-weight: light;
  background: ${({ theme }) => theme.colors.gray };

  & ul {
    padding-left: 0;
  }

  & li {
    list-style-type: disc;
    list-style-position: inside;
  }

  & li,
  & p {
    font-size: 0.7rem;
    color: black;
  }

  @media screen and (max-width: 1200px) {
    width: 80%;

    & li {
      text-align: justify;
    }
  }

  @media screen and (max-width: 750px) {
    align-items: center;
    height: fit-content;
    flex-direction: column;
    justify-content: start;

    & li {
      text-align: left;
    }
  }
`

export const SideSection = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  justify-content: end;
  padding: 44px;
  flex-direction: column;
  -webkit-animation: fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  background: ${({ theme }) => theme.colors.blue };

  @media screen and (max-width: 750px) { 
    width: 100%;
  }
`

export const Scroll = styled.div`
  max-height: 100%;
  padding-right: 44px;
  padding-left: 44px;
  padding-top: 44px;
  overflow-y: auto;
  width: calc((100% / 3) * 2);
  -webkit-animation: fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  & p:first-of-type {
    font-weight: 600;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`

export const Button = styled.div`
  border-radius: 1rem; 
  background: ${({ theme }) => theme.colors.yellow};
  font-size: 0.55rem;
  padding:  0.4rem 0.7rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    -webkit-animation: ${btnPop} 0.2s ease-in-out alternate both;
    animation: ${btnPop} 0.2s ease-in-out alternate both;
    cursor: none;
  }

  & a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 1200px) {
    width: fit-content;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 1025px) {
    margin-bottom: 0.4rem;
  }

  @media screen and (max-width: 750px) { 
    margin-right: 11px;
  }
`

export const Section = styled.div`
  padding-top: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & > h3 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 0.95rem;
  }
`

export const ExperienceSection = styled(Section)`
  & > ul {
    margin-bottom: 2rem;
  }

  & > div:last-of-type {
    margin-bottom: 0;
  }
`

export const SkillsTech = styled.div`
  display: flex;
  flex-direction: column;

  & li {
    color: black;
  }

  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`

export const NameTitle = styled.h1`
  font-size: 3.7rem;
  color: ${({ theme }) => theme.colors.darkerBlue};
  line-height: 3.5rem;

  @media screen and (max-width: 1200px) {
    font-size: 2.6rem;
    line-height: 2.2rem;
  }

  @media screen and (max-width: 1190px) {
    font-size: 2rem;
    line-height: 1.8rem;
  }

  @media screen and (max-width: 985px) {
    font-size: 1.5rem;
    line-height: 1.3rem;
  }

  @media screen and (max-width: 750px) {
    font-size: 2.4rem;
    line-height: 2.2rem;
  }
`

export const Description = styled.div`
  text-align: justify;
  
  & p {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.white};
  }

  & p:last-of-type {
    margin: 30px 0;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    background: #ffdd18;
  }

  & > a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 750px) { 
    flex-direction: row;
    width: fit-content;
  }

  @media screen and (max-width: 500px) { 
    flex-direction: column;
  }
`

export const EducationLevel = styled.div`
  margin-bottom: 32px;
`

export const WorkExperience = styled.div`
  margin-bottom: 32px;
`

export const WorkExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`

export const NameContainer = styled.div`
  overflow-x: hidden;
`

export const SkillsSection = styled.div`
  display: flex;

  & > div {
    width: 50%;
  }
`

export const ExperienceTitle = styled.div`
  border: "1px solid red";
  width: "100%";
  color: green;
  background: red;
  font-size: 12px;
  position: -webkit-sticky; /* Safari & IE */
  position: sticky;
  top: 0;
`

export const EducationTitle = styled(ExperienceTitle)``