const { noticeService } = require("../../services/noticeService");

const getNotice = async (_, res) => {
  const notice = await noticeService();
  console.log(notice);
  res.json(notice);
};

module.exports = {
  getNotice,
};
