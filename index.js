const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const { sequelize } = require("./models");

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await sequelize.sync();

  app.listen({ port: 4000 }, () => {
    console.log(`Apollo Server on http://localhost:4000${server.graphqlPath}`);
  });
}

startApolloServer();