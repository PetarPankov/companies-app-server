const Sequelize = require("sequelize");
const db = require("../config/database");

const CompanyAddresses = db.define("company-addresses", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  city: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  street: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  companyId: {
    type: Sequelize.STRING
  }
}, {
    timestamps: false
});

module.exports = CompanyAddresses;
