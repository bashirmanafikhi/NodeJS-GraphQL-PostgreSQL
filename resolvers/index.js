const { Item } = require('../models');

const resolvers = {
  Query: {
    items: async () => {
      return await Item.findAll();
    },
    item: async (_, { id }) => {
      return await Item.findByPk(id);
    },
  },
  Mutation: {
    createItem: async (_, { name, description }) => {
      return await Item.create({ name, description });
    },
    updateItem: async (_, { id, name, description }) => {
      const item = await Item.findByPk(id);
      if (!item) throw new Error('Item not found');
      item.name = name;
      item.description = description;
      await item.save();
      return item;
    },
    deleteItem: async (_, { id }) => {
      const item = await Item.findByPk(id);
      if (!item) throw new Error('Item not found');
      await item.destroy();
      return item;
    },
  },
};

module.exports = resolvers;
