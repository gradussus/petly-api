const getAllNotices = require("./getAllNotices");

const addNotice = require("./addNotice");

const getNoticesByCategory = require("./getNoticesByCategory");

const getNoticesBySearch = require("./getNoticesBySearch");

const getNoticeById = require("./getNoticeById");

const getPersonalNotices = require("./getPersonalNotices");

const deletePersonalNotice = require("./deletePersonalNotice");

module.exports = {
  addNotice,
  getAllNotices,
  getNoticesByCategory,
  getNoticesBySearch,
  getNoticeById,
  getPersonalNotices,
  deletePersonalNotice,
};
