const Sequelize = require('sequelize');
const db = require('../config/database');

const Projects = db.define('projects', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false
  },
  employeesId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  companyId: {
    type: Sequelize.STRING
  },
  isDeleted: {
    type: Sequelize.BOOLEAN
  } 
}, {
    timestamps: false
});

module.exports = Projects;
