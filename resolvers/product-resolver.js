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
      createProduct: async (_, { name, price, stock }, { models, user }) => {
        if (user.dataValues.role == "BUYER") {
          throw new Error(`Unauthorized, Sorry ${user.dataValues.username} Buyers cannot create products`);
        }
        const ownerId = user.dataValues.id;
        return await models.Product.create({ name, price, stock, ownerId });
      },
    },
  };
  