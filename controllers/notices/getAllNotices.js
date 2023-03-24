const { Notice } = require("../../schemas/noticeModel");

// const { noticeService } = require("../../services/noticeService");

// const getNotice = async (_, res) => {
//   const notice = await noticeService();
//   console.log(notice);
//   res.json(notice);
// };

const getAllNotices = async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 });

  if (notices.length === 0) {
    res.json({
      message: "Not found",
    });
  }

  res.status(200).json(notices);
};

module.exports = getAllNotices;
