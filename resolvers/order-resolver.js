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
      createOrder: async (_, { buyerId }, { models }) => {
        return await models.Order.create({ buyerId });
      },
    },
  };
  