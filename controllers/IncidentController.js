const Incident = require("../models/Incident");

const IncidentController = {
  async create(req, res, next) {
    try {
      const incident = await Incident.create(req.body);
      res
        .status(201)
        .send({ message: "Incidencia creada exitósamente", incident });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = IncidentController;
