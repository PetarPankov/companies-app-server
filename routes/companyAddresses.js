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
};

