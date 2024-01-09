const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication, isAdmin } = require("../middleware/authentication");
// const upload = require("../middleware/upload");

router.post("/register", UserController.create);
router.post("/login", UserController.login);
router.get("/confirm/:emailToken", UserController.confirm);
// router.get("/profile", authentication, UserController.getLoggedUser);
router.put("/profile", authentication, UserController.updateProfile);
router.get("/:_id", UserController.getById);
// router.get("/name/:username", UserController.getByName);
router.delete("/logout", authentication, UserController.logout);

module.exports = router;
