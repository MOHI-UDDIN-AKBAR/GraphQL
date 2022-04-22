const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    hello: [String!]!
    products: [Product!]!
  }
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
  }
`;
const resolvers = {
  Query: {
    hello: () => {
      return ["this", "is", "an", "array"];
    },
    products: () => {
      return [
        {
          name: "Bike",
          description: "Mountain Bike",
          quantity: 39,
          price: 3429.322,
          image: "image-1",
          onSale: false,
        },
      ];
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
