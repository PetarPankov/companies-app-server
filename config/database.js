const Sequelize = require('sequelize');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = require('../config');

module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql'
});
