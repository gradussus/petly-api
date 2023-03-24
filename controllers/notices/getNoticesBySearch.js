const { Notice } = require("../../schemas/noticeModel");

// пошук по слову і категорії

const getNoticesBySearch = async (req, res) => {
  const { categoryName, qwery } = req.params;

  const notices = await Notice.find({
    category: categoryName,
    title: { $regex: qwery, $options: "i" },
  }).sort({
    createdAt: -1,
  });

  // if (notices.length === 0) {
  //   res.json({
  //     message: "Not found",
  //   });
  // }

  res.status(200).json(notices);
};

// const getNoticesBySearch = async (req, res) => {
//   const { qwery } = req.params;

//   const notices = await Notice.find({
//     title: { $regex: qwery, $options: "i" },
//   }).sort({
//     createdAt: -1,
//   });

//   res.status(200).json(notices);
// };

module.exports = getNoticesBySearch;
