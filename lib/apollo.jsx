import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const apolloClient = new ApolloClient({
  //uri: "https://api-sa-east-1.graphcms.com/v2/cl4kdaq7j5o7t01xvgqpydj0g/master",
  uri: "https://jsonkeeper.com/b/K14E",
  cache: new InMemoryCache(),
});

export default apolloClient;
