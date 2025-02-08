module.exports = {
    Query: {
      products: async (_, __, { models }) => {
        return await models.Product.findAll({ include: [{ model: models.User, as: "owner" }] });
      },
      product: async (_, { id }, { models }) => {
        return await models.Product.findByPk(id, { include: [{ model: models.User, as: "owner" }] });
      },
    },
    Mutation: {
      createProduct: async (_, { name, price, stock, ownerId }, { models }) => {
        return await models.Product.create({ name, price, stock, ownerId });
      },
    },
  };
  