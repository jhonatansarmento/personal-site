import styled from 'styled-components';

export const Section = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 318px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  color: #fff24e;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #d8d8d8;
`;

export const Experience = styled.div`
  margin-top: 20px;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 20px;
`;

export const ExperienceTitle = styled.h4`
  font-size: 1.2em;
`;

export const ExperienceSubtitle = styled.h5`
  font-size: 1em;
  color: #15d9b5;
`;

export const ExperienceText = styled.p`
  font-size: 1em;
  color: #d8d8d8;
`;

export const Projects = styled.div`
  margin-top: 20px;
`;

export const ProjectItem = styled.div`
  margin-bottom: 20px;
`;

export const ProjectTitle = styled.h4`
  font-size: 1.2em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1em;
  color: #d8d8d8;
`;
