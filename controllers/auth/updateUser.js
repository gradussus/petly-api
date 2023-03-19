const { NotFound } = require("http-errors");

const { User } = require("../../schemas/userModel");

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.user;

    const { name, email, city, phone, birthData } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { name, email, city, phone, birthData },
      { new: true }
    );
    if (!user) {
      next(new NotFound(`User with id=${id} not found`));
    }
    res.status(200).json({
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;