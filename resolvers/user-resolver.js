const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Query: {
    users: async (_, __, { models }) => {
      return await models.User.findAll({
        include: [{
          model: models.Product,
          as: "products",
        },
        {
          model: models.Order,
          as: "orders",
        },
      ]
      });
    },
    user: async (_, { id }, { models }) => {
      return await models.User.findByPk(id);
    },
  },
  Mutation: {
    register: async (_, { username, email, password, role }, { models }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return await models.User.create({
        username,
        email,
        password: hashedPassword,
        role,
      });
    },
    login: async (_, { email, password }, { models }) => {
      const user = await models.User.findOne({ where: { email } });
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Invalid password");

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return { token, user };
    },
  },
};
