module.exports = {
    Query: {
      orderItems: async (_, __, { models }) => {
        return await models.OrderItem.findAll({
          include: [
            {
              model: models.Order,
              as: "order",
            },
            {
              model: models.Product,
              as: "product",
            },
          ],
        });
      },
      orderItem: async (_, { id }, { models }) => {
        return await models.OrderItem.findByPk(id, {
          include: [
            {
              model: models.Order,
              as: "order",
            },
            {
              model: models.Product,
              as: "product",
            },
          ],
        });
      },
    },
    Mutation: {
      addItemToOrder: async (_, { orderId, productId, quantity, price }, { models }) => {
        return await models.OrderItem.create({ orderId, productId, quantity, price });
      },
    },
  };
  