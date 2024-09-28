import styled from 'styled-components';

export const Section = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 318px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textColor};
`;

export const Experience = styled.div`
  margin-top: 20px;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:last-child {
    margin-bottom: 20px;
  }
`;

export const ExperienceTitle = styled.h4`
  font-size: 1.2rem;
`;

export const ExperienceSubtitle = styled.h5`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryColor};
`;

export const ExperienceText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

export const Projects = styled.div`
  margin-top: 20px;
`;

export const ProjectItem = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:last-child {
    margin-bottom: 20px;
  }
`;

export const ProjectTitle = styled.h4`
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

export const Education = styled.div`
  margin-top: 20px;
`;

export const EducationItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EducationInstitution = styled.h4`
  font-size: 1.2rem;
`;

export const EducationDegree = styled.h5`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryColor};
`;

export const EducationPeriod = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
`;
