const router = require("express").Router();
const { createUser, getSingleUser, login } = require("../../controllers/user");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(authMiddleware);

router.route("/login").post(login);

// needs to login to add new exercise
router.route("/track").get(authMiddleware, getSingleUser);

module.exports = router;
