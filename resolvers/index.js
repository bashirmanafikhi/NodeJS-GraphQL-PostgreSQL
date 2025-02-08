
const itemResolver = require("./item-resolver");
const userResolver = require("./user-resolver");
const productResolver = require("./product-resolver");
const orderResolver = require("./order-resolver");
const orderItemResolver = require("./order-item-resolver");

const resolvers = {
  Query: {
    ...itemResolver.Query,
    ...userResolver.Query,
    ...productResolver.Query,
    ...orderResolver.Query,
    ...orderItemResolver.Query,
  },
  Mutation: {
    ...itemResolver.Mutation,
    ...userResolver.Mutation,
    ...productResolver.Mutation,
    ...orderResolver.Mutation,
    ...orderItemResolver.Mutation,
  },
};

module.exports = resolvers;
