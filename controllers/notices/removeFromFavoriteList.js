const { User } = require("../../schemas/userModel");

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

  // const user = await User.updateOne(
  //   { _id },
  //   { $pull: { favorites: noticeId } }
  // );

  await user.save();

  res.json({ message: "Notice is removed from favoriteList" });
};

module.exports = removeFromFavoriteList;
