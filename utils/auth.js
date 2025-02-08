const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { models } = require("../models");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const authenticateUser = async (token) => {
  if (!token) return null;
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return await models.User.findByPk(decoded.id);
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, authenticateUser };
