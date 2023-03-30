const { Notice } = require("../../schemas/noticeModel");

const getNoticesByCategory = async (req, res) => {
  const { categoryName } = req.params;

  const notices = await Notice.find({ category: categoryName }).sort({
    createdAt: -1,
  });

  res.json(notices);
};

module.exports = getNoticesByCategory;
