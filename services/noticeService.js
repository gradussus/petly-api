const { Notice } = require("../schemas/newsModel");

const noticeService = async () => {
  const notice = await Notice.find();
  return notice;
};

module.exports = {
  noticeService,
};
