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
  type Mutation {
    addCategory(input: inputCategory): Category!
    addProduct(input: inputProduct): Product!
    addReview(input: inputReview): Review!
    deleteCategory(id: ID!): Boolean
    deleteProduct(id: ID!): Boolean
    deleteReview(id: ID!): Boolean
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category
    updateProduct(id: ID!, input: UpdateProductInput!): Product
    updateReview(id: ID!, input: UpdateReviewInput!): Review
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
  input inputCategory {
    name: String!
  }
  input inputProduct {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    categoryId: ID
  }
  input inputReview {
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: String!
  }
  input UpdateCategoryInput {
    name: String!
  }
  input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    categoryId: ID
  }
  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: String!
  }
`;
