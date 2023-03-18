const { Notice } = require("../schemas/noticeModel");

const noticeService = async () => {
  const notice = await Notice.find();
  return notice;
};

module.exports = {
  noticeService,
};
