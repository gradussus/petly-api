const { Notice } = require("../../schemas/noticeModel");
const getNoticeById = async (req, res) => {
  const { id } = req.params;
  const notice = await Notice.findById(id).populate("owner", "email phone");

  if (!notice) {
    res.json({
      code: 404,
      message: "Not found",
    });
  }
  //res.json({ code: 200, data: notice });
  res.status(200).json(notice);
};
module.exports = getNoticeById;
