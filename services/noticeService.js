const { Notice } = require("../schemas/newsModel");

const newsService = async () => {
  const notice = await Notice.find();
  return notice;
};

module.exports = {
  noticeService,
};
