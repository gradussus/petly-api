const { User } = require("../../schemas/userModel");

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

  res.json({ message: "Notice is added to favorites" });
};

module.exports = addToFavoriteList;
