const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Item = sequelize.define(
    "Item",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desciption: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: true }
  );
  return Item;
};
