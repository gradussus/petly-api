const { Notice } = require("../../schemas/noticeModel");

const getAllNotices = async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 });

  if (notices.length === 0) {
    res.json({
      code: 404,
      message: "Not found",
    });
  }

  // res.json({
  //   code: 200,
  //   status: "success",
  //   data: notices,
  // });
  res.status(200).json(notices);
};

module.exports = getAllNotices;
