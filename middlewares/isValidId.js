const { isValidObjectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(417).json({ message: "Expectation failed" });
    return;
  }
  next();
};

module.exports = isValidId;
