import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'src/shared/styled';
import { theme } from 'src/shared/styled/theme';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from './Routes';
import GlobalStyles from './globalStyles'
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Routes />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
