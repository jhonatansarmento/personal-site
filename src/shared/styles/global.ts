import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121315;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
