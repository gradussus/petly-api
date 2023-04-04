const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, REFRESH_SECRET_KEY } = process.env;
const { User } = require("../../schemas/userModel");
const gravatar = require("gravatar");

const register = async (req, res, next) => {
  const { name, email, password, city, phone } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({ Message: "Email has already existed" });
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL: gravatar.url(email),
    city,
    phone,
  });

  const payload = {
    id: newUser._id,
  };
  console.log(payload);
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "10m" });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "10d",
  });
  await User.findByIdAndUpdate(newUser._id, { accessToken, refreshToken });

  res.status(201).json({
    name,
    email,
    avatarURL: gravatar.url(email),
    city,
    phone,
    accessToken,
    refreshToken,
  });
};

module.exports = register;
