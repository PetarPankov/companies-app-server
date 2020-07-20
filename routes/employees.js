const { Employees } = require('../models');

module.exports = app => {
    app.get("/get-employees", async (req, res) => {
    const companies = await Employees.findAll();
    if (!employees.length) {
      res.status(204).send();
    } else {
      res.send(employees);
    }
  });
};

