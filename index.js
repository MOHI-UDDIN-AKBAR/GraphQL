const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { db } = require("./data");
const { Query } = require("./resolver/query");
const { Product } = require("./resolver/product");
const { Category } = require("./resolver/category");
const { Mutation } = require("./resolver/mutation");

// const resolvers = {
//   Query,
//   Product,
//   Category,
// };
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Product,
    Category,
  },
  context: {
    //here we are sending all data to our resolvers
    db,
  },
});
server.listen().then(({ url }) => {
  console.log("server is ready at " + url);
});
