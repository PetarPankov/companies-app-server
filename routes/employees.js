const { Employees } = require('../models');

module.exports = app => {
    app.get("/get-employees", async (req, res) => {
        const employees = await Employees.findAll();
        if (!employees.length) {
            res.status(204).send();
        } else {
            res.send(employees);
        }
    });

    app.get("/get-employees-by-company-id", async (req, res) => {
        const { id } = req.query;
        const employees = await Employees.findAll({ where: { companyId: id } });
        if (!employees.length) {
            res.status(204).send();
        } else {
            res.send(employees);
        }
    });
};