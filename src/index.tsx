import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ThemeProvider } from 'src/shared/styled';
import { theme } from 'src/shared/styled/theme';
import resolvers from 'src/graphql/resolvers';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';
import GlobalStyles from './globalStyles';
import BrowserRouter from './BrowserRouter';

const cache = new InMemoryCache({});
cache.writeData({ data: { user: null } });

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache,
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`);
      });
    }
  },
  resolvers,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <BrowserRouter>
        <>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </>
      </BrowserRouter>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
