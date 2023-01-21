import styled from 'styled-components'

import { 
  btnPop, 
  btnPopHome,
  fadeInBottom
} from '../../constants/animations'

export const Container = styled.div`
  margin-top: 3.4rem;
  width: 1200px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const HeaderTitle = styled.h3`
  text-align: center;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.yellow};
`

export const ContactButton = styled.div`
  border-radius: 1rem; 
  padding:  0.4rem 0.7rem;
  margin: 11px 22px;
  cursor: none;
  text-align: center;
  font-size: 0.6rem;
  background: ${({ theme, color = 'yellow' }) => theme.colors[color]};
  color: black;

  &:hover {
    -webkit-animation: ${btnPop} 0.2s ease-in-out alternate both;
    animation: ${btnPop} 0.2s ease-in-out alternate both;
  }
`

export const EmailButton = styled(ContactButton)`
  &:hover {
    -webkit-animation: ${btnPopHome} 0.2s ease-in-out alternate both;
    animation: ${btnPopHome} 0.2s ease-in-out alternate both;
  }
`

export const ContactBtnsContainer = styled.div`
  display: flex;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
