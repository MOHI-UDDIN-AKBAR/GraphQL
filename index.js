const { ApolloServer, gql } = require("apollo-server");
//scalar types are String, Int, Float, Boolean
const typeDefs = gql`
  type Query {
    hello: [String!]!
  }
`;
const resolvers = {
  Query: {
    hello: () => {
      return ["this", "is", "an", "array"];
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
