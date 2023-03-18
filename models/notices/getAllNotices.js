const { Notice } = require("../../schemas/noticeModel");

const getAllNotices = async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 });

  res.json({
    code: 200,
    status: "success",
    data: notices,
  });
};

module.exports = getAllNotices;
