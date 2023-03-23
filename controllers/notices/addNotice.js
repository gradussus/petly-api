const { Notice } = require("../../schemas/noticeModel");

const addNotice = async (req, res) => {
  const { body } = req;
  const { _id } = req.user;

  const newNotice = await Notice.create({
    ...body,
    photoURL: req?.file?.path,

    owner: _id,
  });

  res.status(201).json(newNotice);
};

module.exports = addNotice;
