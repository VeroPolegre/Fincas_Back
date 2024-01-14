const express = require("express");
const router = express.Router();
const IncidentController = require("../controllers/IncidentController");

router.post("/upload", IncidentController.create);

module.exports = router;
