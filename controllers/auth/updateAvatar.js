const { User } = require("../../schemas/userModel");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const avatarURL = req.file.path;
  console.log(avatarURL);

  await User.findByIdAndUpdate(_id, { avatarURL: avatarURL });

  res.status(200).json(avatarURL);
};

module.exports = updateAvatar;
