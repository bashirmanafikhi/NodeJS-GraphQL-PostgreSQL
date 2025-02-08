module.exports = {
  Query: {
    orders: async (_, __, { models }) => {
      return await models.Order.findAll({
        include: [
          { model: models.User, as: "buyer" },
          { model: models.Product, as: "products" },
        ],
      });
    },
    order: async (_, { id }, { models }) => {
      return await models.Order.findByPk(id, {
        include: [
          { model: models.User, as: "buyer" },
          { model: models.Product, as: "products" },
        ],
      });
    },
  },
  Mutation: {
    createOrder: async (_, __, { models, user }) => {
      if (user.dataValues.role == "SELLER") {
        throw new Error(
          `Unauthorized, Sorry ${user.dataValues.username} Sellers cannot create orders`
        );
      }
      const buyerId = user.dataValues.id;
      return await models.Order.create({ buyerId });
    }
  },
};
