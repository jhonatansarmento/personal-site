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
