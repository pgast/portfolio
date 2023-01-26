import { keyframes } from 'styled-components'

export const fadeInBottom = keyframes`
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

export const projectHover = keyframes`
  from {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
  }
  to {
    -webkit-transform: translateZ(20px) translateY(-6px);
    transform: translateZ(20px) translateY(-6px);
  }
`

export const btnPop = keyframes`
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

export const btnPopHome = keyframes`
  from {
    -webkit-box-shadow: 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black;
    box-shadow: 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  to {
    -webkit-box-shadow: -1px 1px #ffc448, -2px 2px #ffc448, -3px 3px #ffc448, -4px 4px #ffc448, -5px 5px #ffc448, -6px 6px #ffc448, -7px 7px #ffc448, -8px 8px #ffc448;
    box-shadow: -1px 1px #ffc448, -2px 2px #ffc448, -3px 3px #ffc448, -4px 4px #ffc448, -5px 5px #ffc448, -6px 6px #ffc448, -7px 7px #ffc448, -8px 8px #ffc448;
    -webkit-transform: translateX(8px) translateY(-8px);
    transform: translateX(8px) translateY(-8px);
  }
`

export const showInfo = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`

export const shadowDrop = keyframes`
  from {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
  }
  to {
    -webkit-transform: translateZ(20px) translateY(-3px);
    transform: translateZ(20px) translateY(-3px);
  }
`

export const menuEntrance = keyframes`
  from {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
`