import styled from 'styled-components';

export const Section = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;

  @media (max-width: 768px) {
    position: relative;
    height: auto;
    width: 100%;
    align-items: center;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const Name = styled.h1`
  font-size: 1.5em;
  margin: 10px 0;
  color: ${({ theme }) => theme.primaryColor};

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const Title = styled.h2`
  font-size: 1em;
  margin: 5px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const Description = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.textColor};
  margin: 10px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

interface NavItemProps {
  $active: boolean;
}

export const NavItem = styled.a<NavItemProps>`
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;
  margin: 10px 0;
  padding: 10px;
  border-left: ${({ $active, theme }) =>
    $active ? `4px solid ${theme.primaryColor}` : '4px solid transparent'};
  transition: background-color 0.3s, border-left 0.3s;
  padding-left: ${({ $active }) => ($active ? '1.5rem' : '')};

  &:hover {
    color: ${({ $active, theme }) => ($active ? '' : theme.primaryColor)};
  }
`;

export const SocialLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    font-size: 1.5em;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

export const Education = styled.div`
  margin-top: 20px;
`;

export const EducationItem = styled.div`
  margin-bottom: 20px;
`;

export const EducationInstitution = styled.h4`
  font-size: 1.2em;
`;

export const EducationDegree = styled.h5`
  font-size: 1em;
  color: ${({ theme }) => theme.secondaryColor};
`;

export const EducationPeriod = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.textColor};
`;
