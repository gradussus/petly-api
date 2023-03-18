const getAllNotices = require("./getAllNotices");

const addNotice = require("./addNotice");

const getNoticesByCategory = require("./getNoticesByCategory.js");

const getNoticesBySearch = require("./getNoticesBySearch");

module.exports = {
  addNotice,
  getAllNotices,
  getNoticesByCategory,
  getNoticesBySearch,
};
