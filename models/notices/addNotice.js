const { Notice } = require("../../schemas/noticeModel");

const addNotice = async (req, res) => {
  const { categoryName } = req.params;
  const { body } = req;
  const { _id } = req.user;

  const newNotice = await Notice.create({
    ...body,
    photoURL: req?.file?.path,
    category: categoryName,
    owner: _id,
  });

  // res.status(201).json({
  //   code: 201,
  //   status: "success",
  //   data: newNotice,
  //   //data: notice,
  // });
  res.status(201).json(newNotice);
};

module.exports = addNotice;
