const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");
const { User } = require("../../schemas/userSchema");

const register = async (req, res, next) => {
  const { name, email, password, city, phone } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    next(new Conflict("Email has already existed"));
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({
    name,
    email,
    password: hashPassword,
    city,
    phone,
  });
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
