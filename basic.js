const { ApolloServer, gql } = require("apollo-server");
//now we have to create type definition and we took gql from apollo-server for typeDefs
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => {
      return "Hello world ! This is my first graphql query !!";
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen().then(({ url }) => {
  console.log("server is ready at " + url);
});
