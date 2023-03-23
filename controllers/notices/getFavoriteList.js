const { User } = require("../../schemas/userModel");
const { Notice } = require("../../schemas/noticeModel");

const getFavoriteList = async (req, res) => {
  const { _id } = req.user;

  const { favoriteList } = await User.findById({ _id });

  const notices = await Notice.find({ _id: { $in: favoriteList } }).sort({
    _id: -1,
  });

  res.status(200).json(notices);
};

module.exports = getFavoriteList;
