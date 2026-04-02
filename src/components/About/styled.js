import styled from 'styled-components';
import { btnPop, fadeInBottom } from '../../constants/animations';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  max-width: 1200px;
  padding: 100px 0 80px;
  -webkit-animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  & ul {
    padding-left: 0;
  }

  & li {
    list-style-type: disc;
    list-style-position: inside;
    font-size: 0.7rem;
    line-height: 1.9;
    color: ${({ theme }) => theme.colors.black};
  }

  & a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 80px 0 60px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 70px 1.5rem 50px;
  }
`

export const Hero = styled.div`
  padding-bottom: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

export const SectionLabel = styled.p`
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  margin-bottom: 24px;
`

export const SectionBlock = styled.div`
  padding: 52px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`

export const NameTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.blue};
  line-height: 1.1;
  margin-bottom: 28px;

  @media screen and (max-width: 750px) {
    font-size: 2rem;
  }
`

export const Bio = styled.div`
  & p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.9;
    max-width: 620px;
    margin-bottom: 32px;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const Button = styled.div`
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.yellow};
  font-size: 0.55rem;
  padding: 0.4rem 0.7rem;
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

    &:hover {
      text-decoration: none;
    }
  }
`

export const JobBlock = styled.div`
  padding-left: 16px;
  border-left: 2px solid ${({ theme }) => theme.colors.gray};
  margin-bottom: 36px;
  transition: border-color 0.2s ease;

  &:hover {
    border-left-color: ${({ theme }) => theme.colors.blue};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
  gap: 12px;
  flex-wrap: wrap;
`

export const JobTitle = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.blue};
`

export const JobDuration = styled.p`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.darkGray};
  white-space: nowrap;
`

export const EducationSchool = styled.div`
  margin-bottom: 20px;

  & p {
    font-size: 0.7rem;
    line-height: 1.8;
  }

  & p:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
  }
`

export const CertTitle = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 8px;
`

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const TechCategory = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const TechCategoryLabel = styled.p`
  font-size: 0.55rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkGray};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
`

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const Tag = styled.span`
  font-size: 0.6rem;
  padding: 4px 12px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.black};
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const AwardBlock = styled.div`
  margin-bottom: 20px;
  padding-left: 16px;
  border-left: 2px solid ${({ theme }) => theme.colors.gray};

  &:last-child {
    margin-bottom: 0;
  }

  & p:first-child {
    font-weight: 600;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 2px;
  }

  & p:last-child {
    font-size: 0.65rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`
