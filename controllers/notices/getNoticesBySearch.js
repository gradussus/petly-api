const { Notice } = require("../../schemas/noticeModel");

const getNoticesBySearch = async (req, res) => {
  const { categoryName, qwery } = req.params;

  const notices = await Notice.find({
    category: categoryName,
    title: { $regex: qwery, $options: "i" },
  }).sort({
    createdAt: -1,
  });

  res.status(200).json(notices);
};

module.exports = getNoticesBySearch;
