const { Notice } = require("../../schemas/noticeModel");

const getPersonalNotices = async (req, res) => {
  const { _id } = req.user;

  const notices = await Notice.find({
    owner: { _id },
  }).sort({
    createdAt: -1,
  });

  res.json(notices);
};

module.exports = getPersonalNotices;
