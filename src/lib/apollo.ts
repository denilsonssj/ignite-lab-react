import { ApolloClient, InMemoryCache } from '@apollo/client';

import { apiURL, apiAccessToken } from '~/lib/enviroment';

export const client = new ApolloClient({
    uri: apiURL,
    headers: {
        'Authorization': `Bearer ${apiAccessToken}`
    },
    cache: new InMemoryCache(),
});