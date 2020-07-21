const Sequelize = require('sequelize');
const db = require('../config/database');

const Employees = db.define('employees', {
  id: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: Sequelize.STRING
  },
  companyId: {
    type: Sequelize.STRING
  },
  jobTitle: {
    type: Sequelize.STRING
  },
  jobArea: {
    type: Sequelize.STRING
  },
  jobType: {
    type: Sequelize.STRING
  }
}, {
    timestamps: false
});

module.exports = Employees;
