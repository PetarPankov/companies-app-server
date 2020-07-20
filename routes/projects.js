const { Projects } = require('../models');

module.exports = app => {
    app.get("/get-projects", async (req, res) => {
    const projects = await Projects.findAll();
    if (!projects.length) {
      res.status(204).send();
    } else {
      res.send(projects);
    }
  });
};

