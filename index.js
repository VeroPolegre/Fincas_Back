const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

const { handleTypeError } = require("./middleware/errors");
const { dbConnection } = require("./config/config");
const uploadFile = require("./uploadFile");

dbConnection();
app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/users"));
app.use("/incidents", require("./routes/incidents"));
app.post("/uploadFile", (req, res) =>
  uploadFile(req.body.file)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err))
);

app.use(handleTypeError);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
