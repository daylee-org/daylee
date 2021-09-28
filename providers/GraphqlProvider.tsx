import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://nightlee.herokuapp.com',
  cache: new InMemoryCache(),
  credentials: 'include',
});

interface Props {
  children: React.ReactChild;
}

export function GraphqlProvider({ children }: Props) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
