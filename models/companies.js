const Sequelize = require("sequelize");
const db = require("../config/database");

const Companies = db.define("companies", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  business: {
    type: Sequelize.STRING
  },
  slogan: {
    type: Sequelize.STRING
  }
});

module.exports = Companies;
