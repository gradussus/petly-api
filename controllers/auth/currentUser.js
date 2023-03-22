const currentUser = async (req, res, next) => {
  const { name, email, city, avatarURL, phone, birthData, favoriteList } =
    req.user;

  res.status(200).json({
    user: {
      name,
      email,
      city,
      avatarURL,
      phone,
      birthData,
      favoriteList,
    },
  });
};

module.exports = currentUser;
