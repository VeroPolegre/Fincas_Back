const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: [true, "Please provide an image URL"],
    },
  },
  { timestamps: true }
);

const Incident = mongoose.model("Incident", IncidentSchema);

module.exports = Incident;
