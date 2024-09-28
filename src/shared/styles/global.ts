import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.white};
    font-family: 'Inter', sans-serif;

  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
