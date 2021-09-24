import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useState } from 'react';

const useClient = (incomingCache?: NormalizedCacheObject) => {
  const [client] = useState(() => new ApolloClient({
    cache: new InMemoryCache(),
    uri: '/graphql',
  }));

  if (incomingCache) {
    const existingCache = client.extract();

    client.restore({
      ...existingCache,
      ...incomingCache,
      ...existingCache.ROOT_QUERY && incomingCache.ROOT_QUERY && {
        ROOT_QUERY: {
          ...existingCache.ROOT_QUERY,
          ...incomingCache.ROOT_QUERY,
        },
      },
    });
  }

  return client;
};

export default useClient;
