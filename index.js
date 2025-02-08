require("dotenv").config(); // Load environment variables
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const { sequelize } = require("./models");
const authMiddleware = require("./middlewares/auth-middleware");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await sequelize.sync({ alter: true }).then(() => {
    console.log("Database synced!");
  });

  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `Server running at http://localhost:${process.env.PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer();
