const { Notice } = require("../../schemas/noticeModel");

const getNoticesByCategory = async (req, res) => {
  const { categoryName } = req.params;

  //const { page = 1, limit = 12 } = req.query;
  //const skip = (page - 1) * limit;

  //const notices = await Notice.find({ category }, "-createdAt -updatedAt", {
  // skip,
  // limit,
  //})
  // .sort({ createdAt: -1 })
  //     .populate("owner", "email phone");

  const notices = await Notice.find({ category: categoryName }).sort({
    createdAt: -1,
  });

  if (notices.length === 0) {
    res.json({
      code: 404,
      message: "Not found",
    });
  }

  //const total = await Notice.find({ category }).count();

  // res.json({
  //   code: 200,
  //   status: "success",
  //   data: notices,
  //   //totalPages: Math.ceil(total / limit),
  //   //page: page * 1,
  // });

  res.status(200).json(notices);
};

module.exports = getNoticesByCategory;
