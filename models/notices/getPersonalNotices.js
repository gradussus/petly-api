const { Notice } = require("../../schemas/noticeModel");

const getPersonalNotices = async (req, res) => {
  const { _id } = req.user;

  const notices = await Notice.find({
    owner: { _id },
  }).sort({
    createdAt: -1,
  });

  if (notices.length === 0) {
    res.json({
      message: "Not found",
    });
  }

  res.json(notices);
};

module.exports = getPersonalNotices;
