const express = require("express");

const router = express.Router();
const userSignUpController = require("../controller/userSignUp.controller.js");

router.post("/signup", router);

module.exports = router;
