const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define("Product", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    ownerId: { type: DataTypes.UUID, allowNull: false },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { foreignKey: "ownerId", as: "owner" });
    Product.belongsToMany(models.Order, { through: models.OrderItem, foreignKey: "productId", as: "orders" });
  };

  return Product;
};
