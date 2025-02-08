const{ gql} = require('apollo-server-express');

const typeDefs = gql`

    type Item {
        id: ID!
        name: String!
        description: String
    }

    type Query {
        items: [Item]
        item(id: ID!): Item
    }

    type Mutation {
        createItem(name: String!, description: String): Item
        updateItem(id: ID!, name: String!, description: String): Item
        deleteItem(id: ID!): Item
    }

    `;

module.exports = typeDefs;
