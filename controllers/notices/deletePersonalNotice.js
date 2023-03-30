const { Notice } = require("../../schemas/noticeModel");

const deletePersonalNotice = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;

  const result = await Notice.findByIdAndRemove({ _id: id, owner: { _id } });

  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json(result);
};
module.exports = deletePersonalNotice;
