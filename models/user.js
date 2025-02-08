const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM("ADMIN", "SELLER", "BUYER"), allowNull: false, defaultValue: "BUYER" },
  });

  User.associate = (models) => {
    User.hasMany(models.Product, { foreignKey: "ownerId", as: "products" });
    User.hasMany(models.Order, { foreignKey: "buyerId", as: "orders" });
  };

  return User;
};
