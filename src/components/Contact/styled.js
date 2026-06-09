import styled from 'styled-components';

export const ContactWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.void};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px clamp(24px, 6.5vw, 88px) 80px;
`;

export const ContactStatement = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(44px, 6vw, 64px);
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 56px;

  @media (max-width: 480px) {
    font-size: clamp(38px, 11vw, 52px);
    margin-bottom: 40px;
  }
`;

export const StatementBlue = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
`;

export const EmailDisplay = styled.a`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(20px, 3vw, 36px);
  color: ${({ theme }) => theme.colors.electricBlue};
  text-decoration: none;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 48px;
  cursor: none;
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkRow = styled.a`
  display: grid;
  grid-template-columns: 36px 1fr auto;
  align-items: center;
  gap: 0 24px;
  padding: 24px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderDark};
  text-decoration: none;
  cursor: none;
  transition: border-color 0.2s ease;

  &:first-child {
    border-top: 0.5px solid ${({ theme }) => theme.colors.borderDark};
  }

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.electricBlue};
  }

  &:hover .link-name {
    color: ${({ theme }) => theme.colors.electricBlue};
  }

  &:hover .link-arrow {
    color: ${({ theme }) => theme.colors.white};
    transform: translate(3px, -3px);
  }
`;

export const LinkIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.signalRed};
`;

export const LinkName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 28px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1;
  transition: color 0.18s ease;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const LinkArrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  color: #333333;
  transition: color 0.18s ease, transform 0.18s ease;
  display: inline-block;
`;
