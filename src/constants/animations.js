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
    -webkit-box-shadow: -1px 1px #ff1f25, -2px 2px #ff1f25, -3px 3px #ff1f25, -4px 4px #ff1f25, -5px 5px #ff1f25, -6px 6px #ff1f25, -7px 7px #ff1f25, -8px 8px #ff1f25;
    box-shadow: -1px 1px #ff1f25, -2px 2px #ff1f25, -3px 3px #ff1f25, -4px 4px #ff1f25, -5px 5px #ff1f25, -6px 6px #ff1f25, -7px 7px #ff1f25, -8px 8px #ff1f25;
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
    -webkit-box-shadow: -1px 1px #003286, -2px 2px #003286, -3px 3px #003286, -4px 4px #003286, -5px 5px #003286, -6px 6px #003286, -7px 7px #003286, -8px 8px #003286;
    box-shadow: -1px 1px #003286, -2px 2px #003286, -3px 3px #003286, -4px 4px #003286, -5px 5px #003286, -6px 6px #003286, -7px 7px #003286, -8px 8px #003286;
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