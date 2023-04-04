const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const updateUser = require("./updateUser");
const currentUser = require("./currentUser");
const updateAvatar = require("./updateAvatar");
const refreshToken = require("./refreshToken");

module.exports = {
  register,
  login,
  logout,
  updateUser,
  currentUser,
  updateAvatar,
  refreshToken,
};
