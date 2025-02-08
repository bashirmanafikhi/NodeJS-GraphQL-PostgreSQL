const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres_db','postgres_user','postgres_password',{
    host: 'localhost',
    dialect: 'postgres'
});

const Item = require('./item')(sequelize, Sequelize);

sequelize.sync();

module.exports = { sequelize, Item };