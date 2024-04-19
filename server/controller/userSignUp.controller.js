const userModel = require("../models/userModel.js");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    if (!email) {
      throw new Error("Please Provide email");
    }

    if (!password) {
      throw new Error("Please Provide email");
    }

    if (!name) {
      throw new Error("Please Provide email");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Something went wrong");
    }

    const payload = {
      ...req.body,
      password: hashPassword,
    };

    const userData = new userModel(payload);

    const saveUser = userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User saved successfully",
    });
  } catch (error) {
    resizeBy.json({
      message: error,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
