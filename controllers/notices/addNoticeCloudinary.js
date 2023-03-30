const { Notice } = require("../../schemas/noticeModel");

const addNotice = async (req, res) => {
  const owner = req.user.id;
  const noticeData = req.body;
  const data = !!req.file
    ? { imageURL: req.file.path, owner, ...noticeData }
    : { owner, ...noticeData };

  const newNotice = await Notice.create(data);

  res.status(201).json(newNotice);
};

module.exports = addNotice;
