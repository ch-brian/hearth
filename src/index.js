import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { cache } from './cache/cache';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const GRAPHQL_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/graphql'
    : 'http://localhost:8080/graphql';

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
