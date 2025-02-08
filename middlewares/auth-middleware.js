const { authenticateUser } = require("../utils/auth");
const { models } = require("../models");


const authMiddleware = async ({ req }) => {
  const token = req.headers.authorization || "";
  const user = await authenticateUser(token.replace("Bearer ", ""));
  return { models, user };
};

module.exports = authMiddleware;
