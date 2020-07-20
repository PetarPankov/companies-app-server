const { Companies } = require('../models');

module.exports = app => {
    app.get("/companies", async (req, res) => {
    const movies = await Companies.findAll();
    if (!movies.length) {
      res.status(204).send();
    } else {
      res.send(movies);
    }
  });
};

