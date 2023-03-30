const { User } = require("../../schemas/userModel");
const { Notice } = require("../../schemas/noticeModel");

const removeFromFavoriteList = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  const user = await User.findById({ _id });

  const isFavorite = user.favoriteList.includes(id);

  if (!isFavorite) {
    return res.status(409).json({
      message: "Notice isn`t favorite.",
    });
  }

  user.favoriteList.pull(id);

  await user.save();

  const { favoriteList } = await User.findById({ _id });

  const notices = await Notice.find({ _id: { $in: favoriteList } }).sort({
    _id: -1,
  });
  res.status(200).json(notices);
};

module.exports = removeFromFavoriteList;
