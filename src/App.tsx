import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import NavBar from './navigation/NavBar';
import Routes from './navigation/Routes';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App: React.FunctionComponent = () => (
  <ApolloProvider client={client}>
    <NavBar />
    <Routes />
  </ApolloProvider>
);

export default App;
