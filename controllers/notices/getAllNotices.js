const { Notice } = require("../../schemas/noticeModel");

const getAllNotices = async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 });

  res.status(200).json(notices);
};

module.exports = getAllNotices;
