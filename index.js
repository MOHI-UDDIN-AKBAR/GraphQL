const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { products, reviews, categories } = require("./data");
const { Query } = require("./resolver/query");
const { Product } = require("./resolver/product");
const { Category } = require("./resolver/category");

// const resolvers = {
//   Query,
//   Product,
//   Category,
// };
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    //here we are sending all data to our resolvers
    products,
    reviews,
    categories,
  },
});
server.listen().then(({ url }) => {
  console.log("server is ready at " + url);
});
