import styled, { keyframes } from 'styled-components'

const btnPop = keyframes`
  from {
    -webkit-box-shadow: 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black;
    box-shadow: 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  to {
    -webkit-box-shadow: -1px 1px #03ca9f, -2px 2px #03ca9f, -3px 3px #03ca9f, -4px 4px #03ca9f, -5px 5px #03ca9f, -6px 6px #03ca9f, -7px 7px #03ca9f, -8px 8px #03ca9f;
    box-shadow: -1px 1px #03ca9f, -2px 2px #03ca9f, -3px 3px #03ca9f, -4px 4px #03ca9f, -5px 5px #03ca9f, -6px 6px #03ca9f, -7px 7px #03ca9f, -8px 8px #03ca9f;
    -webkit-transform: translateX(8px) translateY(-8px);
    transform: translateX(8px) translateY(-8px);
  }
`

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
  margin-top: 3.4rem;
  width: 1200px;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  & p {
    font-weight: 500;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.yellow};
  }

  & textarea {
    resize: none;
  }

  & a p:hover {
    color: ${({ theme }) => theme.colors.blue}
  }

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    height: fit-content;
    align-items: center;
    margin: 0rem;
    margin-top: 5rem;
    flex-direction: column
  }
`

export const Header = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-right: 3.5rem;
  align-items: flex-end;

  & > div:first-of-type {
    margin-bottom: 2rem;
  }

  & div {
    width: 11rem;
  }

  & a {
    text-decoration: none;
    color: black;
  }

  & h1 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    padding: 3rem 0rem;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  }
`

export const HeaderTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.yellow};
`

export const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 1rem;

  & p {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.yellow};
  }

  & div {
    margin: .7rem 0;
  }

  & textarea,
  & input {
    border: none;
    border-left: ${({ theme }) => `3px solid ${theme.colors.green}`};
    font-size: 0.7rem;
    padding: 0.4rem;
    width: 10rem;
    color: rgba(255, 255, 255, 0.456);
    background: #03ca9f1c;
    margin-top: 0.2rem;
    border-radius: 3px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  & textarea:focus,
  & input:focus {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 768px) {
    padding: 0rem;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
  }
`

export const ErrorMessage = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const HeaderButton = styled.div`
  border-radius: 1rem; 
  padding:  0.4rem 0.7rem;
  cursor: none;
  text-align: center;
  font-size: 0.6rem;
  background: ${({ theme }) => theme.colors.yellow};
  color: black;
  width: 5rem;

  &:hover {
    -webkit-animation: ${btnPop} 0.2s ease-in-out alternate both;
    animation: ${btnPop} 0.2s ease-in-out alternate both;
  }
`

export const FormButton = styled(HeaderButton)`
  margin-top: 2rem;
  text-align: center;
  width: 6rem;
  background: ${({ theme }) => theme.colors.yellow};
`
