const mongoose = require("mongoose");
// const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Porfavor, introduce tu nombre"],
    },
    surname: {
      type: String,
      required: [true, "Porfavor, introduce tu apellido"],
    },
    email: {
      type: String,
      required: [true, "Porfavor, introduce un correo"],
      match: [/.+\@.+\..+/, "Introduce un correo válido"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Porfavor, introduce una contraseña"],
    },
    // dob: {
    //   type: Date,
    //   required: [true, "Porfavor, introduce una fecha de nacimiento"],
    // },
    // avatar: {
    //   type: String,
    // },
    role: {
      type: String,
      default: "user",
    },
    confirmed: Boolean,
    tokens: [],
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const user = this._doc;
  delete user.tokens;
  delete user.password;
  return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
