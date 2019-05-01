import { createGlobalStyle } from './shared/styled';

export default createGlobalStyle`
  html, body {
    height: 100%;
  }

  #root {
    min-height: 100%;
    display: flex;
  }

  body {
    background-color: rgb(255, 254, 252);
    margin: 0;
  }

  *:focus {
    outline: 0;
  }
`;
