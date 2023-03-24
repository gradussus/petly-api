const { User } = require("../../schemas/userModel");
const { Notice } = require("../../schemas/noticeModel");

const addToFavoriteList = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  const user = await User.findById({ _id });

  const isAdded = user.favoriteList.includes(id);

  if (isAdded) {
    return res.status(409).json({
      message: "Notice is already favorite.",
    });
  }

  user.favoriteList.push(id);

  //     const user = await User.updateOne(
  //     { _id },
  //     { $addToSet: { favorites: id } }
  //   );

  await user.save();

  const { favoriteList } = await User.findById({ _id });

  const notices = await Notice.find({ _id: { $in: favoriteList } }).sort({
    _id: -1,
  });
  //res.json({ message: "Notice is added to favorites" });
  res.status(200).json(notices);
};

module.exports = addToFavoriteList;
