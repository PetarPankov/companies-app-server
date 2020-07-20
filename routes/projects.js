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

    app.get("/get-project-by-company-id", async (req, res) => {
        const { id } = req.query;
         const companies = await Companies.findAll({ where: { companyId: id } });
         if (!companies.length) {
             res.status(204).send();
         } else {
             res.send(companies);
         }
     });
};

