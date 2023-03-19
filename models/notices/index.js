const getAllNotices = require("./getAllNotices");

const addNotice = require("./addNotice");

const getNoticesByCategory = require("./getNoticesByCategory");

const getNoticesBySearch = require("./getNoticesBySearch");

const getNoticeById = require("./getNoticeById");

module.exports = {
  addNotice,
  getAllNotices,
  getNoticesByCategory,
  getNoticesBySearch,
  getNoticeById,
};
