const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../schemas/userModel");

const { JWT_SECRET, REFRESH_SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Incorrect email",
    });
  }
  const passwordCompare = bcrypt.compareSync(password, user.password);

  if (!passwordCompare) {
    return res.status(401).json({
      message: "Incorrect password",
    });
  }

  const payload = {
    id: user._id,
  };

  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "10m" });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "10d",
  });
  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

  return res.status(200).json({
    accessToken,
    refreshToken,
  });
};

module.exports = login;
