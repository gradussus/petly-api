const { User } = require("../../schemas/userModel");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { accessToken: "", refreshToken: "" });
  res.status(204).json();
};

module.exports = logout;
