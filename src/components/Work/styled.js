import styled from 'styled-components';

export const WorkRight = styled.div`
  flex: 1;
  padding-top: 100px;
  padding-bottom: 80px;

  @media screen and (max-width: 900px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

export const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr auto;
  gap: 0 24px;
  align-items: start;
  padding: 36px 0;
  border-top: 0.5px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: 600px) {
    grid-template-columns: 24px 1fr;
  }
`;

export const ProjectIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.terracotta};
  padding-top: 6px;
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProjectName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 28px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.tierra};
  line-height: 1;
  text-transform: uppercase;
`;

export const ProjectDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 300;
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 480px;
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const StackTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.secondary};
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  padding: 4px 10px;
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  padding-top: 6px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ProjectLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 300;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.15s ease;
  cursor: none;

  &:hover {
    color: ${({ theme }) => theme.colors.signalBlue};
  }
`;
