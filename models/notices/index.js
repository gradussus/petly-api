const getAllNotices = require("./getAllNotices");

const addNotice = require("./addNotice");

const getNoticesByCategory = require("./getNoticesByCategory");

const getNoticesBySearch = require("./getNoticesBySearch");

const getNoticeById = require("./getNoticeById");

const getPersonalNotices = require("./getPersonalNotices");

const deletePersonalNotice = require("./deletePersonalNotice");

const addToFavoriteList = require("./addToFavoriteList");

const removeFromFavoriteList = require("./removeFromFavoriteList");

const getFavoriteList = require("./getFavoriteList");

module.exports = {
  addNotice,
  getAllNotices,
  getNoticesByCategory,
  getNoticesBySearch,
  getNoticeById,
  getPersonalNotices,
  deletePersonalNotice,
  addToFavoriteList,
  removeFromFavoriteList,
  getFavoriteList,
};
