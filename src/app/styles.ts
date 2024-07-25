import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 76px auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FixedContainer = styled.div`
  display: flex;
  position: fixed;

  @media (max-width: 768px) {
    position: static;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  border-top: 1px solid #333;
  color: #d8d8d8;
  background-color: #1a1b26;
`;
