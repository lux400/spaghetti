import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createGlobalStyle, ThemeProvider } from 'src/shared/styled';
import { theme } from 'src/shared/styled/theme';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from './Routes';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
});

const GlobalStyle = createGlobalStyle`
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Routes />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
