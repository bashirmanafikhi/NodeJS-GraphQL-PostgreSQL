const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

const User = require("./user")(sequelize);
const Product = require("./product")(sequelize);
const Order = require("./order")(sequelize);
const OrderItem = require("./order-item")(sequelize);

const models = { User, Product, Order, OrderItem };

// associate relationships
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, models };
