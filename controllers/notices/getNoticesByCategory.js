const { Notice } = require("../../schemas/noticeModel");

const getNoticesByCategory = async (req, res) => {
  const { categoryName } = req.params;

  //const { page = 1, limit = 12 } = req.query;
  //const skip = (page - 1) * limit;

  //const notices = await Notice.find({ categoryName }, "-createdAt -updatedAt", {
  // skip,
  // limit,
  //})
  // .sort({ createdAt: -1 });

  const notices = await Notice.find({ category: categoryName }).sort({
    createdAt: -1,
  });

  if (notices.length === 0) {
    res.json({
      message: "Not found",
    });
  }

  //const total = await Notice.find({ category }).count();

  // res.json({
  //   data: notices,
  //   totalPages: Math.ceil(total / limit),
  //   page: page * 1,
  // });

  res.json(notices);
};

module.exports = getNoticesByCategory;
