const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    hello: [String!]!
    products(filter: filterProductInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    category: Category
    reviews: [Review]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: filterProductInput): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: String!
  }
  input filterProductInput {
    onSale: Boolean
    avgRating: Int
  }
`;
