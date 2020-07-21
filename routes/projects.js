const { Projects } = require('../models');

module.exports = app => {
    app.get("/get-projects", async (req, res) => {
        const projects = await Projects.findAll({ where: { isDeleted: 0 } });
        if (!projects.length) {
            res.end([]);
        } else {
            res.send(projects);
        }
    });

    app.get("/get-projects-by-company-id", async (req, res) => {
        const { id } = req.query;
        const projects = await Projects.findAll({ where: { companyId: id, isDeleted: 0 } });
        if (!projects.length) {
            res.send([]);
        } else {
            res.send(projects);
        }
    });

    app.delete("/delete-project", async (req, res) => {
        const { id } = req.params;
        const project = await Projects.update({
            isDeleted: 1
        }, {
            where: {
                id
            }
        });
        if (!project) {
            res.status(204).send();
        } else {
            res.send({ id });
        }
    });

};

