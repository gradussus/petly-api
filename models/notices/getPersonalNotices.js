const { Notice } = require("../../schemas/noticeModel");

const getPersonalNotices = async (req, res) => {
  const { categoryName } = req.params;
  const { _id } = req.user;
  console.log(_id);

  const notices = await Notice.find({
    category: categoryName,
    owner: _id,
  }).sort({
    createdAt: -1,
  });

  //   if (notices.length === 0) {
  //     res.status(404).json({
  //       message: "Not found",
  //     });
  //     }

  if (notices.length === 0) {
    res.json({
      code: 404,
      message: "Not found",
    });
  }

  res.json(notices);
};

module.exports = getPersonalNotices;
