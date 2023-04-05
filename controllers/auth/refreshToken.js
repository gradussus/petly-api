const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../schemas/userModel");

const { JWT_SECRET, REFRESH_SECRET_KEY } = process.env;

const refreshToken = async (req, res) => {
  const { refreshToken: token } = req.body;
  try {
    const { id } = jwt.verify(token, REFRESH_SECRET_KEY);
    const isExist = await User.findOne({ refreshToken: token });

    if (!isExist) {
      return res.status(403).json({
        message: "RefreshToken is expired",
      });
    }

    const payload = {
      id,
    };

    const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "10m" });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "10d",
    });

    res.json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    return res.status(403).json({
      message: "RefreshToken is expired",
    });
  }
};

module.exports = refreshToken;
