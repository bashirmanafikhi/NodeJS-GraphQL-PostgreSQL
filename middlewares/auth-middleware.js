const { authenticateUser } = require("../utils/auth");
const { models } = require("../models");

const authMiddleware = async ({ req }) => {
  const token = req.headers.authorization || "";
  const operationName = req.body.operationName;

  if (operationName == "Login" || operationName == "Register") {
    return { models };
  }

  const user = await authenticateUser(token.replace("Bearer ", ""));
  if (!user) throw new Error("Unauthorized");

  return { models, user };
};

module.exports = authMiddleware;
