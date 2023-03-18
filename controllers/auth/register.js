const { Conflict } = require("http-errors");

const { User } = require("../../schemas/userSchema");

const register = async (req, res, next) => {
  const { name, email, password, city, phone } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    next(new Conflict("Email has already existed"));
  }
  const result = await User.create({ name, email, password, city, phone });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      name,
      email,
      city,
      phone,
    },
  });
};

module.exports = register;
