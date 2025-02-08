const { gql } = require('apollo-server-express');

module.exports = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    stock: Int!
    owner: User
    orders: [Order]
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, price: Float!, stock: Int!, ownerId: ID!): Product
  }
`;
