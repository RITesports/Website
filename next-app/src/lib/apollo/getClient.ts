import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { GetServerSidePropsContext } from 'next';

// Make ctx parameter type explicit to not accidentally omit GetServerSideProps context
// GetServerSideProps: getClient(ctx)
// GetStaticProps: getClient(undefined)
const getClient = (ctx: GetServerSidePropsContext | undefined) => {
  const setCookieLink = new ApolloLink((operation, forward) => forward(operation).map((data) => {
    ctx?.res.setHeader('set-cookie', operation.getContext().response.headers.get('set-cookie') || '');
    return data;
  }));

  const httpLink = new HttpLink({
    uri: 'http://127.0.0.1/graphql',
    headers: ctx?.req.headers,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([setCookieLink, httpLink]),
    ssrMode: true,
  });
};

export default getClient;
