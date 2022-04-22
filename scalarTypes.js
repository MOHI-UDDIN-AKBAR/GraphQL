const { ApolloServer, gql } = require("apollo-server");
//scalar types are String, Int, Float, Boolean
const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;
const resolvers = {
  Query: {
    hello: () => {
      return "Hello world ! This is my first graphql query !!";
    },
    numberOfAnimals: () => {
      return 30;
    },
    price: () => {
      return 494.3434;
    },
    isCool: () => {
      return false;
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
