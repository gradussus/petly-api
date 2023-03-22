const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../schemas/userModel");

const { JWT_SECRET } = process.env;

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

  const token = jwt.sign(payload, JWT_SECRET);
  await User.findByIdAndUpdate(user._id, { token });

  return res.status(200).json({
    data: {
      token,
    },
  });
};

module.exports = login;
