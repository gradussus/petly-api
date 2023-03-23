const { User } = require("../../schemas/userModel");

const updateUser = async (req, res) => {
  const { id } = req.user;

  const { name, email, city, avatarURL, phone, birthDate } = req.body;

  const user = await User.findByIdAndUpdate(
    id,
    { name, email, city, avatarURL, phone, birthDate },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ Message: `User with id=${id} not found` });
  }
  res.status(200).json({
    user,
  });
};

module.exports = updateUser;
