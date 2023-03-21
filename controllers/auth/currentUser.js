const currentUser = async (req, res, next) => {
  const { name, email, city, avatarURL, phone, birthData, favoriteList } =
    req.body;

  res.status(200).json({
    data: {
      user: {
        name,
        email,
        city,
        avatarURL,
        phone,
        birthData,
        favoriteList,
      },
    },
  });
};

module.exports = currentUser;
