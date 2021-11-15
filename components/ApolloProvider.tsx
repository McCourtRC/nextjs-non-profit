import * as Realm from 'realm-web';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { FC } from 'react';
const MONGO_REALM_APP_ID = 'mock-rjhaw';
// const graphqlUri = `https://realm.mongodb.com/api/client/v2.0/app/${MONGO_REALM_APP_ID}/graphql`;
const graphqlUri = `https://us-west-2.aws.realm.mongodb.com/api/client/v2.0/app/${MONGO_REALM_APP_ID}/graphql`;

// Connect to your MongoDB Realm app
const realmApp = new Realm.App(MONGO_REALM_APP_ID!);
// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!realmApp.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    await realmApp.logIn(Realm.Credentials.anonymous());
  } else {
    // An already logged in user's access token might be stale. To guarantee that the token is
    // valid, we refresh the user's custom data which also refreshes their access token.
    await realmApp.currentUser.refreshCustomData();
  }
  return realmApp?.currentUser?.accessToken;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUri,
    fetch: async (uri, options = {}) => {
      const accessToken = await getValidAccessToken();
      options.headers = { Authorization: `Bearer ${accessToken}` };
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});

const Provider: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
