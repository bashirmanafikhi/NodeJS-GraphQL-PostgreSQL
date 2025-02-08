module.exports = function (sequelize, DataTypes) {
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
