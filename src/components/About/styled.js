import styled from 'styled-components';

import { btnPop } from '../../constants/animations';


export const Container = styled.div`
  width: 1200px;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
  overflow-y: none;
  font-weight: lighter;

  & ul {
    list-style-type: none;
  }

  & li,
  & p {
    font-size: 0.7rem;
    color: white;
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

export const Scroll = styled.div`
  max-height: 100%;
  padding-right: 5rem;
  padding-top: 3rem;
  overflow-y: auto;
  width: 48%;
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
