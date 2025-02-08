const userSchema = require("./user-schema");
const productSchema = require("./product-schema");
const orderSchema = require("./order-schema");
const orderItemSchema = require("./order-item-schema");

module.exports = [
  userSchema,
  productSchema,
  orderSchema,
  orderItemSchema
];