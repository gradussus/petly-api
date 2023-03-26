// const Jimp = require("jimp");
const { User } = require("../../schemas/userModel");

// const path = require("path");
// const fs = require("fs/promises");
const { uploadImage } = require("../../middlewares");

const updateAvatar = async (req, res, next) => {
  // const { path: tempUpload, originalname } = req.file;
  // const { _id: id } = req.user;
  // const imageName = `${id}_${originalname}`;
  // const imageAvatar = await Jimp.read(tempUpload);
  // imageAvatar.resize(250, 250).write(tempUpload);
  // const resultUpload = path.join(avatarDir, imageName);
  // fs.rename(tempUpload, resultUpload);
  // const avatarURL = await uploadImage(resultUpload);
  // await User.findByIdAndUpdate(req.user._id, { avatarURL });
  // res.json({ avatarURL });
  // const locaFilePathtoAvatar = req.user.avatarURL;

  const locaFilePath = req.file.path;
  const avatarURL = await uploadImage(locaFilePath);
  await User.findByIdAndUpdate(req.user._id, { avatarURL });
  res.json({ avatarURL });
};

module.exports = updateAvatar;
