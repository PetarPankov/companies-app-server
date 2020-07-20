const { Companies } = require('../models');

module.exports = app => {
    app.get("/get-companies", async (req, res) => {
        const companies = await Companies.findAll();
        if (!companies.length) {
            res.status(204).send();
        } else {
            res.send(companies);
        }
    });

    app.get("/get-company", async (req, res) => {
       /*  const { id } = req.query; */
       console.log(req)
        const companies = await Companies.findAll({ where: { 'a' } });
        if (!companies.length) {
            res.status(204).send();
        } else {
            res.send(companies);
        }
    });
};

