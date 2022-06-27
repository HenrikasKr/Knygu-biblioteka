const Users = require("./../models/userModel");

// GET method all user data
exports.getAllUsersData = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users: users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        users: users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Update User by Id
exports.updateUserById = async (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  try {
    await Users.findByIdAndUpdate(req.body.id, req.body);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// get user BY email
exports.getUsersByEmail = async (req, res) => {
  try {
    const user = await Users.find({ email: req.body.email });

    res.status(200).json({
      status: "success",
      results: user.length,
      data: {
        users: user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};


exports.deleteUserById = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};