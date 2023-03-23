const currentUser = async (req, res, next) => {
  const { name, email, city, avatarURL, phone, birthDate } = req.user;

  res.status(200).json({
    user: {
      name,
      email,
      city,
      avatarURL,
      phone,
      birthDate,
    },
  });
};

module.exports = currentUser;
