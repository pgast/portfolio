import styled from 'styled-components';
import { btnPop, fadeInBottom } from '../../constants/animations';

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
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

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
  overflow-y: auto;
  width: calc((100% / 3) * 2);
  -webkit-animation: fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  margin-left: 2px;

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

  & > h3 {
    font-size: 0.95rem;
  }
`

export const ExperienceSection = styled(Section)``

export const SkillsTech = styled.div`
  display: flex;
  padding: 0 40px 40px;

  & > div {
    width: 50%;
  }

  & > div > ul {
    margin-bottom: 22px;
  }

  & > div > ul:last-of-type {
    margin-bottom: 0px;
  }

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

export const BulletPointsContent = styled.div`
  padding: 0 40px 40px;
`

export const AwardsContent = styled(BulletPointsContent)`
  & > div:first-of-type {
    margin-bottom: 32px;
  }
  
  & > div > p:first-of-type {
    color: ${({ theme }) => theme.colors.blue };
  }
`

export const WorkExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.blue };
`

export const SkillSubtitle = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.blue };
`

export const NameContainer = styled.div`
  overflow-x: hidden;
`

export const ExperienceTitle = styled.div`
  display: flex;
  align-items: center;

  & > h5 {
    font-size: 0.95rem;
  }

  height: 70px;
  color: ${({ theme }) => theme.colors.darkGray };
  background: ${({ theme }) => theme.colors.gray };

  position: -webkit-sticky; /* Safari & IE */
  position: sticky;
  top: 0;
  padding-left: 40px;
`

export const EducationTitle = styled(ExperienceTitle)``

export const TechSkillsTitle = styled(ExperienceTitle)``

export const SkillsTitle = styled(ExperienceTitle)``
