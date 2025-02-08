const { gql } = require('apollo-server-express');

module.exports = gql`
  type OrderItem {
    id: ID!
    quantity: Int!
    price: Float!
    order: Order!
    product: Product!
  }

  type Query {
    orderItems: [OrderItem]
    orderItem(id: ID!): OrderItem
  }

  type Mutation {
    addItemToOrder(orderId: ID!, productId: ID!, quantity: Int!, price: Float!): OrderItem
  }
`;
