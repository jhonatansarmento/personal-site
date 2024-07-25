import styled from 'styled-components';

export const Section = styled.div`
  flex: 1;
  max-width: 300px;
  margin-right: 20px;
  background-color: #4a4b57;
  padding: 20px;
  border-radius: 10px;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

export const Name = styled.h1`
  font-size: 1.8em;
  margin: 10px 0;
  color: #ff6f61;
`;

export const Title = styled.h2`
  font-size: 1.2em;
  color: #6bc2b4;
  margin: 10px 0;
`;

export const Description = styled.p`
  font-size: 1em;
  color: #d8d8d8;
`;

export const Nav = styled.nav`
  a {
    display: block;
    color: #ffffff;
    text-decoration: none;
    margin: 10px 0;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  text-align: left;
  margin-top: 20px;
  a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;
    font-size: 1.5em;
  }

  a:hover {
    color: #ff6f61;
  }
`;
