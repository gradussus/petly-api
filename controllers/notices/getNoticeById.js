const { Notice } = require("../../schemas/noticeModel");

const getNoticeById = async (req, res) => {
  const { id } = req.params;
  const notice = await Notice.findById(id).populate("owner", "email phone");

  if (!notice) {
    res.status(404).json({
      message: "Not found",
    });
  }

  res.status(200).json(notice);
};
module.exports = getNoticeById;
