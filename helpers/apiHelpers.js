const {
  // ConflictError,
  // UnauthorizedError,
  // NotFoundError,
  // Error400,
  // Error404,
} = require("./errors");

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  // if (
  //   error instanceof ConflictError ||
  //   error instanceof UnauthorizedError ||
  //   error instanceof NotFoundError ||
  //   error instanceof Error404 ||
  //   error instanceof Error400
  // )
  {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = { asyncWrapper, errorHandler };
