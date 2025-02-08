const { gql } = require('apollo-server-express');

module.exports = gql`
  type Order {
    id: ID!
    status: String!
    buyer: User!
    products: [Product]
  }

  type Query {
    orders: [Order]
    order(id: ID!): Order
  }

  type Mutation {
    createOrder(buyerId: ID!): Order
  }
`;
