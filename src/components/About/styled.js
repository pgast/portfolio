import styled from 'styled-components';
import { btnPop } from '../../constants/animations';
import { theme } from '../../constants/theme'

export const Container = styled.div`
  width: 1200px;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
  margin-bottom: 36px;
  overflow-y: none;
  font-weight: light;
  background: ${({ theme }) => theme.colors.blue };

  & ul {
    list-style-type: none;
  }

  & li,
  & p {
    font-size: 0.7rem;
    color: black;
    text-decoration: none!important;
  }

  @media screen and (max-width: 1200px) {
    width: 80%;

    & li {
      text-align: justify;
    }
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

export const SideSection = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  padding-left: 44px;
  padding-top: 44px;
  flex-direction: column;
  -webkit-animation: fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const Scroll = styled.div`
  max-height: 100%;
  padding-right: 44px;
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
    margin-bottom: 0.4rem;
  }
`

export const Section = styled.div`
  padding-top: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & > h3 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 0.95rem;
  }
`

export const ExperienceSection = styled(Section)`
  & > ul {
    margin-bottom: 2rem;
  }

  & div div:last-of-type ul {
    margin-bottom: 0;
  }
`

export const SkillsTech = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`

export const NameTitle = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.darkerBlue};
  line-height: 4rem;

  @media screen and (max-width: 1025px) {
    font-size: 3rem; 
  }

  @media screen and (max-width: 740px) {
    font-size: 2.4rem;
  }
`

export const Description = styled.div`
  text-align: justify;
  margin-bottom: 44px;
  
  & p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.white};
  }

  & p:last-of-type {
    margin-top: 1rem;
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
export const ButtonRow = styled.div`
  display: flex;
  margin-bottom: 44px;

  & > * {
    margin-right: 0.4rem;
    background: #ffdd18;
  }

  & > a {
    text-decoration: none;
    color: black;
  }
`