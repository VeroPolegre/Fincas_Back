const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;
const transporter = require("../config/nodemailer");
const fs = require("fs").promises;
const API_URL = "http://localhost:8080";

const UserController = {
  async create(req, res, next) {
    try {
      let hash = "";
      if (req.body.password) {
        hash = bcrypt.hashSync(req.body.password, 10);
      }

      const user = await User.create({
        ...req.body,
        password: hash,
        confirmed: true,
        role: "user",
      });
      const emailToken = jwt.sign(
        {
          email: req.body.email,
        },
        jwt_secret,
        { expiresIn: "48h" }
      );
      const url = { API_URL } + "/users/confirm/" + emailToken;
      await transporter.sendMail({
        to: req.body.email,
        subject: "Confirmación de correo",
        html: `<h3>Bienvenido</h3>
        <a href="${url}">Porfavor, clicke aquí para confirmar su correo</a>
        `,
      });
      res.status(201).send({ message: "Usuario registrado con éxito", user });
    } catch (error) {
      next(error);
    }
  },

  async confirm(req, res) {
    try {
      const token = req.params.emailToken;
      const payload = jwt.verify(token, jwt_secret);
      await User.findOneAndUpdate(
        {
          email: payload.email,
        },
        { confirmed: true }
      );
      res.status(201).send("Usuario confirmado con éxito");
    } catch (error) {
      console.error(error);
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .send({ error: "Porfavor, introduzca correo y contraseña" });
      }
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .send({ message: "Correo o contraseña incorrectas" });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "Correo o contraseña incorrectas" });
      }
      const token = jwt.sign(
        {
          _id: user._id,
        },
        jwt_secret
      );
      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      await user.save();
      return res.status(200).send({ message: `Bienvenido`, token, user });
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al conectar el usuario`, error);
    }
  },

  async updateProfile(req, res) {
    try {
      if (!req.user._id) {
        return res.status(400).send({ message: "Registre un usuario" });
      }

      let foundUser = await User.findById(req.user._id);

      if (!foundUser) {
        return res.status(400).send({ message: "Usuario no encontrado" });
      }
      let updateFields = {};

      if (req.file) {
        if (foundUser.avatar) {
          await fs.unlink(`uploads/${foundUser.avatar}`);
        }
        updateFields.avatar = req.file.filename;
      }
      if (req.body.password) {
        updateFields.password = bcrypt.hashSync(req.body.password, 10);
      }

      foundUser = await User.findByIdAndUpdate(req.user._id, updateFields, {
        new: true,
      });

      res
        .status(200)
        .send({ message: "Usuario actualizado con éxito", foundUser });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  // async getLoggedUser(req, res) {
  //   try {
  //     const loggedUser = await User.findById({ _id: req.user._id })
  //       .populate({
  //         path: "postIds",
  //         select:
  //           "category images title content keywords likes commentIds createdAt",
  //       })
  //       .populate({
  //         path: "following",
  //         select: "username avatar",
  //         populate: {
  //           path: "postIds",
  //           select: "category images title content keywords likes commentIds",
  //         },
  //       });
  //     const numOfFollowing = loggedUser.following.length;
  //     const numOfFollowers = loggedUser.followers.length;
  //     const numOfPosts = loggedUser.postIds.length;
  //     const loggedUserInfo = {
  //       loggedUser,
  //       numOfFollowers,
  //       numOfFollowing,
  //       numOfPosts,
  //     };
  //     res.status(200).send(loggedUserInfo);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send(`Error while trying to get the current user`, error);
  //   }
  // },

  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: {
          tokens: req.headers.authorization,
        },
      });
      res.status(200).send({ message: `Hasta pronto ${req.user.name}.` });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: `Error while trying to disconnect the current user`,
        error,
      });
    }
  },

  async getById(req, res, next) {
    try {
      const foundUser = await User.findById({ _id: req.params._id });
      if (!foundUser) {
        return res
          .status(400)
          .send({ message: `ID: ${req.params._id} not found` });
      } else {
        return res.status(200).send(foundUser);
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  // async getByName(req, res, next) {
  //   try {
  //     const name = new RegExp(req.params.name, "i");
  //     const foundUser = await User.find({ name });
  //     if (!foundUser) {
  //       return res
  //         .status(400)
  //         .send({ message: `${req.params.name} not found` });
  //     } else {
  //       return res.status(200).send(foundUser);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // },
};

module.exports = UserController;
