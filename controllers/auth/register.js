const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");
const { User } = require("../../schemas/userModel");
const gravatar = require("gravatar");

const register = async (req, res, next) => {
  const { name, email, password, city, phone } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    next(new Conflict("Email has already existed"));
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log(hashPassword);
  await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL: gravatar.url(email),
    city,
    phone,
  });
  res.status(201).json({
    data: {
      name,
      email,
      city,
      phone,
    },
  });
};

module.exports = register;
