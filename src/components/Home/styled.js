import styled from 'styled-components'

import { 
  btnPopHome,
  fadeInBottom
} from '../../constants/animations'

export const Container = styled.div`
  display: flex;
  width: 1200px;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 1025px) {
    padding-left: 1rem;
    justify-content: center;
  }

  @media screen and (max-width: 740px) {
    padding-left: 0rem;
  }

  @media screen and (max-width: 490px) {
    margin: 0rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleTextRow = styled.div`
  display: flex;
  height: 4rem;

  @media screen and (max-width: 1025px) {
    height: 2.7rem;
  }

  @media screen and (max-width: 740px) {
    height: 2.1rem;
  }
`

export const AnimatedLetter = styled.h1`
  color: ${({ theme, $color }) => theme.colors[$color]};
  font-size: 5rem;

  -moz-transition: color .2s ease-in;
  -o-transition: color .2s ease-in;
  -webkit-transition: color .2s ease-in;
  transition: color .2s ease-in;

  @media screen and (max-width: 1025px) {
    font-size: 3rem; 
  }

  @media screen and (max-width: 740px) {
    font-size: 2.4rem;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  font-weight: 600;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 1025px) {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    font-size: 0.8rem;
  }
`

export const DescriptionTextRow = styled.div`
  display: flex;
  margin-bottom: ${({ $marginBottom = 0}) => $marginBottom};

  @media screen and (max-width: 490px) {
    display: none;
  }
`

export const TextColorLabel = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0.2rem;
  background: ${({ $color, theme }) => theme.colors[$color]};
`

export const MobileDescription = styled.p`
  display: none;

  @media screen and (max-width: 490px) {
    display: block;
    text-align: left;
    padding-right: 1rem;
  }
`

export const MobileTextLabel = styled.span`
  background: ${({ $color, theme }) => theme.colors[$color]};
  color: ${({ theme }) => theme.colors.black}; 
  margin: 0 0.2rem;
`

export const Button = styled.div`
  border-radius: 3rem; 
  padding:  0.7rem;
  cursor: none;
  width: 200px;
  text-align: center;
  font-size: 0.6rem;
  background: ${({ theme }) => theme.colors.green};

  &:hover {
    -webkit-animation: ${btnPopHome} 0.2s ease-in-out alternate both;
    animation: ${btnPopHome} 0.2s ease-in-out alternate both;
  }

  @media screen and (max-width: 740px) {
    font-size: 0.5rem;
    width: 10rem;
  }

  @media screen and (max-width: 490px) {
    position: fixed;
    left: 50%;
    margin-left: -100px;
    top: 88%;
  }
`

export const Content = styled.div`
  position: relative;
  top: 12%;
`