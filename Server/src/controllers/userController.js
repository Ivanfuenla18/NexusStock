const User = require("../models/User");
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    user.password = undefined;

    res.status(201).json({
      success: true,
      message: "Usuario creado con éxito",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
