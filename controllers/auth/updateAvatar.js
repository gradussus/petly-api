// const fs = require("fs/promises");
// const path = require("path");

// const { User } = require("../../schemas/userModel");

// const avatarsDir = path.join(__dirname, "../../public", "images", "avatars");

// const updateAvatar = async (req, res) => {
//   const { id } = req.user;
//   const userData = req.body;

//   const user = await User.findByIdAndUpdate(
//     id,
//     { avatarURL: avatarsDir, ...userData },
//     { new: true }
//   );
//   if (!user) {
//     return res.status(404).json({ Message: `User with id=${id} not found` });
//   }
//   res.status(200).json({
//     user,
//   });
// };

// module.exports = updateAvatar;
