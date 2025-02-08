module.exports = {
  Query: {
    items: async (_, __, { models }) => {
      return await models.Item.findAll();
    },
    item: async (_, { id }, { models }) => {
      return await models.Item.findByPk(id);
    },
  },
  Mutation: {
    createItem: async (_, { name, description }, { models }) => {
      return await models.Item.create({ name, description });
    },
    updateItem: async (_, { id, name, description }, { models }) => {
      const item = await models.Item.findByPk(id);
      if (!item) throw new Error("Item not found");
      item.name = name;
      item.description = description;
      await item.save();
      return item;
    },
    deleteItem: async (_, { id }, { models }) => {
      const item = await models.Item.findByPk(id);
      if (!item) throw new Error("Item not found");
      await item.destroy();
      return item;
    },
  },
};
