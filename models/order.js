const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    status: { type: DataTypes.ENUM("PENDING", "COMPLETED", "CANCELLED"), defaultValue: "PENDING" },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: "buyerId", as: "buyer" });
    Order.belongsToMany(models.Product, { through: models.OrderItem, foreignKey: "orderId", as: "products" });
  };

  return Order;
};
