const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    role: String!
    products: [Product]
    orders: [Order]
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    register(username: String!, email: String!, password: String!, role: String!): User
    login(email: String!, password: String!): AuthPayload
  }
`;
