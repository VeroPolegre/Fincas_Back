const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const user = await User.findOne({ _id: payload._id, tokens: token });
    if (!user) {
      return res.status(404).send({ message: "Usuario no autenticado" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(404)
      .send({ message: "There was a problem with the token" });
  }
};

const isAdmin = async (req, res, next) => {
  const admins = ["admin", "superadmin"];
  if (!admins.includes(req.user.role)) {
    return res
      .status(403)
      .send({ message: "Usuario sin permisos autorizados" });
  }
  next();
};

module.exports = {
  authentication,
  isAdmin,
};
