const { User } = require("../../schemas/userModel");

const updateAvatar = async (req, res, next) => {
  const avatarURL = req.file.path;

  await User.findByIdAndUpdate(req.user._id, { avatarURL });

  res.json({ avatarURL, message: "success" });
};

module.exports = updateAvatar;
