const { Notice } = require("../../schemas/noticeModel");
const getNoticeById = async (req, res) => {
  const { id } = req.params;
  const notice = await Notice.findById(id);

  if (!notice) {
    res.json({
      code: 404,
      message: "Not found",
    });
  }
  res.json({ code: 200, data: notice });
};
module.exports = getNoticeById;