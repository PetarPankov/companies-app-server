const { CompanyAddresses } = require('../models');

module.exports = app => {
    app.get("/get-companies-addresses", async (req, res) => {
        const addresses = await CompanyAddresses.findAll();
        if (!addresses.length) {
            res.status(204).send();
        } else {
            res.send(addresses);
        }
    });

    app.get("/get-company-address", async (req, res) => {
        const { id } = req.query;
        const address = await CompanyAddresses.findAll({ where: { companyId: id } });
        if (!address.length) {
            res.status(204).send();
        } else {
            res.send(address[0]);
        }
    });
};

